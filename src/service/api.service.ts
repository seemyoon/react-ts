import axios, {AxiosError} from "axios";
import {IAuthUserData} from "../model/IAuthUserData";
import {ITokenObtainPair} from "../model/ITokenObtainPair";
import {ICarPaginatedModel} from "../model/ICarPaginatedModel";
import retrieveLocalStorage from "../hepler/retrieveLocalStorage";

const axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v2",
    headers: {}
});
axiosInstance.interceptors.request.use((request) => {
        if (localStorage.getItem("tokenPair") && request.url !== "/auth/refresh") {
            request.headers.set("Authorization", "Bearer " + retrieveLocalStorage<ITokenObtainPair>("tokenPair").access);
        }
        return request;
    }
)

const authService = {
    authentication: async (authData: IAuthUserData): Promise<boolean> => {
        let response
        try {
            response = await axiosInstance.post<ITokenObtainPair>("/auth", authData)
            localStorage.setItem("tokenPair", JSON.stringify(response.data))
        } catch (error) {
            console.log(error)
        }
        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<ITokenObtainPair>("/auth/refresh", {refresh: refreshToken})
        localStorage.setItem("tokenPair", JSON.stringify(response.data))
    }
}
const carService = {
    getAllCars: async (page:string): Promise<ICarPaginatedModel | null> => {
        try {
            const response = await axiosInstance.get<ICarPaginatedModel>("/cars", {params:{page:page}})
            console.log(response.data.items)
            return response.data
        } catch (e) {
            const axiosError = e as AxiosError;
            console.log(axiosError)
            if (axiosError?.response?.status === 401) {
                const refreshToken = retrieveLocalStorage<ITokenObtainPair>("tokenPair").refresh;
                await authService.refresh(refreshToken)
                return carService.getAllCars(page)
            }
        }
        return null
    }
}
export {authService, carService}