import { createReducer } from "@reduxjs/toolkit";
import {
	data_age,
	data_gender,
	data_genderVapor,
	data_growth,
	data_location,
} from "../../data/profiles";
import {
	IAdminBanned,
	IAdminChangeCash,
	IAdminChangeRating,
	IAdminFilterUsers,
} from "../../interfaces/iadmin";
import { ACCTYPE } from "../../interfaces/iprofiles";
import {
	IStateAdminBanned,
	IStateAdminChangeCash,
	IStateAdminChangeRating,
} from "../../interfaces/iredusers";

////////////////////////////////////////////////////////////////////////
export const ADMIN_FILTERS_USER = "ADMIN_FILTERS_USER";

export const adminFiltersUserAction = (filters: IAdminFilterUsers) => ({
	type: ADMIN_FILTERS_USER,
	payload: filters,
});

const initialStateAdminFiltersUser: IAdminFilterUsers = {
	userid: "",
	location: data_location[0],
	agestart: data_age[0],
	ageend: data_age[data_age.length - 1],
	growthstart: data_growth[0],
	growthend: data_growth[data_growth.length - 1],
	weight: 0,
	signzodiac: 0,
	gender: data_gender.length - 1,
	gendervapor: data_genderVapor.length - 1,
	education: 0,
	fieldofactivity: 0,
	maritalstatus: 0,
	children: 0,
	religion: 0,
	smoke: 0,
	alcohol: 0,
	profit: 0,
	acctype: ACCTYPE.user,
	interests: [],
};

export const adminFiltersUserReducer = createReducer(
	initialStateAdminFiltersUser,
	{
		[ADMIN_FILTERS_USER]: (state: IAdminFilterUsers, action: any) => {
			const filters = { ...action.payload };

			return filters;
		},
	}
);
////////////////////////////////////////////////////////////////////////
export const MODAL_ADMIN_CHANGE_RATING = "MODAL_ADMIN_CHANGE_RATING";

export const modalAdminChangeRatingAction = (
	enabled: boolean,
	rate: IAdminChangeRating
) => ({
	type: MODAL_ADMIN_CHANGE_RATING,
	payload: {
		enabled,
		rate,
	},
});

export const initialStateModalAdminChangeRating: IStateAdminChangeRating = {
	enabled: false,
	rate: { userid: "", addrating: 0 },
};

export const modalAdminChangeRatingReducer = createReducer(
	initialStateModalAdminChangeRating,
	{
		[MODAL_ADMIN_CHANGE_RATING]: (
			state: IStateAdminChangeRating,
			action: any
		) => {
			let { enabled, rate } = action.payload;

			if (!enabled) rate = state.rate;

			return { enabled, rate };
		},
	}
);

////////////////////////////////////////////////////////////////////////
const MODAL_ADMIN_CHANGE_CASH = "MODAL_ADMIN_CHANGE_CASH";

export const modalAdminChangeCashAction = (
	enabled: boolean,
	cash: IAdminChangeCash
) => ({
	type: MODAL_ADMIN_CHANGE_CASH,
	payload: {
		enabled,
		cash,
	},
});

export const initialStateModalAdminChangeCash: IStateAdminChangeCash = {
	enabled: false,
	cash: { userid: "", addcash: 0 },
};

export const modalAdminChangeCashReducer = createReducer(
	initialStateModalAdminChangeCash,
	{
		[MODAL_ADMIN_CHANGE_CASH]: (
			state: IStateAdminChangeCash,
			action: any
		) => {
			let { enabled, cash } = action.payload;

			if (!enabled) cash = state.cash;

			return { enabled, cash };
		},
	}
);

////////////////////////////////////////////////////////////////////////
const MODAL_ADMIN_BANNED = "MODAL_ADMIN_BANNED";

export const modalAdminBannedAction = (
	enabled: boolean,
	banned: IAdminBanned
) => ({
	type: MODAL_ADMIN_BANNED,
	payload: {
		enabled,
		banned,
	},
});

export const initialStateModalAdminBanned: IStateAdminBanned = {
	enabled: false,
	banned: { userid: "", discription: "", minute: 0, hour: 0, month: 0 },
};

export const modalAdminBannedReducer = createReducer(
	initialStateModalAdminBanned,
	{
		[MODAL_ADMIN_BANNED]: (state: IStateAdminBanned, action: any) => {
			let { enabled, banned } = action.payload;

			if (!enabled) banned = state.banned;

			return { enabled, banned };
		},
	}
);
