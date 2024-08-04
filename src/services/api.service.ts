import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IUser} from "../models/UserModel/IUser";
import {IPost} from "../models/PostModel/IPost";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {}
})
const userService = {
    getAll: async () => {
        const response = await axiosInstance.get<IUser[]>(urls.user.base)
        return response.data
    }
}
const postService = {
    getAll: async () => {
        const response = await axiosInstance.get<IPost[]>(urls.post.base)
        return response.data
    }
}
export {userService, postService}