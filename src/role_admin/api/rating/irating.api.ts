import { IQueryAnswerError } from "../../../role_all/api/iquerys.api";
import { IAdminProfile } from "../../interfaces/iadmin";

export interface IQuerySetRating {
	userid: string;
	addrating: number;
}

export interface IQueryAnswerSetRating {
	dataSetRating: IAdminProfile;
	errorSetRating: IQueryAnswerError;
	loadedSetRating: boolean;
	querySendSetRating(data: IQuerySetRating): void;
}
