import { IFilterUsers } from "./iprofiles";

export interface IRegistration {
    gender: number,
    genderVapor: number,
    name: string,
    email: string,
    password: string,
}

export interface ILogin {
    email: string,
    password: string,
}

export interface IQueryGetProfile {
    jwt: string;
    id: number,
}

export interface ILike {
    jwt: string;
    id: number,
}

export interface IQueryGetProfiles {
    jwt: string;
    startCount: number, 
    amount: number, 
    filters: IFilterUsers,
}

export interface IQueryGetProfilesOnlyLikes {
    jwt: string;
    startCount: number, 
    amount: number, 
    users: any,
}
