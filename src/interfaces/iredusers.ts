import { IAdminChangeRating } from "./iadmin";
import { IRate } from "./ishop";

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
	rate: IRate;
}

export interface IStateAdminChangeRating {
	enabled: boolean;
	rate: IAdminChangeRating;
}
