import { IFilterUsers, IProfile } from "./iprofiles";

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
    id: number,
}

export interface IQuerySetProfile {
    profile: IProfile,
}

export interface ILike {
    id: number,
}

export interface IQueryGetProfiles {
    startCount: number, 
    amount: number, 
    filters: IFilterUsers,
}

export interface IQueryGetProfilesOnlyLikes {
    startCount: number, 
    amount: number, 
    users: any,
}
