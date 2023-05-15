import { IPhoto } from "../../../role_all/interfaces/iprofiles";
import { IQueryAnswerError } from "../../../role_all/api/iquerys.api";

export interface IQueryDeletePhoto {
	userid: string;
	photoPos: number;
}

export interface IQueryAnswerDeletePhoto {
	dataDeletePhoto: IPhoto;
	errorDeletePhoto: IQueryAnswerError;
	loadedDeletePhoto: boolean;
	queryDeletePhoto(data: IQueryDeletePhoto): void;
}
