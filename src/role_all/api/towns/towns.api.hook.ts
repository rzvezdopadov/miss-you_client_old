import { IQueryAnswerError } from "../iquerys.api";
import { useQueryPost } from "../querys.api.hook";
import { IQueryAnswerGetTowns } from "./itowns.api";

/* API Query to server */

/* Get towns
 */
export function useQueryGetTowns() {
	const { data, error, loaded, querySend } = useQueryPost();

	const querySendGetTowns = async () => {
		querySend("/api/towns", {}, true);
	};

	const dataNew = data as string[];
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerGetTowns = {
		dataGetTowns: dataNew,
		errorGetTowns: errorNew,
		loadedGetTowns: loaded,
		querySendGetTowns,
	};

	return queryAnswer;
}
