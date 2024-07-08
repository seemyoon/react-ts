import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",

});

axiosInstance.interceptors.request.use(request => {
    request.headers.set("Content-Type", "application/json");
    return request
})

const getAllUsers = async () => {
    return await axiosInstance.get("/users").then(res => res.data.users);

}
const getPostsOfUsers = async (id: number) => {
    const url = `/users/${id}/posts/`
    await axiosInstance.get(url).then(res => res.data.posts).then(res=> console.log(res))
}

export {getAllUsers, getPostsOfUsers}
