import React, {FC} from 'react';
import {IUsers} from "../models/IUser/IUser";
import {Link} from "react-router-dom";
type IProps ={
    users: IUsers[]
}
const UserComponent:FC<IProps> = ({users}) => {
    return (
        <div>
            {
                users.map(user => (
                    <li key={user.id}>
                        <Link to={user.id.toString()} state={user}>{user.id} {user.name} {user.username}</Link>
                    </li>)
                )
            }
        </div>
    );
};

export default UserComponent;