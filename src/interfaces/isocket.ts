import { IMessage } from "./iprofiles";

export interface IGetLike {
	command: string;
	userId: number;
}

export interface IGetMessage {
	command: string;
	userId: number;
	message: IMessage;
}
