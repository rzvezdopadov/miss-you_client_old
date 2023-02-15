import { messageType } from "./ishop";

export enum ACCTYPE {
	user = "user",
	admin = "admin",
}

export interface IFilterParamSelect {
	value: string | number;
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export interface IFilterParamInput {
	value: string | number;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface IFilterUsers {
	location: string;
	agestart: number;
	ageend: number;
	growthstart: number;
	growthend: number;
	weight: number;
	signzodiac: number;
	gendervapor: number;
	religion: number;
	smoke: number;
	alcohol: number;
	interests: Array<string>;
}

export interface IProfile {
	userid: string;
	timecode: number;
	name: string;
	location: string;
	likes: Array<string>;
	birthday: number;
	monthofbirth: number;
	yearofbirth: number;
	growth: number;
	weight: number;
	gender: number;
	gendervapor: number;
	photomain: number;
	photolink: Array<string>;
	signzodiac: number;
	education: number;
	fieldofactivity: number;
	maritalstatus: number;
	children: number;
	religion: number;
	smoke: number;
	alcohol: number;
	discription: string;
	profit: number;
	interests: Array<string>;
	ilikecharacter: Array<number>;
	idontlikecharacter: Array<number>;
	rating: number;
	stickerpacks: Array<string>;
	cash: number;
	acctype: ACCTYPE;
	filters: IFilterUsers;
}

export interface IProfileShort {
	userid: string;
	timecode: number;
	name: string;
	birthday: number;
	monthofbirth: number;
	yearofbirth: number;
	gender: number;
	photomain: number;
	photolink: Array<string>;
	interests: Array<string>;
	rating: number;
}

export interface IMessage {
	timecode: number;
	type: messageType;
	userid: string;
	message: string;
	stickerpackid: string;
	stickerpos: number;
}

export interface IDialog {
	timecode: number;
	userid: string;
	name: string;
	birthday: number;
	monthofbirth: number;
	yearofbirth: number;
	photomain: number;
	photolink: Array<string>;
	messages: Array<IMessage>;
}

export interface IPhoto {
	photomain: number;
	photolink: Array<string>;
}
