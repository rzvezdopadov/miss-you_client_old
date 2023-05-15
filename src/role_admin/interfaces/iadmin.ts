import { ACCTYPE } from "../../role_all/interfaces/iprofiles";

export interface IUserFilters {
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

export interface IChangeRating {
	userid: string;
	addrating: number;
}

export interface IChangeCash {
	userid: string;
	addcash: number;
}

export interface IBanned {
	userid: string;
	minute: number;
	hour: number;
	month: number;
	discription: string;
}
