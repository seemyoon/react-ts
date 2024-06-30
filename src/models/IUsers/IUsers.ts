import {Hair} from "./HairUsers";
import {Address} from "./usersAdress/AddressUsers";
import {Bank} from './Bank';
import {Crypto} from './Crypto';
import {Company} from './usersCompany/Company'
enum Gender{
    MALE,
    FEMALE
}
export interface IUsers {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: Gender
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    hair: Hair
    ip: string
    address: Address
    macAddress: string
    university: string
    bank: Bank
    company: Company
    ein: string
    ssn: string
    userAgent: string
    crypto: Crypto
    role: string
}

