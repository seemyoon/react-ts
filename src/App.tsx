import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {MyContext} from "./context/ContextProvider";
import {postService, userService} from "./services/api.service";
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";

const App = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    const [posts, setPosts] = useState<IPostModel[]>([])
    const [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null)
    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data))
    }, []);
    useEffect(() => {
        postService.getPosts().then(value => setPosts(value.data))
    }, []);
    const lift = (obj: IUserModel) => {
        setFavoriteUserState(obj)
    }
    return (
        <div>
            <MyContext.Provider value={{
                userStore: {
                    allUsers: users,
                    setFavoriteUser: (obj: IUserModel) => {
                        lift(obj);
                    }
                },
                postStore: {
                    allPosts: posts
                }
            }}>
                <HeaderComponent/>
                <Outlet/>
            </MyContext.Provider>
            <hr/>
            {favoriteUserState && favoriteUserState.name}
            <hr/>
        </div>
    );
};

export default App;