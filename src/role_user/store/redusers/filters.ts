import { createAction, createReducer } from "@reduxjs/toolkit";
import { IUserFilters } from "../../../role_all/interfaces/iprofiles";
import {
	data_age,
	data_genderVapor,
	data_growth,
	data_signZodiac,
} from "../../../role_all/data/profiles";

////////////////////////////////////////////////////////////////////////
export const USER_FILTERS = "USER_FILTERS";

export const filtersUserAction = createAction<IUserFilters>(USER_FILTERS);

const initialStateUserFilters: IUserFilters = {
	location: "",
	agestart: data_age[data_age.length - 1],
	ageend: data_age[0],
	growthstart: data_growth[0],
	growthend: data_growth[data_growth.length - 1],
	weight: 0,
	signzodiac: data_signZodiac.length - 1,
	gendervapor: data_genderVapor.length - 1,
	education: 0,
	fieldofactivity: 0,
	maritalstatus: 0,
	children: 0,
	religion: 0,
	smoke: 0,
	profit: 0,
	alcohol: 0,
	interests: [],
};

export const filtersUserReducer = createReducer(
	initialStateUserFilters,
	(builder) => {
		builder.addCase(
			filtersUserAction,
			(state: IUserFilters, action: any) => {
				const filters = { ...action.payload };

				return filters;
			}
		);
	}
);
