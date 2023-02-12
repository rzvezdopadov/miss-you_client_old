import { IPhoto } from "../../interfaces/iprofiles";
import { IQueryAnswerError } from "../iquerys.api";

export interface IQueryPhoto {
	photoPos: number;
}

export interface IQueryAnswerDeletePhoto {
	dataDeletePhoto: IPhoto;
	errorDeletePhoto: IQueryAnswerError;
	loadedDeletePhoto: boolean;
	queryDeletePhoto(data: {}): void;
}

export interface IQueryAnswerCheckPhoto {
	data: IPhoto;
	error: IQueryAnswerError;
	loaded: boolean;
	queryCheckPhoto(data: {}): void;
}

export interface IQueryAnswerUploadPhoto {
	dataUploadPhoto: IPhoto;
	errorUploadPhoto: IQueryAnswerError;
	loadedUploadPhoto: boolean;
	queryUploadPhoto(data: FormData): void;
}
