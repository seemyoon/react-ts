import React, {FC} from 'react';
import {IUsers} from "../models/IUser/IUser";

interface IProps {
    users: IUsers
}

const UsersComponent: FC<IUsers> = ({users}) => {

    return (
        <div>

        </div>
    );
};

export default UsersComponent;