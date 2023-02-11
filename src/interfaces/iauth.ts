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

export interface IChangePass {
	passwordnow: string;
	passwordnew: string;
	captcha: string;
}
