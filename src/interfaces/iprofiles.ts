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
	education: number;
	fieldofactivity: number;
	maritalstatus: number;
	children: number;
	religion: number;
	smoke: number;
	alcohol: number;
	profit: number;
	interests: string[];
}

interface IPaidContent {
	enabled: boolean;
	timecode: number;
}

export interface IPaid {
	messageswrite: IPaidContent;
	messagesread: IPaidContent;
	longfilters: IPaidContent;
	filtersvapors: IPaidContent;
	longfiltersvapors: IPaidContent;
	filtersfavoriteusers: IPaidContent;
	longfiltersfavoriteusers: IPaidContent;
	photofull: IPaidContent;
	photoload10: IPaidContent;
	photoload15: IPaidContent;
	photoload20: IPaidContent;
	photoload25: IPaidContent;
	photoload30: IPaidContent;
	interests20: IPaidContent;
	interests30: IPaidContent;
	historymessages20: IPaidContent;
	historymessages40: IPaidContent;
	historymessages60: IPaidContent;
	historymessages80: IPaidContent;
	historymessages100: IPaidContent;
	historymessages200: IPaidContent;
	historymessages300: IPaidContent;
}

export interface IPresent {
	fromuserid: string;
	fromname: string;
	presentid: string;
	link: string;
}

export interface IAchivment {
	id: string;
	title: string;
	discription: string;
	link: string;
}

export interface IProfile {
	userid: string;
	timecode: number;
	name: string;
	location: string;
	likes: string[];
	favoriteusers: string[];
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
	ilikecharacter: number[];
	idontlikecharacter: number[];
	rating: number;
	stickerpacks: string[];
	cash: number;
	acctype: ACCTYPE;
	filters: IFilterUsers;
	paid: IPaid;
	deleteacc: number;
}

export interface IProfileShort {
	userid: string;
	timecode: number;
	name: string;
	birthday: number;
	monthofbirth: number;
	yearofbirth: number;
	gender: number;
	photolink: string;
	interests: string[];
	rating: number;
}

export enum MESSAGETYPE {
	message,
	sticker,
}

export interface IMessage {
	timecode: number;
	type: MESSAGETYPE;
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
	photolink: string;
	messages: IMessage[];
}

export enum COMPLAINTTYPE {
	message = "message",
	profile = "profile",
}

export enum COMPLAINTSTATUS {
	open = "open",
	inwork = "inwork",
	close = "close",
}

export interface IComplaint {
	userfrom: string;
	userto: string;
	timecode: number;
	type: COMPLAINTTYPE;
	subject: string;
	discription: string;
	dck: string;
	cash: number;
	status: COMPLAINTSTATUS;
	complmessage: IMessage;
}

export interface IModalDialog {
	enabled: boolean;
	dialog: IDialog;
}

export interface IPhoto {
	photomain: number;
	photolink: string[];
}
