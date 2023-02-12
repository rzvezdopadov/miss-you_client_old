import { IDialog } from "../../interfaces/iprofiles";
import { IQueryAnswerError } from "../iquerys.api";

export interface IQueryDialog {
	userid: string;
}

export interface IQuerySendMessage {
	userid: string;
	message: string;
}

export interface IQueryAnswerGetDialogs {
	dataGetDialogs: Array<IDialog>;
	errorGetDialogs: IQueryAnswerError;
	loadedGetDialogs: boolean;
	querySendGetDialogs(): void;
}

export interface IQueryAnswerGetDialog {
	dataGetDialog: IDialog;
	errorGetDialog: IQueryAnswerError;
	loadedGetDialog: boolean;
	querySendGetDialog(data: IQueryDialog): void;
}
