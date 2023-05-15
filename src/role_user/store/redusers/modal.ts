import { createAction, createReducer } from "@reduxjs/toolkit";
import {
	IStateModalComplaint,
	IStateModalReviewStickerpack,
} from "../../interfaces/iredusers";
import { initialStateComplaint } from "./complaints";

////////////////////////////////////////////////////////////////////////
export const MODAL_STICKERPACK = "MODAL_STICKERPACK";

export const modalReviewStickerpackAction =
	createAction<IStateModalReviewStickerpack>(MODAL_STICKERPACK);

export const initialStateModalReviewStickerpack: IStateModalReviewStickerpack =
	{
		enabled: false,
		stickerpack: {
			idstickerpack: "",
			name: "",
			discription: "",
			price: 0,
			author: "",
			stickers: [],
		},
	};

export const modalReviewStickerpackReducer = createReducer(
	initialStateModalReviewStickerpack,
	(builder) => {
		builder.addCase(
			modalReviewStickerpackAction,
			(state: IStateModalReviewStickerpack, action: any) => {
				const { enabled, stickerpack } = action.payload;

				return { enabled, stickerpack };
			}
		);
	}
);

////////////////////////////////////////////////////////////////////////
export const MODAL_ADDDELETE_STICKERPACK = "MODAL_ADDDELETE_STICKERPACK";

export const modalAddDeleteStickerpackAction =
	createAction<IStateModalReviewStickerpack>(MODAL_ADDDELETE_STICKERPACK);

export const initialStateModalAddDeleteStickerpack: IStateModalReviewStickerpack =
	{
		enabled: false,
		stickerpack: {
			idstickerpack: "",
			name: "",
			discription: "",
			price: 0,
			author: "",
			stickers: [],
		},
	};

export const modalAddDeleteStickerpackReducer = createReducer(
	initialStateModalReviewStickerpack,
	(builder) => {
		builder.addCase(
			modalAddDeleteStickerpackAction,
			(state: IStateModalReviewStickerpack, action: any) => {
				const { enabled, stickerpack } = action.payload;

				return { enabled, stickerpack };
			}
		);
	}
);
////////////////////////////////////////////////////////////////////////
export const MODAL_COMPLAINT = "MODAL_COMPLAINT";

export const modalComplaintAction =
	createAction<IStateModalComplaint>(MODAL_COMPLAINT);

const initialStateModalComplaint: IStateModalComplaint = {
	enabled: false,
	complaint: initialStateComplaint,
};

export const modalComplaintReducer = createReducer(
	initialStateModalComplaint,
	(builder) => {
		builder.addCase(
			modalComplaintAction,
			(state: IStateModalComplaint, action: any) => {
				let { enabled, complaint } = action.payload;

				if (!enabled) complaint = state.complaint;

				return { enabled, complaint };
			}
		);
	}
);
