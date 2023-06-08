import { IQueryAnswerError } from "../../../../role_all/api/iquerys.api";
import { ITransaction } from "../../../interfaces/itransaction";

export interface IQueryAnswerTransactions {
	dataTransactions: ITransaction[];
	errorTransactions: IQueryAnswerError;
	loadedTransactions: boolean;
	querySendGetTransactions(): void;
}
