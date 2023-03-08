import { IAdminBanned, IAdminFilterUsers } from "../../interfaces/iadmin";
import { IProfileShort, IProfile, IPhoto } from "../../interfaces/iprofiles";
import { IQueryAnswerError, IQueryAnswerMessageData } from "../iquerys.api";

export interface IQueryGetAdminProfile {
	userid: string;
}

export interface IQueryGetAdminProfiles {
	startcount: number;
	amount: number;
	filters: IAdminFilterUsers;
}

export interface IQueryAnswerGetAdminProfiles {
	dataGetAdminProfiles: IProfileShort[];
	errorGetAdminProfiles: IQueryAnswerError;
	loadedGetAdminProfiles: boolean;
	querySendGetAdminProfiles(data: {}): void;
}

export interface IQueryAnswerGetAdminProfile {
	dataGetAdminProfile: IProfile;
	errorGetAdminProfile: IQueryAnswerError;
	loadedGetAdminProfile: boolean;
	querySendGetAdminProfile(data: IQueryGetAdminProfile): void;
}

export interface IQuerySetAdminRating {
	userid: string;
	addrating: number;
}

export interface IQueryAnswerSetAdminRating {
	dataSetAdminRating: IProfile;
	errorSetAdminRating: IQueryAnswerError;
	loadedSetAdminRating: boolean;
	querySendSetAdminRating(data: IQuerySetAdminRating): void;
}

export interface IQuerySetAdminCash {
	userid: string;
	addcash: number;
}

export interface IQueryAnswerSetAdminCash {
	dataSetAdminCash: IProfile;
	errorSetAdminCash: IQueryAnswerError;
	loadedSetAdminCash: boolean;
	querySendSetAdminCash(data: IQuerySetAdminCash): void;
}

export interface IQueryAnswerBanned {
	dataSetAdminBanned: IQueryAnswerMessageData;
	errorSetAdminBanned: IQueryAnswerError;
	loadedSetAdminBanned: boolean;
	querySendSetAdminBanned(data: IAdminBanned): void;
}

export interface IQueryDeleteAdminPhoto {
	userid: string;
	photoPos: number;
}

export interface IQueryAnswerDeleteAdminPhoto {
	dataDeleteAdminPhoto: IPhoto;
	errorDeleteAdminPhoto: IQueryAnswerError;
	loadedDeleteAdminPhoto: boolean;
	queryDeleteAdminPhoto(data: IQueryDeleteAdminPhoto): void;
}
