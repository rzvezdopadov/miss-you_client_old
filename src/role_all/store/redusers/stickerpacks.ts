import { createAction, createReducer } from "@reduxjs/toolkit";
import { IStickerpack } from "../../interfaces/istickers";

////////////////////////////////////////////////////////////////////////
export const STICKERPACKS = "STICKERPACKS";

export const stickerpacksAction = createAction<IStickerpack[]>(STICKERPACKS);

const initialStateStickerpacks: IStickerpack[] = [];

export const stickerpacksReducer = createReducer(
	initialStateStickerpacks,
	(builder) => {
		builder.addCase(
			stickerpacksAction,
			(state: IStickerpack[], action: any) => {
				const dataStickerpacks = [...action.payload];

				return dataStickerpacks;
			}
		);
	}
);
