/* API Query to server */
import { IQueryAnswerError } from "../../../role_all/api/iquerys.api";
import { useQueryPut } from "../../../role_all/api/querys.api.hook";
import { IQueryAnswerSetRating, IQuerySetRating } from "./irating.api";
import { IAdminProfile } from "../../interfaces/iadmin";

export function useQuerySetRating() {
	const { data, error, loaded, querySend } = useQueryPut();

	const querySendSetRating = async (dataQuery: IQuerySetRating) => {
		querySend("/api/admin/rating", dataQuery, true);
	};

	const dataNew = data as IAdminProfile;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerSetRating = {
		dataSetRating: dataNew,
		errorSetRating: errorNew,
		loadedSetRating: loaded,
		querySendSetRating,
	};

	return queryAnswer;
}
