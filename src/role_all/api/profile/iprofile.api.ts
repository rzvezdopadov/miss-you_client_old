import { IProfile } from "../../../role_all/interfaces/iprofiles";
import { IQueryAnswerError } from "../../../role_all/api/iquerys.api";

export interface IQuerySetProfile {
	profile: IProfile;
}

export interface IQueryAnswerSetProfile {
	dataSetProfile: IProfile;
	errorSetProfile: IQueryAnswerError;
	loadedSetProfile: boolean;
	querySendSetProfile(data: {}): void;
}

export interface IQueryAnswerDeleteAcc {
	dataDeleteAcc: IProfile;
	errorDeleteAcc: IQueryAnswerError;
	loadedDeleteAcc: boolean;
	querySendDeleteAcc(): void;
}

export interface IQueryAnswerDeleteAccCancel {
	dataDeleteAccCancel: IProfile;
	errorDeleteAccCancel: IQueryAnswerError;
	loadedDeleteAccCancel: boolean;
	querySendDeleteAccCancel(): void;
}
