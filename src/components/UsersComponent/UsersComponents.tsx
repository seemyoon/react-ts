import React from 'react';
import {useMyContext} from "../../context/ContextProvider";
import UserComponent from "./UserComponent";

const UsersComponents = () => {
    const {userStore: {allUsers}} = useMyContext()
    return (
        <div>
            {allUsers.map(user=> (<UserComponent user={user} key={user.id}/>))}
        </div>
    );
};

export default UsersComponents;