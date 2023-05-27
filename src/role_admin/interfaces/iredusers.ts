import { IAdminProfile, IBanned, IChangeCash, IChangeRating } from "./iadmin";

export interface IAdminUserProfile {
	enabled: boolean;
	profile: IAdminProfile;
}

export interface IStateChangeRating {
	enabled: boolean;
	rate: IChangeRating;
}

export interface IStateChangeCash {
	enabled: boolean;
	cash: IChangeCash;
}

export interface IStateBanned {
	enabled: boolean;
	banned: IBanned;
}
