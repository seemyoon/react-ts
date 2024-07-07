import React, {Component} from 'react';
import UserComponent from './UserComponent';
import {getAllUsers} from "../services/api.service"
import {getPostsOfUsers} from '../services/api.service'
import {IUsers} from "../model/IUsers/IUsers";
// import {IPosts} from "../model/IPosts/IPosts";

interface IState {
    users: IUsers;
}

class UsersComponent extends Component <{users:IUsers}, IState> {

    state: IState = {
        users: {
            id: 0,
            bank: Bank.,
            userAgent: "",
            crypto,
            age: 0,
            company,
            ein: "",
            address,
            hair,
            email,
            ssn,
            eyeColor,
            bloodGroup,
            gender,
            ip,
            height,
            image,
            macAddress,
            firstName: "",
            lastName: "",
            maidenName: "",
            phone: "",
            role,
            password,
            university,
            weight,
            username,
            birthDate
        }
    }

    componentDidMount() {
        getAllUsers().then((value: IUsers) => {
            this.setState({users: value});
        })
    }

    render() {
        return (
            <div>
                <UserComponent/>
            </div>

        );
    }
}

export default UsersComponent;