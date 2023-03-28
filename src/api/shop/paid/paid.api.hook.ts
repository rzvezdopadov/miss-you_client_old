import { IProfile } from "../../../interfaces/iprofiles";
import { ITariff } from "../../../interfaces/ishop";
import { IQueryAnswerError } from "../../iquerys.api";
import { useQueryGet, useQueryPost } from "../../querys.api.hook";
import {
	IQueryAnswerBuyPaidTariff,
	IQueryAnswerPaidTariffs,
	PAID_API_TARIFFS,
	PAID_API_TARIFFS_BUY,
} from "./ipaid.api";

/* API Query to server */

/* Get all tarrifs
 */
export function useQueryGetPaidTariffs(linkAPI: PAID_API_TARIFFS) {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetPaidTariffs = async () => {
		querySend(`${linkAPI}`, {}, true);
	};

	const dataNew = data as ITariff[];
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerPaidTariffs = {
		dataPaidTariffs: dataNew,
		errorPaidTariffs: errorNew,
		loadedPaidTariffs: loaded,
		querySendGetPaidTariffs,
	};

	return queryAnswer;
}

/* Buy tariff
 */
export function useQueryBuyPaidTariff(linkAPI: PAID_API_TARIFFS_BUY) {
	const { data, error, loaded, querySend } = useQueryPost();

	const querySendBuyPaidTariff = async (idtariff: string) => {
		querySend(`${linkAPI}`, { idtariff }, true);
	};

	const dataNew = data as IProfile;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerBuyPaidTariff = {
		dataBuyPaidTariff: dataNew,
		errorBuyPaidTariff: errorNew,
		loadedBuyPaidTariff: loaded,
		querySendBuyPaidTariff,
	};

	return queryAnswer;
}
