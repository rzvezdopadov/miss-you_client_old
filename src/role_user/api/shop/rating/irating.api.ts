import { IProfile } from "../../../../role_all/interfaces/iprofiles";
import { ITariff } from "../../../../role_all/interfaces/ishop";
import { IQueryAnswerError } from "../../../../role_all/api/iquerys.api";

export interface IQueryAnswerRatingTariffs {
	dataRatingTariffs: ITariff[];
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
