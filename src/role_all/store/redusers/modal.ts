import { createAction, createReducer } from "@reduxjs/toolkit";
import { IModalDialog } from "../../interfaces/iprofiles";
import { initialStateDialog } from "./dialog";
import {
	IStateModalMessage,
	IStatePhotoDelete,
} from "../../interfaces/iredusers";

////////////////////////////////////////////////////////////////////////
export const MODAL_LOADING = "MODAL_LOADING";

export const modalLoadingAction =
	createAction<IStateModalMessage>(MODAL_LOADING);

const initialStateModalLoading: IStateModalMessage = {
	enabled: false,
	text: "",
};

export const modalLoadingReducer = createReducer(
	initialStateModalLoading,
	(builder) => {
		builder.addCase(
			modalLoadingAction,
			(state: IStateModalMessage, action: any) => {
				const { enabled, text } = action.payload;

				return { enabled, text };
			}
		);
	}
);

////////////////////////////////////////////////////////////////////////
export const MODAL_MESSAGE = "MODAL_MESSAGE";

export const modalMessageAction =
	createAction<IStateModalMessage>(MODAL_MESSAGE);

const initialStateModalMessage: IStateModalMessage = {
	enabled: false,
	text: "",
};

export const modalMessageReducer = createReducer(
	initialStateModalMessage,
	(builder) => {
		builder.addCase(
			modalMessageAction,
			(state: IStateModalMessage, action: any) => {
				let { enabled, text } = action.payload;

				if (!enabled) text = state.text;

				return { enabled, text };
			}
		);
	}
);

////////////////////////////////////////////////////////////////////////
export const MODAL_PHOTO_DELETE = "MODAL_PHOTO_DELETE";

export const modalPhotoDeleteAction =
	createAction<IStatePhotoDelete>(MODAL_PHOTO_DELETE);

const initialStateModalPhotoDelete: IStatePhotoDelete = {
	enabled: false,
	photoPos: 0,
};

export const modalPhotoDeleteReducer = createReducer(
	initialStateModalPhotoDelete,
	(builder) => {
		builder.addCase(
			modalPhotoDeleteAction,
			(state: IStatePhotoDelete, action: any) => {
				let { enabled, photoPos } = action.payload;

				if (!enabled) photoPos = state.photoPos;

				return { enabled, photoPos };
			}
		);
	}
);

////////////////////////////////////////////////////////////////////////
export const MODAL_DIALOG = "MODAL_DIALOG";

export const modalDialogAction = createAction<IModalDialog>(MODAL_DIALOG);

const initialStateModalDialog: IModalDialog = {
	enabled: false,
	dialog: initialStateDialog,
};

export const modalDialogReducer = createReducer(
	initialStateModalDialog,
	(builder) => {
		builder.addCase(
			modalDialogAction,
			(state: IModalDialog, action: any) => {
				const modalDialog = { ...action.payload };

				return modalDialog;
			}
		);
	}
);
////////////////////////////////////////////////////////////////////////
export const MODAL_PHOTO_EDITOR = "MODAL_PHOTO_EDITOR";

export const modalPhotoEditorAction = createAction<boolean>(MODAL_PHOTO_EDITOR);

export const modalPhotoEditorReducer = createReducer(false, (builder) => {
	builder.addCase(modalPhotoEditorAction, (state: boolean, action: any) => {
		const modalPhotoEditor = action.payload;

		return modalPhotoEditor;
	});
});
