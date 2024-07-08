import axios from "axios";
import {IPosts} from "../model/IPosts/IPosts";
import {IUsers} from "../model/IUsers/IUsers";


let axiosInstance = axios.create(
    {
        baseURL: "https://dummyjson.com",
        headers: {
            'ContentType': "application/json"
        }
    }
);
const getAllUsers = async ():Promise<IUsers[]>=> {
    return await axiosInstance.get("/users").then(res => res.data.users);

}
const getPostsOfUsers = async (id: number):Promise<IPosts[]> => {
    return await axiosInstance.get("/users/" + id + "/posts/").then(res => res.data.posts);
}

export {getAllUsers, getPostsOfUsers}