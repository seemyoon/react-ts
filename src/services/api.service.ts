import axios from "axios";
import {IUsers} from "../models/IUser/IUser";
import {IPosts} from "../models/IPosts/IPosts";
import {IComments} from "../models/IComments/IComments";
import {ICommentsDummyJSON} from "../models/IComments/ICommentsDummyJSON/ICommentsDummyJSON";
import {IPostsDummyJSON} from "../models/IPosts/IPostsDummyJSON/IPostsDummyJSON";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

axiosInstance.interceptors.request.use(res => {
    res.headers.set("Content-Type", "application/json")
    return res;
});

const axiosInstanceDummyJSON = axios.create({
    baseURL: "https://dummyjson.com",
});

axiosInstanceDummyJSON.interceptors.request.use(res => {
    res.headers.set("Content-Type", "application/json")
    return res;
});

const getAllUsers = async (): Promise<IUsers[]> => {
    return await axiosInstance.get("/users").then((resp) => resp.data);
}

const getAllPosts = async (): Promise<IPostsDummyJSON[]> => {
    return await axiosInstanceDummyJSON.get("/posts").then((resp) => resp.data.posts);
}
const getAllPostWithSkip = async (skip: number): Promise<IPostsDummyJSON[]> => {
    return await axiosInstanceDummyJSON.get("/posts?skip=" + skip).then((resp) => resp.data.posts);
}

const getAllPostsOfUser = async (userId: number): Promise<IPosts[]> => {
    return await axiosInstance.get("/posts?userId=" + userId).then((resp) => resp.data);
}

const getAllComments = async (): Promise<ICommentsDummyJSON[]> => {
    return await axiosInstanceDummyJSON.get("/comments").then((resp) => resp.data.comments);
}

const getAllCommentsWithSkip = async (skip: number): Promise<ICommentsDummyJSON[]> => {
    return await axiosInstanceDummyJSON.get("/comments?skip=" + skip).then((resp) => resp.data.comments);
}

const getAllCommentsOfPost = async (postId: number): Promise<IComments[]> => {
    return await axiosInstance.get("/comments?postId=" + postId).then((resp) => resp.data);
}

export {
    getAllUsers,
    getAllPosts,
    getAllComments,
    getAllPostsOfUser,
    getAllCommentsOfPost,
    getAllCommentsWithSkip,
    getAllPostWithSkip
}