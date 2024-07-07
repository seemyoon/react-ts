import React, {Component} from 'react';
import UserComponent from './UserComponent';
import {getAllUsers} from "../services/api.service"
// import {getPostsOfUsers} from '../services/api.service'
import {IUsers} from "../model/IUsers/IUsers";
// import {IPosts} from "../model/IPosts/IPosts";

type IState= {
    users: IUsers[];
}

class UsersComponent extends Component <{}, IState> {

    state:IState = {
        users: []
    }

    componentDidMount() {
        getAllUsers().then((value: IUsers[]) => {
            this.setState({users: value});
        })
    }

    render() {
        return (
            <div>
                {this.state.users.map(user=><UserComponent user={user} key={user.id}/>)}
            </div>

        );
    }
}

export {UsersComponent};