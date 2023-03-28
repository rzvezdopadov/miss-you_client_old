import { IAdminBanned, IAdminChangeCash, IAdminChangeRating } from "./iadmin";
import { ITariff } from "./ishop";

export interface IStateModalMessage {
	enabled: boolean;
	text: "";
}

export interface IStatePhotoDelete {
	enabled: boolean;
	photoPos: number;
}

export interface IActionReducer {
	type: string;
	payload: any;
}

export interface IStateBuyRating {
	enabled: boolean;
	rate: ITariff;
}

export interface IStateAdminChangeRating {
	enabled: boolean;
	rate: IAdminChangeRating;
}

export interface IStateAdminChangeCash {
	enabled: boolean;
	cash: IAdminChangeCash;
}

export interface IStateAdminBanned {
	enabled: boolean;
	banned: IAdminBanned;
}
