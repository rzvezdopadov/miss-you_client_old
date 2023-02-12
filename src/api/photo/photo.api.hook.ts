import { IPhoto } from "../../interfaces/iprofiles";
import { IQueryAnswerError } from "../iquerys.api";
import { useQueryDelete, useQueryPut, useQueryPost } from "../querys.api.hook";
import {
	IQueryAnswerDeletePhoto,
	IQueryAnswerCheckPhoto,
	IQueryAnswerUploadPhoto,
	IQueryPhoto,
} from "./iphoto.api";

/* API Query to server */

/* Delete photo
    - * - photoPos
*/
export function useQueryDeletePhoto() {
	const { data, error, loaded, querySend } = useQueryDelete();

	const queryDeletePhoto = async (dataQuery: IQueryPhoto) => {
		querySend("/api/photo", dataQuery, true);
	};

	const dataNew = data as IPhoto;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerDeletePhoto = {
		dataDeletePhoto: dataNew,
		errorDeletePhoto: errorNew,
		loadedDeletePhoto: loaded,
		queryDeletePhoto,
	};

	return queryAnswer;
}

/* Check photo
    - * - photoPos
*/
export function useQueryCheckPhoto() {
	const { data, error, loaded, querySend } = useQueryPut();

	const queryCheckPhoto = async (dataQuery: IQueryPhoto) => {
		querySend("/api/photo", dataQuery, true);
	};

	const dataNew = data as IPhoto;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerCheckPhoto = {
		data: dataNew,
		error: errorNew,
		loaded,
		queryCheckPhoto,
	};

	return queryAnswer;
}

/* Upload photo
    - * - photoPos
*/
export function useQueryUploadPhoto() {
	const { data, error, loaded, querySend } = useQueryPost();

	const queryUploadPhoto = async (dataQuery: FormData) => {
		querySend("/api/photo", dataQuery, true, {
			headers: { "Content-Type": "multipart/form-data" },
		});
	};

	const dataNew = data as IPhoto;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerUploadPhoto = {
		dataUploadPhoto: dataNew,
		errorUploadPhoto: errorNew,
		loadedUploadPhoto: loaded,
		queryUploadPhoto,
	};

	return queryAnswer;
}
