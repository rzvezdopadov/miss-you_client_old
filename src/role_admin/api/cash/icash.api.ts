import { IQueryAnswerError } from "../../../role_all/api/iquerys.api";
import { IAdminProfile } from "../../interfaces/iadmin";

export interface IQuerySetCash {
	userid: string;
	addcash: number;
}

export interface IQueryAnswerSetCash {
	dataSetCash: IAdminProfile;
	errorSetCash: IQueryAnswerError;
	loadedSetCash: boolean;
	querySendSetCash(data: IQuerySetCash): void;
}
