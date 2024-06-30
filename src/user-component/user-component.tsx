import {IUsers} from "../models/IUsers/IUsers";
import {FC} from "react";
import styles from './iUserStyles.module.css'

type AllInfoIUsers = {
    user: IUsers,
    getPosts: (id:number) => void
}

const UserComponent: FC<AllInfoIUsers> = (
    {
        user: {
            id,
            bank,
            userAgent,
            crypto,
            age,
            company,
            ein,
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
            firstName,
            lastName,
            maidenName,
            phone,
            role,
            password,
            university,
            weight,
            username,
            birthDate,

        }, getPosts
    }) => {
    return (
        <ul className={styles.listReset}>
            <hr className={styles.line}/>
            <li>
                <img src={image} alt={firstName}/>
            </li>
            <li>Id: {id}</li>
            <li>First Name: {firstName}</li>
            <li>Last Name: {lastName}</li>
            <li>Maiden Name: {maidenName}</li>
            <li>Age: {age}</li>
            <li>Email: {email}</li>
            <li>Phone: {phone}</li>
            <li>Username: {username}</li>
            <li>Password: {password}</li>
            <li>Birth Date: {birthDate}</li>
            <li>Blood Group: {bloodGroup}</li>
            <li>Height: {height}</li>
            <li>Weight: {weight}</li>
            <li>Gender: {gender}</li>
            <li>Eye Color: {eyeColor}</li>
            <li>Hair: {hair.color}, {hair.type}</li>
            <li>IP: {ip}</li>
            <li>MAC Address: {macAddress}</li>
            <li>University: {university}</li>
            <li>Role: {role}</li>
            <li>SSN: {ssn}</li>
            <li>Company: {company.name}, {company.department}, {company.title}</li>
            <li>Company
                Address: {company.address.address}, {company.address.city}, {company.address.state}, {company.address.country}</li>
            <li>Bank: {bank.cardNumber}, {bank.cardType}, {bank.currency}</li>
            <li>Crypto: {crypto.coin}, {crypto.wallet}, {crypto.network}</li>
            <li>User Agent: {userAgent}</li>
            <li>Address: {address.address}, {address.city}, {address.state}, {address.country}</li>
            <li>Coordinates: {address.coordinates.lat}, {address.coordinates.lng}</li>
            <li>EIN: {ein}</li>
            <button onClick={() => {
                getPosts(id)
            }
            }>Get all posts by user id
            </button>
            <hr/>
        </ul>
    )
}

export default UserComponent
