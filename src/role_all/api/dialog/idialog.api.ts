import { IDialog } from "../../interfaces/iprofiles";
import { IQueryAnswerError } from "../iquerys.api";

export interface IQueryDialog {
	userid: string;
	startcount: number;
	amount: number;
}

export interface IQuerySendMessage {
	userid: string;
	msg: string;
}

export interface IQueryAnswerGetDialogs {
	dataGetDialogs: string[];
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
