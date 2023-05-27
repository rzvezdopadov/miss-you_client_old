import { createAction, createReducer } from "@reduxjs/toolkit";

import {
	data_age,
	data_gender,
	data_genderVapor,
	data_growth,
} from "../../../role_all/data/profiles";
import { ACCTYPE } from "../../../role_all/interfaces/iprofiles";
import { IAdminUserFilters } from "../../interfaces/iadmin";

////////////////////////////////////////////////////////////////////////
export const USER_FILTERS = "USER_FILTERS";

export const userFiltersAction = createAction<IAdminUserFilters>(USER_FILTERS);

const initialStateUserFilters: IAdminUserFilters = {
	userid: "",
	location: "",
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

export const userFiltersReducer = createReducer(
	initialStateUserFilters,
	(builder) => {
		builder.addCase(
			userFiltersAction,
			(state: IAdminUserFilters, action: any) => {
				const filters = { ...action.payload };

				return filters;
			}
		);
	}
);
