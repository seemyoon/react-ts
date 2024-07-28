import React, {useEffect, useMemo, useState} from 'react';
import {useMyContext} from "../context/ContextProvider";
import {UserWithPostsType} from "../models/UserWithPostsType";
import UserPostsComponents from "../components/UserPostsComponents";
import {IUserModel} from "../models/IUserModel";

const UsersPostsPage = () => {
    const {userStore: {allUsers}, postStore: {allPosts}} = useMyContext()
    const [userWithPostsState, setUserWithPostsState] = useState<UserWithPostsType[]>([])
    const userWithPosts = useMemo(() => {
        return allUsers.map(user => {
            return {...user, posts: allPosts.filter(post => post.userId === user.id)};
        })
    }, [allUsers, allPosts])
    useEffect(() => {
        setUserWithPostsState(userWithPosts)
    }, [userWithPosts]);
    return (
        <div>
            <UserPostsComponents items={userWithPostsState}/>
        </div>
    );
};

export default UsersPostsPage;