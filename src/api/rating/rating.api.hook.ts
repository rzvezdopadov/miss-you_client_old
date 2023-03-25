import { IProfile } from "../../interfaces/iprofiles";
import { IRate } from "../../interfaces/ishop";
import { IQueryAnswerError } from "../iquerys.api";
import { useQueryGet, useQueryPost } from "../querys.api.hook";
import {
	IQueryAnswerBuyRating,
	IQueryAnswerRatingTariffs,
} from "./irating.api";

/* API Query to server */

/* Get all rate tarrifs
 */
export function useQueryGetRatingTariffs() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetRatingTariffs = async () => {
		querySend("/api/shop/ratingtariffs", {}, true);
	};

	const dataNew = data as IRate[];
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerRatingTariffs = {
		dataRatingTariffs: dataNew,
		errorRatingTariffs: errorNew,
		loadedRatingTariffs: loaded,
		querySendGetRatingTariffs,
	};

	return queryAnswer;
}

/* Buy ratting
 */
export function useQueryBuyRating() {
	const { data, error, loaded, querySend } = useQueryPost();

	const querySendBuyRating = async (idtariff: string) => {
		querySend("/api/shop/buyrating", { idtariff }, true);
	};

	const dataNew = data as IProfile;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerBuyRating = {
		dataBuyRating: dataNew,
		errorBuyRating: errorNew,
		loadedBuyRating: loaded,
		querySendBuyRating,
	};

	return queryAnswer;
}
