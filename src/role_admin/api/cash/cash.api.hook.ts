import { IQueryAnswerError } from "../../../role_all/api/iquerys.api";
import { useQueryPut } from "../../../role_all/api/querys.api.hook";
import { IQueryAnswerSetCash, IQuerySetCash } from "./icash.api";
import { IAdminProfile } from "../../interfaces/iadmin";

/* API Query to server */

export function useQuerySetCash() {
	const { data, error, loaded, querySend } = useQueryPut();

	const querySendSetCash = async (dataQuery: IQuerySetCash) => {
		querySend("/api/admin/cash", dataQuery, true);
	};

	const dataNew = data as IAdminProfile;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerSetCash = {
		dataSetCash: dataNew,
		errorSetCash: errorNew,
		loadedSetCash: loaded,
		querySendSetCash,
	};

	return queryAnswer;
}
