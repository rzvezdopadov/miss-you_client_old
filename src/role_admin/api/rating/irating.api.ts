import { IProfile } from "../../../role_all/interfaces/iprofiles";
import { IQueryAnswerError } from "../../../role_all/api/iquerys.api";

export interface IQuerySetRating {
	userid: string;
	addrating: number;
}

export interface IQueryAnswerSetRating {
	dataSetRating: IProfile;
	errorSetRating: IQueryAnswerError;
	loadedSetRating: boolean;
	querySendSetRating(data: IQuerySetRating): void;
}
