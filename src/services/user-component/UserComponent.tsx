import React, {Component} from 'react';
import {IUsers} from "../../model/IUsers/IUsers";
import styles from './iUserStyles.module.css'

type State = {
    user: IUsers;
}
type Props = {
    user: IUsers;
    getPosts: (id:number) => void
}

class UserComponent extends Component  <Props, State> {

    constructor(props: Props) {
        super(props)
        this.state = {
            user: props.user,
        };

    }

    render() {
        const { getPosts } = this.props;

        return (

            <ul className={styles.listReset}>
                <hr className={styles.line}/>
                <li>
                    <img src={this.state.user.image} alt={this.state.user.firstName}/>
                </li>
                <li>Id: {this.state.user.id}</li>
                <li>First Name: {this.state.user.firstName}</li>
                <li>Last Name: {this.state.user.lastName}</li>
                <li>Maiden Name: {this.state.user.maidenName}</li>
                <li>Age: {this.state.user.age}</li>
                <li>Email: {this.state.user.email}</li>
                <li>Phone: {this.state.user.phone}</li>
                <li>Username: {this.state.user.username}</li>
                <li>Password: {this.state.user.password}</li>
                <li>Birth Date: {this.state.user.birthDate}</li>
                <li>Blood Group: {this.state.user.bloodGroup}</li>
                <li>Height: {this.state.user.height}</li>
                <li>Weight: {this.state.user.weight}</li>
                <li>Gender: {this.state.user.gender}</li>
                <li>Eye Color: {this.state.user.eyeColor}</li>
                <li>Hair: {this.state.user.hair.color}, {this.state.user.hair.type}</li>
                <li>IP: {this.state.user.ip}</li>
                <li>MAC Address: {this.state.user.macAddress}</li>
                <li>University: {this.state.user.university}</li>
                <li>Role: {this.state.user.role}</li>
                <li>SSN: {this.state.user.ssn}</li>
                <li>Company: {this.state.user.company.name}, {this.state.user.company.department}, {this.state.user.company.title}</li>
                <li>Company
                    Address: {this.state.user.company.address.address}, {this.state.user.company.address.city}, {this.state.user.company.address.state}, {this.state.user.company.address.country}</li>
                <li>Bank: {this.state.user.bank.cardNumber}, {this.state.user.bank.cardType}, {this.state.user.bank.currency}</li>
                <li>Crypto: {this.state.user.crypto.coin}, {this.state.user.crypto.wallet}, {this.state.user.crypto.network}</li>
                <li>User Agent: {this.state.user.userAgent}</li>
                <li>Address: {this.state.user.address.address}, {this.state.user.address.city}, {this.state.user.address.state}, {this.state.user.address.country}</li>
                <li>Coordinates: {this.state.user.address.coordinates.lat}, {this.state.user.address.coordinates.lng}</li>
                <li>EIN: {this.state.user.ein}</li>
                <button onClick={() => {
                    getPosts(this.state.user.id)
                }

                }>Get all posts by user id
                </button>
                <hr/>
            </ul>
        );
    }
}

export default UserComponent;

