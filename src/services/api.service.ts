import axios, {AxiosError} from "axios";
import {AuthDataModel} from "../models/AuthDataModel";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {retrieveLocalStorage} from "../helpers/retrieveLocalStorage";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
})

axiosInstance.interceptors.request.use((request) => {
    const tokenPair = retrieveLocalStorage<ITokenObtainPair>("tokenPair");

    if (localStorage.getItem("tokenPair") && request.url !== "/auth/refresh") {
        request.headers.set("Authorization", "Bearer " + tokenPair.access);
    }
    return request;
});

const authService = {
    authentication: async (authData: AuthDataModel): Promise<boolean> => {
        let response
        try {
            response = await axiosInstance.post<ITokenObtainPair>("/auth", authData)
            localStorage.setItem("tokenPair", JSON.stringify(response.data))
        } catch (e) {
            console.log(e)
        }

        return !!(response?.data?.access && response?.data?.refresh)
    },
    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post("/auth/refresh", refreshToken)
    }

}
const carService = {
    getCars: async (): Promise<ICarPaginatedModel | null> => {


        try {
            const response = await axiosInstance.get<ICarPaginatedModel>("/cars");
            return response.data;
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError?.response?.status === 401) {
                const refreshToken = retrieveLocalStorage<ITokenObtainPair>("tokenPair").refresh
                await authService.refresh(refreshToken)
                return carService.getCars()
            }
        }
        return null;
    }
}


export {authService, carService}




