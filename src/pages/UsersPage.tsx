import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../services/api.service";
import {IUsers} from "../models/IUser/IUser";
import UsersComponent from "../components/UsersComponent";


const UsersPage = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    useEffect(() => {
        getAllUsers().then((value:IUsers[]) => setUsers(value))
    }, []);
    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;