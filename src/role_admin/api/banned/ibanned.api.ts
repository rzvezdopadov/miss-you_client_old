import {
	IQueryAnswerError,
	IQueryAnswerMessageData,
} from "../../../role_all/api/iquerys.api";
import { IBanned } from "../../interfaces/iadmin";

export interface IQueryAnswerBanned {
	dataSetBanned: IQueryAnswerMessageData;
	errorSetBanned: IQueryAnswerError;
	loadedSetBanned: boolean;
	querySendSetBanned(data: IBanned): void;
}
