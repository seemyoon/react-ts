import axios, {AxiosError} from "axios";
import {IUserData} from "../model/IUserData";
import {ITokenObtainPair} from "../model/ITokenObtainPair";
import {ICarPaginatedModel} from "../model/ICarPaginatedModel";
import retrieveLocalStorage from "../hepler/retrieveLocalStorage";

const axiosInstance = axios.create({
    baseURL: "http://owu.linkpc.net/carsAPI/v2",
    headers: {}
})
axiosInstance.interceptors.request.use((request) => {
    request.headers.set("Authorization", "Bearer " + retrieveLocalStorage<ITokenObtainPair>("tokenPair").access)
    return request;
})
const AuthService = {
    authentication: async (authData: IUserData): Promise<boolean> => {
        let response;
        try {
            response = await axiosInstance.post<ITokenObtainPair>("/auth", authData)
            localStorage.setItem("tokenPair", JSON.stringify(response.data))
        } catch (error) {
            console.log(error);
        }

        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<ITokenObtainPair>("/auth/refresh", {refresh: refreshToken})
        localStorage.setItem("tokenPair", JSON.stringify(response.data))
    }
}
const CarService = {
    getAll: async (page: string): Promise<ICarPaginatedModel | null> => {
        try {
            const response = await axiosInstance.get<ICarPaginatedModel>("/cars", {params: {page: page}})
            return response.data
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError?.response?.status === 401) {
                const refreshToken = retrieveLocalStorage<ITokenObtainPair>("tokenPair").refresh
                await AuthService.refresh(refreshToken)
                return CarService.getAll(page)

            }
        }
        return null
    }

}
export {AuthService, CarService};