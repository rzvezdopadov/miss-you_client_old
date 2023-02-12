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
	interests: Array<string>;
}

export interface IAdminChangeRating {
	userid: string;
	addrating: number;
}
