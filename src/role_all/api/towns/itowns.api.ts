import { IQueryAnswerError } from "../iquerys.api";

export interface IQueryDialog {
	userid: string;
}

export interface IQuerySendMessage {
	userid: string;
	message: string;
}

export interface IQueryAnswerGetTowns {
	dataGetTowns: string[];
	errorGetTowns: IQueryAnswerError;
	loadedGetTowns: boolean;
	querySendGetTowns(): void;
}
