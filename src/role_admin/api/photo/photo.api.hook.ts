/* API Query to server */

import { IPhoto } from "../../../role_all/interfaces/iprofiles";
import { IQueryAnswerError } from "../../../role_all/api/iquerys.api";
import { useQueryDelete } from "../../../role_all/api/querys.api.hook";
import { IQueryAnswerDeletePhoto, IQueryDeletePhoto } from "./iphoto.api";

/* API Query to server */

/* Delete photo
    - * - photoPos
*/
export function useQueryDeletePhoto() {
	const { data, error, loaded, querySend } = useQueryDelete();

	const queryDeletePhoto = async (dataQuery: IQueryDeletePhoto) => {
		querySend("/api/admin/photo", dataQuery, true);
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
