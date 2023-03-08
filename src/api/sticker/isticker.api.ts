import { IProfile } from "../../interfaces/iprofiles";
import { IStickerpack } from "../../interfaces/istickers";
import { IQueryAnswerError } from "../iquerys.api";

export interface IQuerySendSticker {
	userid: string;
	stickerpackid: string;
	stickerpos: number;
}

export interface IQueryAnswerStickerpacks {
	dataStickerpacks: IStickerpack[];
	errorStickerpacks: IQueryAnswerError;
	loadedStickerpacks: boolean;
	querySendGetStickerpacks(): void;
}

export interface IQueryAnswerAddStickerpack {
	dataAddStickerpack: IProfile;
	errorAddStickerpack: IQueryAnswerError;
	loadedAddStickerpack: boolean;
	querySendAddStickerpack(idstickerpack: string): void;
}

export interface IQueryAnswerDeleteStickerpack {
	dataDeleteStickerpack: IProfile;
	errorDeleteStickerpack: IQueryAnswerError;
	loadedDeleteStickerpack: boolean;
	querySendDeleteStickerpack(idstickerpack: string): void;
}
