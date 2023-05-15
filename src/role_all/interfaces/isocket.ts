import { IMessage } from "./iprofiles";

export interface IGetLike {
	command: string;
	userid: string;
}

export interface IGetMessage {
	command: string;
	userid1: string;
	userid2: string;
	message: IMessage;
}
