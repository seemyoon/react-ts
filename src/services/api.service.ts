import axios from "axios";
import {FormType} from "../models/FormType"

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    method: "POST",
});
axiosInstance.interceptors.request.use(request => {
    request.headers.set("Content-Type", "application/json");
    return request;
})

const postUsers = async (data: FormType): Promise<FormType> => {
    return await axiosInstance.post("/posts", data).then(response =>
        response.data)
}

export {postUsers};