/* API Query to server */

import { IProfile } from "../../../role_all/interfaces/iprofiles";
import { IQueryAnswerError } from "../../../role_all/api/iquerys.api";
import { useQueryPut } from "../../../role_all/api/querys.api.hook";
import { IQueryAnswerSetRating, IQuerySetRating } from "./irating.api";

export function useQuerySetRating() {
	const { data, error, loaded, querySend } = useQueryPut();

	const querySendSetRating = async (dataQuery: IQuerySetRating) => {
		querySend("/api/admin/rating", dataQuery, true);
	};

	const dataNew = data as IProfile;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerSetRating = {
		dataSetRating: dataNew,
		errorSetRating: errorNew,
		loadedSetRating: loaded,
		querySendSetRating,
	};

	return queryAnswer;
}
