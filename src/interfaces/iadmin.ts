import { ACCTYPE } from "./iprofiles";

export interface IAdminFilterUsers {
	userid: string;
	location: string;
	agestart: number;
	ageend: number;
	growthstart: number;
	growthend: number;
	weight: number;
	signzodiac: number;
	gender: number;
	gendervapor: number;
	education: number;
	fieldofactivity: number;
	maritalstatus: number;
	children: number;
	religion: number;
	smoke: number;
	alcohol: number;
	profit: number;
	acctype: ACCTYPE;
	interests: string[];
}

export interface IAdminChangeRating {
	userid: string;
	addrating: number;
}

export interface IAdminChangeCash {
	userid: string;
	addcash: number;
}

export interface IAdminBanned {
	userid: string;
	minute: number;
	hour: number;
	month: number;
	discription: string;
}
