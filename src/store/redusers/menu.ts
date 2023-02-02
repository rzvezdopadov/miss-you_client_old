import { createReducer } from "@reduxjs/toolkit";

export const MOBILE_MENU = "MOBILE_MENU";

export const mobileMenuAction = (enabled: boolean) => ({
	type: MOBILE_MENU,
	payload: {
		enabled,
	},
});

interface IEnableParamState {
	enabled: boolean;
}

const initialStateMobileMenu: IEnableParamState = {
	enabled: false,
};

export const mobileMenuReducer = createReducer(initialStateMobileMenu, {
	[MOBILE_MENU]: (state: IEnableParamState, action: any) => {
		const { enabled } = action.payload;

		return { enabled };
	},
});
