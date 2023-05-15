import {
	IProfile,
	IProfileShort,
} from "../../../role_all/interfaces/iprofiles";
import { IQueryAnswerError } from "../../../role_all/api/iquerys.api";
import { IUserFilters } from "../../interfaces/iadmin";

export interface IQueryGetProfile {
	userid: string;
}

export interface IQueryGetProfiles {
	startcount: number;
	amount: number;
	filters: IUserFilters;
}

export interface IQueryAnswerGetProfiles {
	dataGetProfiles: IProfileShort[];
	errorGetProfiles: IQueryAnswerError;
	loadedGetProfiles: boolean;
	querySendGetProfiles(data: {}): void;
}

export interface IQueryAnswerGetProfile {
	dataGetProfile: IProfile;
	errorGetProfile: IQueryAnswerError;
	loadedGetProfile: boolean;
	querySendGetProfile(data: IQueryGetProfile): void;
}
