import { createAction, createReducer } from "@reduxjs/toolkit";

////////////////////////////////////////////////////////////////////////
export const TOWNS = "TOWNS";

export const townsAction = createAction<string[]>(TOWNS);

export const initialStateTowns: string[] = [];

export const townsReducer = createReducer(initialStateTowns, (builder) => {
	builder.addCase(townsAction, (state: string[], action: any) => {
		const towns = [...action.payload];

		return towns;
	});
});
