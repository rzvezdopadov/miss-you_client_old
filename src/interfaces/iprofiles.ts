export interface IFilterParam {
	value: string | number;
	onChange: React.ChangeEventHandler<HTMLSelectElement>;
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

export interface IRegistration {
	name: string;
	location: string;
	birthday: number;
	monthofbirth: number;
	yearofbirth: number;
	gender: number;
	gendervapor: number;
	growth: number;
	email: string;
	password: string;
	captcha: string;
}

export interface ILogin {
	email: string;
	password: string;
	captcha: string;
}

export interface IRecoveryPassword {
	email: string;
	captcha: string;
}

export interface IProfile {
	userid: string;
	timecode: number;
	name: string;
	latitude: number;
	longitude: number;
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
	userid: string;
	message: string;
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

export interface IChangePass {
	passwordnow: string;
	passwordnew: string;
	captcha: string;
}
