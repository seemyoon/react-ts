import React, {FC} from 'react';
import {IUsers} from "../../models/IUser/IUser";
import {Link} from "react-router-dom";

type IProps = {
    users: IUsers[]
}
const UserComponent: FC<IProps> = ({users}) => {
    return (
        <ul>
            {
                users.map(user => (
                    <li key={user.id}>
                        <b>ID:</b> {user.id} <br/>
                        <b>Name:</b> {user.name} <br/>
                        <b>Username:</b> {user.username} <br/>
                        <b>Email:</b> {user.email} <br/>
                        <b>Website:</b> {user.website} <br/>
                        <b>Phone:</b> {user.phone} <br/>
                        <b>Geo Lat:</b> {user.address.geo.lat} <br/>
                        <b>Geo Lng:</b> {user.address.geo.lng} <br/>
                        <b>Suite:</b> {user.address.suite} <br/>
                        <b>City:</b> {user.address.city} <br/>
                        <b>Street:</b> {user.address.street} <br/>
                        <b>Zipcode:</b> {user.address.zipcode} <br/>
                        <b>Company Name:</b> {user.company.name} <br/>
                        <b>Company BS:</b> {user.company.bs} <br/>
                        <b>Catch Phrase:</b> {user.company.catchPhrase} <br/>
                        <Link to={user.id.toString()} state={user}>
                            Click here to move to posts of user
                        </Link>
                    </li>)
                )
            }

        </ul>
    );
};

export default UserComponent;