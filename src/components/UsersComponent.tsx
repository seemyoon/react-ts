import React, {Component} from 'react';
import UserComponent from './UserComponent';
import getAllUsers from "../services/api.service"
import getPostsOfUsers from '../services/api.service'

class UsersComponent extends Component <{}, {}> {



    render() {
        return (
            <UserComponent/>
        );
    }
}

export default UsersComponent;