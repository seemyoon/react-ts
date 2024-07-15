import {Address} from "./IUsersAddress";
import {Company} from "./IUsersCompany";

export interface IUsers {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}