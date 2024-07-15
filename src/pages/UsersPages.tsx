import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../services/api.service";
import {IUsers} from "../models/IUser/IUser";
import UserComponent from "../components/UserComponent";

const UsersLayout = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    useEffect(() => {
        getAllUsers().then((value:IUsers[]) => setUsers(value))
    }, []);
    return (
        <div>
            <hr/>
            <UserComponent users={users}/>
        </div>
    );
};

export default UsersLayout;