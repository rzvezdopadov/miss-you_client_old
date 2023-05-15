import { createAction, createReducer } from "@reduxjs/toolkit";

////////////////////////////////////////////////////////////////////////
export const MY_VAPORS = "MY_VAPORS";

export const myVaporsAction = createAction<any>(MY_VAPORS);

export const myVaporsReducer = createReducer("", (builder) => {
	builder.addCase(myVaporsAction, (state: string, action: any) => {
		const myVapors = action.payload;

		return myVapors;
	});
});
