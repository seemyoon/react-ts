import axios, {AxiosResponse} from "axios";
import {IComments} from "../models/IComments/IComments";
import {IUsers} from "../models/IUsers/IUsers";
import {IPosts} from "../models/IPosts/IPosts";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});
axiosInstance.interceptors.request.use(req => {
    req.headers.set("Content-Type", "application/json")
    return req;
})

const getAllUsers = async ():Promise<IUsers[]> => {
    return await axiosInstance.get("/users").then((res) => res.data);
}

const getAllPosts = async ():Promise<IPosts[]> => {
    return await axiosInstance.get("/posts").then((res) => res.data);
}

const getAllComments = async ():Promise<IComments[]> => {
    return await axiosInstance.get("/comments").then(res => res.data);
}
export {getAllUsers, getAllPosts, getAllComments}