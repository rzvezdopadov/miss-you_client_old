import { createAction, createReducer } from "@reduxjs/toolkit";
import { IEnableParamState } from "../../../role_user/interfaces/iredusers";

export const MOBILE_MENU = "MOBILE_MENU";

export const mobileMenuAction = createAction<boolean>(MOBILE_MENU);

const initialStateMobileMenu: IEnableParamState = {
	enabled: false,
};

export const mobileMenuReducer = createReducer(false, (builder) => {
	builder.addCase(mobileMenuAction, (state: boolean, action: any) => {
		return action.payload;
	});
});
