import axios from "axios";

let axiosInstance = axios.create(
    {
        baseURL: "https://dummyjson.com/docs",
        headers: {
            'ContentType': "application/json"
        }
    }
);
const getAllUsers = async () => {
    return await axiosInstance.get("/users").then(res =>res.data.users);

}
const getPostsOfUsers = async () => {
    return await axiosInstance.get("/users/" +
        // id
        + "posts").then(res => res.data.posts);
}

export {getAllUsers, getPostsOfUsers}