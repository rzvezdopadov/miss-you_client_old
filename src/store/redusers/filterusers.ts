import { createReducer } from "@reduxjs/toolkit";
import { IFilterUsers } from "../../interfaces/iprofiles";
import {
	data_age,
	data_genderVapor,
	data_growth,
	data_signZodiac,
} from "../../data/profiles";

////////////////////////////////////////////////////////////////////////
export const FILTERS_USER = "FILTERS_USER";

export const filtersUserAction = (filters: IFilterUsers) => ({
	type: FILTERS_USER,
	payload: filters,
});

const initialStateFiltersUser: IFilterUsers = {
	location: "",
	agestart: data_age[data_age.length - 1],
	ageend: data_age[0],
	growthstart: data_growth[0],
	growthend: data_growth[data_growth.length - 1],
	weight: 0,
	signzodiac: data_signZodiac.length - 1,
	gendervapor: data_genderVapor.length - 1,
	religion: 0,
	smoke: 0,
	alcohol: 0,
	interests: [],
};

export const filtersUserReducer = createReducer(initialStateFiltersUser, {
	[FILTERS_USER]: (state: IFilterUsers, action: any) => {
		const filters = { ...action.payload };

		return filters;
	},
});
