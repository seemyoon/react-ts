import React, {Component} from 'react';
import UserComponent from './UserComponent';
import {getAllUsers} from "../services/api.service"
// import {getPostsOfUsers} from '../services/api.service'
import {IUsers} from "../model/IUsers/IUsers";
// import {IPosts} from "../model/IPosts/IPosts";

interface IState {
    users: IUsers;
}

class UsersComponent extends Component <{ users: IUsers }, IState> {

    state: IState = {
        users: {
            id: 0,
            bank: {cardType: "", cardExpire: "", cardNumber: "", iban: "", currency: ""},
            userAgent: "",
            crypto: {coin: "", network: "", wallet: ""},
            age: 0,
            company: {
                department: "",
                address: {
                    state: "",
                    address: "",
                    city: "",
                    stateCode: "",
                    postalCode: "",
                    coordinates: {lat: 0, lng: 0},
                    country: ""
                }, name: "", title: ""
            },
            ein: "",
            address: {state: "", address: "", city: "", stateCode: "", coordinates: {lat: 0, lng: 0}, country: "", postalCode: ""},
            hair: {color: "", type: ""},
            email: "",
            ssn: "",
            eyeColor: "",
            bloodGroup: "",
            gender: 0,
            ip: "",
            height: 0,
            image: "",
            macAddress: "",
            firstName: "",
            lastName: "",
            maidenName: "",
            phone: "",
            role: "",
            password: "",
            university: "",
            weight: 0,
            username: "",
            birthDate: ""
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

export {UsersComponent};