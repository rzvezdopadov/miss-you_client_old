import { IFilterUsers, IProfile } from "./iprofiles";

export interface IQueryRegistration {
	gender: number;
	gendervapor: number;
	name: string;
	email: string;
	password: string;
}

export interface IQueryGetProfile {
	userid: string;
}

export interface IQuerySetProfile {
	profile: IProfile;
}

export interface IQueryLike {
	userid: string;
}

export interface IQueryGetProfiles {
	startcount: number;
	amount: number;
	filters: IFilterUsers;
}

export interface IQueryGetProfilesForLikes {
	startcount: number;
	amount: number;
}

export interface IQueryGetProfilesForLikes {
	startcount: number;
	amount: number;
}

export interface IQueryDialog {
	userid: string;
}

export interface IQuerySendMessage {
	userid: string;
	message: string;
}

export interface IQuerySendSticker {
	userid: string;
	stickerpackid: string;
	stickerpos: number;
}

export interface IQueryPhoto {
	photoPos: number;
}

export interface IQueryUploadPhoto {
	data: FormData;
}
