import {
	IChangePass,
	IDialog,
	IPhoto,
	IProfile,
	IProfileShort,
} from "./iprofiles";
import { IRate } from "./ishop";
import { IStickerpack } from "./istickers";

export interface IQueryAnswerError {
	message: "";
	name: "";
	code: "";
	response: {
		data: {
			message: "";
		};
	};
	status: number;
}

export interface IQueryAnswer {
	data: {} | null;
	error: {} | null;
	loaded: boolean;
	querySend(link: string, data: {}, modalLoad: boolean, config?: {}): void;
}

export interface IQueryAnswerMessageData {
	message: "";
}

export interface IQueryAnswerRegistrationData {
	message: "";
}

export interface IQueryAnswerRegistration {
	data: IQueryAnswerRegistrationData;
	error: IQueryAnswerError;
	loaded: boolean;
	querySendRegistration(data: {}): void;
}

export interface IQueryAnswerLoginData {
	jwt: "";
	message: "";
}

export interface IQueryAnswerLogin {
	dataLogin: IQueryAnswerLoginData;
	errorLogin: IQueryAnswerError;
	loadedLogin: boolean;
	querySendLogin(data: {}): void;
}

export interface IQueryAnswerRecoveryPass {
	dataRecoveryPass: IQueryAnswerMessageData;
	errorRecoveryPass: IQueryAnswerError;
	loadedRecoveryPass: boolean;
	querySendRecoveryPass(data: {}): void;
}

export interface IQueryAnswerSetProfile {
	data: IProfile;
	error: IQueryAnswerError;
	loaded: boolean;
	querySendSetProfile(data: {}): void;
}

export interface IQueryAnswerGetProfile {
	data: IProfile;
	error: IQueryAnswerError;
	loaded: boolean;
	querySendGetProfile(data: {}): void;
}

export interface IQueryAnswerProfileShort {
	data: IProfileShort;
	error: IQueryAnswerError;
	loaded: boolean;
	querySendSetProfileShort(data: {}): void;
}

export interface IQueryAnswerProfiles {
	data: [IProfileShort];
	error: IQueryAnswerError;
	loaded: boolean;
	querySendGetProfiles(data: {}): void;
}

export interface IQueryAnswerProfilesForLikes {
	data: [IProfileShort];
	error: IQueryAnswerError;
	loaded: boolean;
	querySendGetProfilesForLikes(data: {}): void;
}

export interface IQueryAnswerLike {
	data: IQueryAnswerMessageData;
	error: IQueryAnswerError;
	loaded: boolean;
	querySendLike(data: {}): void;
}

export interface IQueryAnswerDialogs {
	data: [IDialog];
	error: IQueryAnswerError;
	loaded: boolean;
	querySendGetDialogs(): void;
}

export interface IQueryAnswerDialog {
	data: IDialog;
	error: IQueryAnswerError;
	loaded: boolean;
	querySendGetDialog(data: {}): void;
}

export interface IQueryAnswerMessage {
	data: IDialog;
	error: IQueryAnswerError;
	loaded: boolean;
	querySendMessage(data: {}): void;
}

export interface IQueryAnswerDeletePhoto {
	data: IPhoto;
	error: IQueryAnswerError;
	loaded: boolean;
	queryDeletePhoto(data: {}): void;
}

export interface IQueryAnswerCheckPhoto {
	data: IPhoto;
	error: IQueryAnswerError;
	loaded: boolean;
	queryCheckPhoto(data: {}): void;
}

export interface IQueryAnswerUploadPhoto {
	data: IPhoto;
	error: IQueryAnswerError;
	loaded: boolean;
	queryUploadPhoto(data: {}): void;
}

export interface IQueryAnswerCaptcha {
	dataCaptcha: TexImageSource;
	errorCaptcha: IQueryAnswerError;
	loadedCaptcha: boolean;
	querySendCaptcha(): void;
}

export interface IQueryAnswerChangePass {
	dataChangePass: IQueryAnswerMessageData;
	errorChangePass: IQueryAnswerError;
	loadedChangePass: boolean;
	querySendChangePass(data: IChangePass): void;
}

export interface IQueryAnswerStickerpacks {
	dataStickerpacks: Array<IStickerpack>;
	errorStickerpacks: IQueryAnswerError;
	loadedStickerpacks: boolean;
	querySendGetStickerpacks(): void;
}

export interface IQueryAnswerRatingTariffs {
	dataRatingTariffs: Array<IRate>;
	errorRatingTariffs: IQueryAnswerError;
	loadedRatingTariffs: boolean;
	querySendGetRatingTariffs(): void;
}
