import axios from "axios";
import {IUsers} from "../models/IUser/IUser";
import {IPosts} from "../models/IPosts/IPosts";
import {IComments} from "../models/IComments/IComments";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

axiosInstance.interceptors.request.use(res => {
    res.headers.set("Content-Type", "application/json")
    return res;
});

const getAllUsers = async (): Promise<IUsers[]> => {
    return await axiosInstance.get("/users").then((resp) => resp.data);
}

const getAllPosts = async (): Promise<IPosts[]> => {
    return await axiosInstance.get("/posts").then((resp) => resp.data);
}

const getAllPostsOfUser = async (userId: number): Promise<IPosts[]> => {
    return await axiosInstance.get("/posts?userId=" + userId).then((resp) => resp.data);
}

const getAllComments = async (): Promise<IComments[]> => {
    return await axiosInstance.get("/comments").then((resp) => resp.data);
}

const getAllCommentsOfPost = async (postId: number): Promise<IComments[]> => {
    return await axiosInstance.get("/comments?postId=" + postId).then((resp) => resp.data);
}

export {getAllUsers, getAllPosts, getAllComments, getAllPostsOfUser, getAllCommentsOfPost}