import { createReducer } from "@reduxjs/toolkit";
import { IDialog } from "../../interfaces/iprofiles";

////////////////////////////////////////////////////////////////////////
export const DIALOGS = "DIALOGS";

export const dialogsAction = (dialogs: IDialog[]) => ({
	type: DIALOGS,
	payload: {
		dialogs,
	},
});

export const initialStateDialogs: IDialog[] = [];

export const dialogsReducer = createReducer(initialStateDialogs, {
	[DIALOGS]: (state: IDialog[], action: any) => {
		const { dialogs } = action.payload;

		return dialogs;
	},
});
////////////////////////////////////////////////////////////////////////
export const DIALOG = "DIALOG";

export const dialogAction = (dialog: IDialog) => ({
	type: DIALOG,
	payload: {
		dialog,
	},
});

export const initialStateDialog: IDialog = {
	timecode: 0,
	userid: "",
	name: "",
	birthday: 0,
	monthofbirth: 0,
	yearofbirth: 0,
	photolink: "",
	messages: [],
};

export const dialogReducer = createReducer(initialStateDialog, {
	[DIALOG]: (state: IDialog, action: any) => {
		const { dialog } = action.payload;

		return dialog;
	},
});
