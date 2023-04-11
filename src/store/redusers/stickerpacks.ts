import { createReducer } from "@reduxjs/toolkit";
import { IStickerpack } from "../../interfaces/istickers";

////////////////////////////////////////////////////////////////////////
export const STICKERPACKS = "STICKERPACKS";

export const stickerpacksAction = (stickerpacks: IStickerpack[]) => ({
	type: STICKERPACKS,
	payload: stickerpacks,
});

const initialStateStickerpacks: IStickerpack[] = [];

export const stickerpacksReducer = createReducer(initialStateStickerpacks, {
	[STICKERPACKS]: (state: IStickerpack[], action: any) => {
		const dataayStickerpacks = [...action.payload];

		return dataayStickerpacks;
	},
});
