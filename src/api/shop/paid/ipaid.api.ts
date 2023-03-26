import { IProfile } from "../../../interfaces/iprofiles";
import { ITariff } from "../../../interfaces/ishop";
import { IQueryAnswerError } from "../../iquerys.api";

export enum PAID_API_TARIFFS {
	messageswritetariffs = `api/shop/messageswritetariffs`,
	messagesreadtariffs = `api/shop/messagesreadtariffs`,
	longfilterstariffs = `api/shop/longfilterstariffs`,
	filtersvaporstariffs = `api/shop/filtersvaporstariffs`,
	longfiltersvaporstariffs = `api/shop/longfiltersvaporstariffs`,
	filtersfavoriteuserstariffs = `api/shop/filtersfavoriteuserstariffs`,
	longfiltersfavoriteuserstariffs = `api/shop/longfiltersfavoriteuserstariffs`,
	interests20tariffs = `api/shop/interests20tariffs`,
	interests30tariffs = `api/shop/interests30tariffs`,
	photofulltariffs = `api/shop/photofulltariffs`,
	photoload10tariffs = `api/shop/photoload10tariffs`,
	photoload15tariffs = `api/shop/photoload15tariffs`,
	photoload20tariffs = `api/shop/photoload20tariffs`,
	photoload25tariffs = `api/shop/photoload25tariffs`,
	photoload30tariffs = `api/shop/photoload30tariffs`,
	historymessages20tariffs = `api/shop/historymessages20tariffs`,
	historymessages40tariffs = `api/shop/historymessages40tariffs`,
	historymessages60tariffs = `api/shop/historymessages60tariffs`,
	historymessages80tariffs = `api/shop/historymessages80tariffs`,
	historymessages100tariffs = `api/shop/historymessages100tariffs`,
	historymessages200tariffs = `api/shop/historymessages200tariffs`,
	historymessages300tariffs = `api/shop/historymessages300tariffs`,
}

export enum PAID_API_TARIFFS_BUY {
	buymessageswrite = `api/shop/buymessageswrite`,
	buymessagesread = `api/shop/buymessagesread`,
	buylongfilters = `api/shop/buylongfilters`,
	buyfiltersvapors = `api/shop/buyfiltersvapors`,
	buylongfiltersvapors = `api/shop/buylongfiltersvapors`,
	buyfiltersfavoriteusers = `api/shop/buyfiltersfavoriteusers`,
	buylongfiltersfavoriteusers = `api/shop/buylongfiltersfavoriteusers`,
	buyinterests20 = `api/shop/buyinterests20`,
	buyinterests30 = `api/shop/buyinterests30`,
	buyphotofull = `api/shop/buyphotofull`,
	buyphotoload10 = `api/shop/buyphotoload10`,
	buyphotoload15 = `api/shop/buyphotoload15`,
	buyphotoload20 = `api/shop/buyphotoload20`,
	buyphotoload25 = `api/shop/buyphotoload25`,
	buyphotoload30 = `api/shop/buyphotoload30`,
	buyhistorymessages20 = `api/shop/buyhistorymessages20`,
	buyhistorymessages40 = `api/shop/buyhistorymessages40`,
	buyhistorymessages60 = `api/shop/buyhistorymessages60`,
	buyhistorymessages80 = `api/shop/buyhistorymessages80`,
	buyhistorymessages100 = `api/shop/buyhistorymessages100`,
	buyhistorymessages200 = `api/shop/buyhistorymessages200`,
	buyhistorymessages300 = `api/shop/buyhistorymessages300`,
}

export interface IQueryAnswerPaidTariffs {
	dataPaidTariffs: ITariff[];
	errorPaidTariffs: IQueryAnswerError;
	loadedPaidTariffs: boolean;
	querySendGetPaidTariffs(linkAPI: PAID_API_TARIFFS): void;
}

export interface IQueryAnswerBuyPaidTariff {
	dataBuyPaidTariff: IProfile;
	errorBuyPaidTariff: IQueryAnswerError;
	loadedBuyPaidTariff: boolean;
	querySendBuyPaidTariff(idtariff: string): void;
}
