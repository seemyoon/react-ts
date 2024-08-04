import {UserGeo} from "./UserGeo";

export interface UserAddress {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: UserGeo
}