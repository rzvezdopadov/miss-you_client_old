import { createAction, createReducer } from "@reduxjs/toolkit";
import { IDialog } from "../../interfaces/iprofiles";

////////////////////////////////////////////////////////////////////////
export const DIALOGS = "DIALOGS";

export const dialogsAction = createAction<IDialog[]>(DIALOGS);

export const initialStateDialogs: IDialog[] = [];

export const dialogsReducer = createReducer(initialStateDialogs, (builder) => {
	builder.addCase(dialogsAction, (state: IDialog[], action: any) => {
		const dialogs = [...action.payload];

		return dialogs;
	});
});
////////////////////////////////////////////////////////////////////////
export const DIALOG = "DIALOG";

export const dialogAction = createAction<IDialog>(DIALOG);

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

export const dialogReducer = createReducer(initialStateDialog, (builder) => {
	builder.addCase(dialogAction, (state: IDialog, action: any) => {
		const dialog = { ...action.payload };

		return dialog;
	});
});
