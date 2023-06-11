import { IProfile } from "../../../../role_all/interfaces/iprofiles";
import { IStickerpack } from "../../../../role_all/interfaces/istickers";
import { IQueryAnswerError } from "../../../../role_all/api/iquerys.api";

export interface IQuerySendSticker {
	userid: string;
	spkid: string;
	spos: number;
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
