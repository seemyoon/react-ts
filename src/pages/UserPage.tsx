import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useCustomLocation} from "../hooks/useLocation";
import {IUsers} from "../models/IUser/IUser";
import {getAllUsers} from "../services/api.service";
import PostOfUserComponent from "../components/PostOfUserComponent";

const UserPage = () => {
    let {id} = useParams()
    let location = useCustomLocation<IUsers>()
    let state = location.state
    const [user, setUser] = useState<IUsers>();
    useEffect(() => {
        getAllUsers().then((value: IUsers) => setUser(value))
    }, [id]);

    return (
        <div>
          <PostOfUserComponent key={state.id} id={Number(id)}/>
        </div>
    );
};

export default UserPage;