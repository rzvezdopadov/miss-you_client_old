import { IAdminFilterUsers } from "../../interfaces/iadmin";
import { IProfileShort, IProfile } from "../../interfaces/iprofiles";
import { IQueryAnswerError, IQueryAnswerMessageData } from "../iquerys.api";

export interface IQueryGetAdminProfile {
	userid: string;
}

export interface IQueryGetAdminProfiles {
	startcount: number;
	amount: number;
	filters: IAdminFilterUsers;
}

export interface IQuerySetAdminRating {
	userid: string;
	addrating: number;
}

export interface IQueryAnswerGetAdminProfiles {
	dataGetAdminProfiles: Array<IProfileShort>;
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

export interface IQueryAnswerSetAdminRating {
	dataSetAdminRating: IProfile;
	errorSetAdminRating: IQueryAnswerError;
	loadedSetAdminRating: boolean;
	querySendSetAdminRating(data: IQuerySetAdminRating): void;
}
