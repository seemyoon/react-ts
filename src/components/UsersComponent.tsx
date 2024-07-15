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
                    {users.map(user => (<li>{user.id}{user.name}{}</li>))}
                </ul>
            }
        </div>
    );
};

export default UsersComponent;