import React, {FC} from 'react';
import {IUsers} from "../models/IUser/IUser";

interface IProps {
    users: IUsers[]
}

const UsersComponent: FC<IProps> = ({users}) => {

    return (
        <div>
            {
                <ul>
                    {users.map(user => (
                        <li>
                            <li key={user.id}>
                                {user.id}
                                {user.name}
                                {user.username}
                                {user.email}
                                {user.website}
                                {user.phone}
                                {user.address.geo.lat}
                                {user.address.geo.lng}
                                {user.address.suite}
                                {user.address.city}
                                {user.address.street}
                                {user.address.zipcode}
                                {user.company.name}
                                {user.company.bs}
                                {user.company.catchPhrase}
                            </li>
                        </li>))}
                </ul>
            }
        </div>
    );
};

export default UsersComponent;