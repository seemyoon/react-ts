import {CoordinatesOfCompanyAddress}  from './CoordinatesOfCompanyAddress'
export interface CompanyAddress {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    coordinates: CoordinatesOfCompanyAddress
    country: string
}