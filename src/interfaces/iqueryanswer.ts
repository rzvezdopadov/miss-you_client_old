import { IDialog, IProfile, IProfileShort } from "./iprofiles"

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
    data: {} | null,
    error: {} | null,
    loaded: boolean,
    querySend(link: string, data: {}, modalLoad: boolean): void,
}

export interface IQueryAnswerMessageData {
    message: '',
}

export interface IQueryAnswerRegistrationData {
    message: '',
}

export interface IQueryAnswerRegistration {
    data: IQueryAnswerRegistrationData,
    error: IQueryAnswerError,
    loaded: boolean,
    querySendRegistration(data: {}): void,
}

export interface IQueryAnswerLoginData {
    jwt: '',
    message: '',
}

export interface IQueryAnswerLogin {
    data: IQueryAnswerLoginData,
    error: IQueryAnswerError,
    loaded: boolean,
    querySendLogin(data: {}): void,
}

export interface IQueryAnswerSetProfile {
    data: IProfile,
    error: IQueryAnswerError,
    loaded: boolean,
    querySendSetProfile(data: {}): void,
}

export interface IQueryAnswerGetProfile {
    data: IProfile,
    error: IQueryAnswerError,
    loaded: boolean,
    querySendGetProfile(data: {}): void,
}

export interface IQueryAnswerProfileShort {
    data: IProfileShort,
    error: IQueryAnswerError,
    loaded: boolean,
    querySendSetProfileShort(data: {}): void,
}

export interface IQueryAnswerProfiles {
    data: [IProfileShort],
    error: IQueryAnswerError,
    loaded: boolean,
    querySendGetProfiles(data: {}): void,
}

export interface IQueryAnswerLike {
    data: IQueryAnswerMessageData,
    error: IQueryAnswerError,
    loaded: boolean,
    querySendLike(data: {}): void,
}

export interface IQueryAnswerDialogs {
    data: [IDialog],
    error: IQueryAnswerError,
    loaded: boolean,
    querySendGetDialogs(): void,
}

export interface IQueryAnswerDialog {
    data: IDialog,
    error: IQueryAnswerError,
    loaded: boolean,
    querySendGetDialog(data: {}): void,
}

export interface IQueryAnswerMessage {
    data: IDialog,
    error: IQueryAnswerError,
    loaded: boolean,
    querySendMessage(data: {}): void,
}
