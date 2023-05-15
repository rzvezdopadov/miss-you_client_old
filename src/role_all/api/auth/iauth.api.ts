import {
	IRegistration,
	ILogin,
	IRecoveryPassword,
	IChangePass,
} from "../../interfaces/iauth";
import { IQueryAnswerMessageData, IQueryAnswerError } from "../iquerys.api";

export interface IQueryAnswerRegistration {
	dataRegistration: IQueryAnswerMessageData;
	errorRegistration: IQueryAnswerError;
	loadedRegistration: boolean;
	querySendRegistration(data: IRegistration): void;
}

export interface IQueryAnswerLoginData {
	jwt: "";
	message: "";
}

export interface IQueryAnswerLogin {
	dataLogin: IQueryAnswerLoginData;
	errorLogin: IQueryAnswerError;
	loadedLogin: boolean;
	querySendLogin(data: ILogin): void;
}

export interface IQueryAnswerRecoveryPass {
	dataRecoveryPass: IQueryAnswerMessageData;
	errorRecoveryPass: IQueryAnswerError;
	loadedRecoveryPass: boolean;
	querySendRecoveryPass(data: IRecoveryPassword): void;
}

export interface IQueryAnswerChangePass {
	dataChangePass: IQueryAnswerMessageData;
	errorChangePass: IQueryAnswerError;
	loadedChangePass: boolean;
	querySendChangePass(data: IChangePass): void;
}
