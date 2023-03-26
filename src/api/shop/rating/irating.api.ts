import { IProfile } from "../../../interfaces/iprofiles";
import { IRate } from "../../../interfaces/ishop";
import { IQueryAnswerError } from "../../iquerys.api";

export interface IQueryAnswerRatingTariffs {
	dataRatingTariffs: IRate[];
	errorRatingTariffs: IQueryAnswerError;
	loadedRatingTariffs: boolean;
	querySendGetRatingTariffs(): void;
}

export interface IQueryAnswerBuyRating {
	dataBuyRating: IProfile;
	errorBuyRating: IQueryAnswerError;
	loadedBuyRating: boolean;
	querySendBuyRating(idrate: string): void;
}
