import { IDialog } from "../../interfaces/iprofiles";
import { IQueryAnswerError } from "../iquerys.api";
import { useQueryGet } from "../querys.api.hook";
import {
	IQueryAnswerGetDialog,
	IQueryAnswerGetDialogs,
	IQueryDialog,
} from "./idialog.api";

/* API Query to server */

/* Get dialogs
 */
export function useQueryGetDialogs() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetDialogs = async () => {
		querySend("/api/dialogs", {}, false);
	};

	const dataNew = data as string[];
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerGetDialogs = {
		dataGetDialogs: dataNew,
		errorGetDialogs: errorNew,
		loadedGetDialogs: loaded,
		querySendGetDialogs,
	};

	return queryAnswer;
}

/* Get dialog
    - * - id user
*/
export function useQueryGetDialog() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetDialog = async (dataQuery: IQueryDialog) => {
		querySend("/api/dialog", dataQuery, false);
	};

	const dataNew = data as IDialog;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerGetDialog = {
		dataGetDialog: dataNew,
		errorGetDialog: errorNew,
		loadedGetDialog: loaded,
		querySendGetDialog,
	};

	return queryAnswer;
}
