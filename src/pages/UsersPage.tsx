import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../services/api.service";
import {IUsers} from "../models/IUser/IUser";


const UsersPage = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    useEffect(() => {
        getAllUsers().then(value => setUsers(value))
    }, []);
    console.log(users)
    return (
        <div>
            {
                <ul>
                    {
                        users.map(value =>(<li>{value.id}{value.address.geo.lng}{}</li> ))
                    }
                </ul>
            }
        </div>
    );
};

export default UsersPage;