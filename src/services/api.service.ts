import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

axiosInstance.interceptors.request.use(res => {
    res.headers.set("Content-Type", "application/json")
    return res;
});

const getAllUsers = async () => {
    return await axiosInstance.get("/users").then((resp) => resp.data);
}


const getAllPosts = async () => {
    return await axiosInstance.get("/posts").then((resp) => resp.data);
}

const getAllPostsOfUser = async (userId:number) => {
    return await axiosInstance.get("/posts?userId=" + userId).then((resp) => resp.data);
}

const getAllComments = async () => {
    return await axiosInstance.get("/comments").then((resp) => resp.data);
}
export {getAllUsers, getAllPosts, getAllComments, getAllPostsOfUser}