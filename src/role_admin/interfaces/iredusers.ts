import { IBanned, IChangeCash, IChangeRating } from "./iadmin";

export interface IStateChangeRating {
	enabled: boolean;
	rate: IChangeRating;
}

export interface IStateChangeCash {
	enabled: boolean;
	cash: IChangeCash;
}

export interface IStateBanned {
	enabled: boolean;
	banned: IBanned;
}
