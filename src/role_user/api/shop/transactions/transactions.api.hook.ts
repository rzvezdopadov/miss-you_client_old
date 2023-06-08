import { IQueryAnswerError } from "../../../../role_all/api/iquerys.api";
import { useQueryGet } from "../../../../role_all/api/querys.api.hook";
import { IQueryAnswerTransactions } from "./itransactions.api";
import { ITransaction } from "../../../interfaces/itransaction";

/* API Query to server */

/* Get all transactions
 */
export function useQueryGetTransactions() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetTransactions = async () => {
		querySend("/api/shop/transactions", {}, true);
	};

	const dataNew = data as ITransaction[];
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerTransactions = {
		dataTransactions: dataNew,
		errorTransactions: errorNew,
		loadedTransactions: loaded,
		querySendGetTransactions,
	};

	return queryAnswer;
}
