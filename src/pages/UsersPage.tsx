import React, {useEffect, useState} from 'react';
import UsersComponent from "../component/UsersComponent/UsersComponent";
import {getAllUsers} from "../services/api.service";
import {IUsers} from "../models/IUsers/IUsers";

const UsersPage = () => {
    const [users,setUsers]=useState<IUsers[]>([])
    useEffect(() => {
        getAllUsers().then((values:IUsers[] )=> setUsers(values))
    }, []);
    return (

        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;