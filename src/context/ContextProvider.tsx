import {createContext, useContext} from 'react';
import {StoreType} from "../models/StoreType";
import {IUserModel} from "../models/IUserModel";

const defaultValue: StoreType = {
    userStore: {
        allUsers: [],
        setFavoriteUser: (obj:IUserModel)=> {},
    },
    postStore: {
        allPosts: []
    }
}

export const MyContext = createContext<StoreType>(defaultValue)
export const useMyContext = (): StoreType => useContext(MyContext)