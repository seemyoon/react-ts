import {UserCompany} from "./UserCompany";
import {UserAddress} from "./UserAddress";

export interface IUser {
    id: number
    name: string
    username: string
    email: string
    address: UserAddress
    phone: string
    website: string
    company: UserCompany
}
