import { IProfile, IProfileShort } from "./iprofiles"

export interface IQueryAnswerError {
    message: '',
    name: '',
    code: ''
    response: {
        data: {
            message: '',
        }
    },
    status: number,
}

export interface IQueryAnswer {
    data: {},
    error: {},
    loaded: boolean,
    querySend(link: string, data: {}, modalLoad: boolean): void,
}

export interface IQueryAnswerRegistrationData {
    message: '',
}

export interface IQueryAnswerRegistration {
    data: IQueryAnswerRegistrationData,
    error: IQueryAnswerError,
    loaded: boolean,
    querySendHAL(data: {}): void,
}

export interface IQueryAnswerLoginData {
    jwt: '',
    message: '',
}

export interface IQueryAnswerLogin {
    data: IQueryAnswerLoginData,
    error: IQueryAnswerError,
    loaded: boolean,
    querySendHAL(data: {}): void,
}

export interface IQueryAnswerProfile {
    data: IProfile,
    error: IQueryAnswerError,
    loaded: boolean,
    querySendHAL(data: {}): void,
}

export interface IQueryAnswerProfileShort {
    data: IProfileShort,
    error: IQueryAnswerError,
    loaded: boolean,
    querySendHAL(data: {}): void,
}

export interface IQueryAnswerProfiles {
    data: [IProfile],
    error: IQueryAnswerError,
    loaded: boolean,
    querySendHAL(data: {}): void,
}
