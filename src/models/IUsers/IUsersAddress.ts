import {Geo} from "./IUsersGeo";


export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}