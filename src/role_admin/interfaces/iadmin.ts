import {
	ACCTYPE,
	IAchivment,
	IPaid,
	IPresent,
	IUserFilters,
} from "../../role_all/interfaces/iprofiles";

export interface IStatVisit {
	key: string;
	tco: number;
	tcc: number;
}

export interface ICoordinates {
	ipaddress: string;
	latitude: number;
	longitude: number;
}

export interface IAdminUserFilters {
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

export interface IAdminProfile {
	userid: string;
	email: string;
	coordinates: ICoordinates;
	registrationdate: number;
	timecode: number;
	name: string;
	location: string;
	phone: string;
	likes: string[];
	favoriteusers: string[];
	privateselections: string[];
	bannedusers: string[];
	presents: IPresent[];
	achivments: IAchivment[];
	birthday: number;
	monthofbirth: number;
	yearofbirth: number;
	growth: number;
	weight: number;
	gender: number;
	gendervapor: number;
	photomain: number;
	photolink: string[];
	signzodiac: number;
	goaldate: number;
	education: number;
	fieldofactivity: number;
	maritalstatus: number;
	children: number;
	religion: number;
	smoke: number;
	alcohol: number;
	discription: string;
	profit: number;
	interests: string[];
	filters: IUserFilters;
	ilikecharacter: number[];
	idontlikecharacter: number[];
	stickerpacks: string[];
	rating: number;
	cash: number;
	acctype: ACCTYPE;
	visit: IStatVisit[];
	paid: IPaid;
	referral: string;
	deleteacc: number;
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
export { IUserFilters };
