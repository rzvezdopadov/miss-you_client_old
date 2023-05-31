import { IMessage } from "./iprofiles";

export interface IGetLike {
	command: string;
	userid: string;
}

export interface IGetMessage {
	command: string;
	id1: string;
	id2: string;
	msg: IMessage;
}
