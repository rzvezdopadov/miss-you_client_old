import {
	IUserFilters,
	IProfile,
	IProfileShort,
} from "../../../role_all/interfaces/iprofiles";
import { IQueryAnswerError } from "../../../role_all/api/iquerys.api";

export interface IQueryGetProfile {
	userid: string;
}

export interface IQueryGetProfiles {
	startcount: number;
	amount: number;
	filters: IUserFilters;
}

export interface IQueryAnswerGetProfile {
	dataGetProfile: IProfile;
	errorGetProfile: IQueryAnswerError;
	loadedGetProfile: boolean;
	querySendGetProfile(data: IQueryGetProfile): void;
}

export interface IQueryAnswerGetProfiles {
	dataGetProfiles: IProfileShort[];
	errorGetProfiles: IQueryAnswerError;
	loadedGetProfiles: boolean;
	querySendGetProfiles(data: {}): void;
}

export interface IQueryAnswerGetProfilesForLikes {
	dataGetProfilesForLikes: IProfileShort[];
	errorGetProfilesForLikes: IQueryAnswerError;
	loadedGetProfilesForLikes: boolean;
	querySendGetProfilesForLikes(data: {}): void;
}

export interface IQueryAnswerGetProfilesForFavorite {
	dataGetProfilesForFavorite: IProfileShort[];
	errorGetProfilesForFavorite: IQueryAnswerError;
	loadedGetProfilesForFavorite: boolean;
	querySendGetProfilesForFavorite(data: {}): void;
}
