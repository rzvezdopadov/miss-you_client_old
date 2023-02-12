import { IAdminFilterUsers } from "../../interfaces/iadmin";
import { IProfileShort, IProfile } from "../../interfaces/iprofiles";
import { IQueryAnswerError } from "../iquerys.api";

export interface IQueryGetAdminProfile {
	userid: string;
}

export interface IQueryGetAdminProfiles {
	startcount: number;
	amount: number;
	filters: IAdminFilterUsers;
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
