import { IFilterUsers, IProfile } from "./iprofiles";

export interface IQueryRegistration {
	gender: number;
	gendervapor: number;
	name: string;
	email: string;
	password: string;
}

export interface ILogin {
	email: string;
	password: string;
}

export interface IQueryGetProfile {
	id: number;
}

export interface IQuerySetProfile {
	profile: IProfile;
}

export interface IQueryLike {
	id: number;
}

export interface IQueryGetProfiles {
	startcount: number;
	amount: number;
	filters: IFilterUsers;
}

export interface IQueryGetProfilesOnlyLikes {
	startcount: number;
	amount: number;
	users: any;
}

export interface IQueryDialog {
	id: number;
}

export interface IQuerySendMessage {
	id: number;
	message: string;
}

export interface IQueryPhoto {
	photoPos: number;
}

export interface IQueryUploadPhoto {
	data: FormData;
}
