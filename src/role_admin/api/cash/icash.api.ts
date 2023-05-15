import { IProfile } from "../../../role_all/interfaces/iprofiles";
import { IQueryAnswerError } from "../../../role_all/api/iquerys.api";

export interface IQuerySetCash {
	userid: string;
	addcash: number;
}

export interface IQueryAnswerSetCash {
	dataSetCash: IProfile;
	errorSetCash: IQueryAnswerError;
	loadedSetCash: boolean;
	querySendSetCash(data: IQuerySetCash): void;
}
