import {
	IFilterUsers,
	IProfile,
	IProfileShort,
} from "../../interfaces/iprofiles";
import { IQueryAnswerError } from "../iquerys.api";

export interface IQuerySetProfile {
	profile: IProfile;
}

export interface IQueryAnswerSetProfile {
	dataSetProfile: IProfile;
	errorSetProfile: IQueryAnswerError;
	loadedSetProfile: boolean;
	querySendSetProfile(data: {}): void;
}

export interface IQueryGetProfile {
	userid: string;
}

export interface IQueryGetProfiles {
	startcount: number;
	amount: number;
	filters: IFilterUsers;
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

export interface IQueryGetProfilesForLikes {
	startcount: number;
	amount: number;
}

export interface IQueryAnswerGetProfilesForLikes {
	dataGetProfilesForLikes: IProfileShort[];
	errorGetProfilesForLikes: IQueryAnswerError;
	loadedGetProfilesForLikes: boolean;
	querySendGetProfilesForLikes(data: {}): void;
}
