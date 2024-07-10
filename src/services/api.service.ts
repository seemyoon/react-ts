import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});
axiosInstance.interceptors.request.use(req => {
    req.headers.add("Content-Type", "application/json")
    return req;
})

const getAllUsers = async () => {
    return await axiosInstance.get("/users").then((res) => res);
}

const getAllPosts = async () => {
    return await axiosInstance.get("/posts").then((res) => res);
}

const getAllComments = async () => {
    return await axiosInstance.get("/comments").then((res) => res);
}
export {getAllUsers, getAllPosts, getAllComments}