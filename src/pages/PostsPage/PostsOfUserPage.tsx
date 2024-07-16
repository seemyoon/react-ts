import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useCustomLocation} from "../../hooks/useLocation";
import {IUsers} from "../../models/IUser/IUser";
import {getAllUsers} from "../../services/api.service";
import PostsOfUserComponent from "../../components/PostsComponents/PostsOfUserComponent";

const PostsOfUserPage = () => {
    const {id} = useParams<{ id: string }>()
    const location = useCustomLocation<IUsers>()
    const state = location.state
    const [user, setUser] = useState<IUsers[]>();
    useEffect(() => {
        getAllUsers().then((value: IUsers[]) => setUser(value))
    }, [id]);

    return (
        <div>
            <PostsOfUserComponent key={id} id={Number(id)}/>
        </div>
    );
};

export default PostsOfUserPage;