import { createAction, createReducer } from "@reduxjs/toolkit";
import { getCookiesJWT } from "../../helpers/cookie";
import { IRegistration } from "../../interfaces/iauth";
import { data_growth } from "../../data/profiles";

////////////////////////////////////////////////////////////////////////
export const JWT_TOKEN = "JWT_TOKEN";

export const jwtAction = createAction<string>(JWT_TOKEN);

const initialStateJWT: string = getCookiesJWT();

export const jwtReducer = createReducer(initialStateJWT, (builder) => {
	builder.addCase(jwtAction, (state: string, action: any) => {
		return action.payload;
	});
});

////////////////////////////////////////////////////////////////////////
export const REGISTRATION = "REGISTRATION";

export const registrationAction = createAction<IRegistration>(REGISTRATION);

const initialStateRegistration: IRegistration = {
	name: "",
	location: "",
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

export const registrationReducer = createReducer(
	initialStateRegistration,
	(builder) => {
		builder.addCase(
			registrationAction,
			(state: IRegistration, action: any) => {
				const registration = { ...action.payload };

				return registration;
			}
		);
	}
);
