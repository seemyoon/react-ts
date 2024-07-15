import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../services/api.service";
import {IUsers} from "../models/IUser/IUser";
import MenuComponent from "../components/MenuComponent";
import UsersComponent from "../components/UsersComponent";


const UsersPage = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    useEffect(() => {
        getAllUsers().then(value => setUsers(value))
    }, []);
    console.log(users)
    return (
        <div>
            <UsersComponent users={users} />
        </div>
    );
};

export default UsersPage;