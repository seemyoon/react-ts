import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",

});
axiosInstance.interceptors.request.use(request => {
    request.headers.set("Content-Type", "application/json");
    return request
})
const getAllUsers = async () => {
    const {data} = await axiosInstance.get("/users");
    return data.users;
}

const getPostsOfUserById = async (id: number) => {
    return await axiosInstance.get("/posts/" + id).then(response => response.data)
}
export {getAllUsers, getPostsOfUserById}