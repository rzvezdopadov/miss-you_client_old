import { createReducer } from "@reduxjs/toolkit";
import {
	data_age,
	data_gender,
	data_genderVapor,
	data_growth,
	data_location,
} from "../../data/profiles";
import { IAdminFilterUsers } from "../../interfaces/iadmin";
import { ACCTYPE } from "../../interfaces/iprofiles";

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
