import { createReducer } from "@reduxjs/toolkit";

////////////////////////////////////////////////////////////////////////
export const MY_VAPORS = "MY_VAPORS";

export const myVaporsAction = (value: any) => ({
	type: MY_VAPORS,
	payload: value,
});

export const myVaporsReducer = createReducer("", {
	[MY_VAPORS]: (state: string, action: any) => {
		const myVapors = action.payload;

		return myVapors;
	},
});
