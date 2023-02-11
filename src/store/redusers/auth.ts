import { createReducer } from "@reduxjs/toolkit";
import { getCookiesJWT } from "../../helpers/cookie";
import { IRegistration } from "../../interfaces/iauth";
import { data_growth, data_location } from "../../data/profiles";

////////////////////////////////////////////////////////////////////////
export const JWT_TOKEN = "JWT_TOKEN";

export const jwtAction = (value: string) => ({
	type: JWT_TOKEN,
	payload: { value },
});

const initialStateJWT: string = getCookiesJWT();

export const jwtReducer = createReducer(initialStateJWT, {
	[JWT_TOKEN]: (state: string, action: any) => {
		return (state = action.payload.value);
	},
});

////////////////////////////////////////////////////////////////////////
export const REGISTRATION = "REGISTRATION";

export const registrationAction = (registration: IRegistration) => ({
	type: REGISTRATION,
	payload: {
		registration,
	},
});

const initialStateRegistration: IRegistration = {
	name: "",
	location: data_location[0],
	birthday: 1,
	monthofbirth: 1,
	yearofbirth: 1990,
	gender: 0,
	gendervapor: 0,
	growth: data_growth[0],
	email: "",
	password: "",
	captcha: "",
};

export const registrationReducer = createReducer(initialStateRegistration, {
	[REGISTRATION]: (state: IRegistration, action: any) => {
		const { registration } = action.payload;

		return registration;
	},
});
