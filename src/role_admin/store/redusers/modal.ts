import { createAction, createReducer } from "@reduxjs/toolkit";
import {
	IStateBanned,
	IStateChangeCash,
	IStateChangeRating,
} from "../../interfaces/iredusers";

////////////////////////////////////////////////////////////////////////
export const MODAL_CHANGE_RATING = "MODAL_CHANGE_RATING";

export const modalChangeRatingAction =
	createAction<IStateChangeRating>(MODAL_CHANGE_RATING);

export const initialStateModalChangeRating: IStateChangeRating = {
	enabled: false,
	rate: { userid: "", addrating: 0 },
};

export const modalChangeRatingReducer = createReducer(
	initialStateModalChangeRating,

	(builder) => {
		builder.addCase(
			modalChangeRatingAction,
			(state: IStateChangeRating, action: any) => {
				let { enabled, rate } = action.payload;

				if (!enabled) rate = state.rate;

				return { enabled, rate };
			}
		);
	}
);

////////////////////////////////////////////////////////////////////////
const MODAL_CHANGE_CASH = "MODAL_CHANGE_CASH";

export const modalChangeCashAction =
	createAction<IStateChangeCash>(MODAL_CHANGE_CASH);

export const initialStateModalChangeCash: IStateChangeCash = {
	enabled: false,
	cash: { userid: "", addcash: 0 },
};

export const modalChangeCashReducer = createReducer(
	initialStateModalChangeCash,
	(builder) => {
		builder.addCase(
			modalChangeCashAction,
			(state: IStateChangeCash, action: any) => {
				let { enabled, cash } = action.payload;

				if (!enabled) cash = state.cash;

				return { enabled, cash };
			}
		);
	}
);

////////////////////////////////////////////////////////////////////////
const MODAL_BANNED = "MODAL_BANNED";

export const modalBannedAction = createAction<IStateBanned>(MODAL_BANNED);

export const initialStateModalBanned: IStateBanned = {
	enabled: false,
	banned: { userid: "", discription: "", minute: 0, hour: 0, month: 0 },
};

export const modalBannedReducer = createReducer(
	initialStateModalBanned,
	(builder) => {
		builder.addCase(
			modalBannedAction,
			(state: IStateBanned, action: any) => {
				let { enabled, banned } = action.payload;

				if (!enabled) banned = state.banned;

				return { enabled, banned };
			}
		);
	}
);
