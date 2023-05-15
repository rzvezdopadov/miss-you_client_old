import {
	IQueryAnswerError,
	IQueryAnswerMessageData,
} from "../../../role_all/api/iquerys.api";
import { useQueryPut } from "../../../role_all/api/querys.api.hook";
import { IBanned } from "../../interfaces/iadmin";
import { IQueryAnswerBanned } from "./ibanned.api";

/* API Query to server */

export function useQuerySetBanned() {
	const { data, error, loaded, querySend } = useQueryPut();

	const querySendSetBanned = async (dataQuery: IBanned) => {
		querySend("/api/admin/banned", dataQuery, true);
	};

	const dataNew = data as IQueryAnswerMessageData;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerBanned = {
		dataSetBanned: dataNew,
		errorSetBanned: errorNew,
		loadedSetBanned: loaded,
		querySendSetBanned,
	};

	return queryAnswer;
}
