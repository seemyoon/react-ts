import {IUserModel} from "./IUserModel";
import {IPostModel} from "./IPostModel";

export type StoreType = {
    userStore:{
        allUsers:IUserModel[]
        setFavoriteUser: (obj:IUserModel)=> void,
    },
    postStore:{
        allPosts:IPostModel[]
    }
}