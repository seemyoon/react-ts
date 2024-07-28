import React, {FC} from 'react';
import {IUserModel} from "../../models/IUserModel";
import {useMyContext} from "../../context/ContextProvider";
interface IProps{
    user: IUserModel
}
const UserComponent:FC<IProps> = ({user}) => {
    const {userStore:{setFavoriteUser}}= useMyContext()
    return (
        <div>
            {
                user.id
            }
            {
                user.name
            } <br/>
            <button onClick={()=>{setFavoriteUser(user)}}>show favorite user's name</button>
        </div>
    );
};

export default UserComponent;