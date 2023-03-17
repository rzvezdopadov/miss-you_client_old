import { createReducer } from "@reduxjs/toolkit";
import { IDialog } from "../../interfaces/iprofiles";
import { IStickerpack } from "../../interfaces/istickers";

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

////////////////////////////////////////////////////////////////////////
export const DIALOG_USER_ID = "DIALOG_USER_ID";

export const dialogUserIdAction = (dialogUserId: string) => ({
	type: DIALOG_USER_ID,
	payload: dialogUserId,
});

export const dialogUserIdReducer = createReducer("", {
	[DIALOG_USER_ID]: (state: string, action: any) => {
		const dialogUserId = action.payload;

		return dialogUserId;
	},
});
////////////////////////////////////////////////////////////////////////
export const MESSAGE_FOR_USER = "MESSAGE_FOR_USER";

export const messageForUserAction = (value: string) => ({
	type: MESSAGE_FOR_USER,
	payload: { value },
});

const initialStateMessageForUser: string = "";

export const messageForUserReducer = createReducer(initialStateMessageForUser, {
	[MESSAGE_FOR_USER]: (state: string, action: any) => {
		return (state = action.payload.value);
	},
});

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
