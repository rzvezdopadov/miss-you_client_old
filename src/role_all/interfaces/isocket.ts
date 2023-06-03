import { IMessage } from "./iprofiles";

export interface IGetLike {
	command: string;
	userid: string;
}

export interface IGetMessage {
	command: string;
	msg: IMessage;
}
