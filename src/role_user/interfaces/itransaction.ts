export enum ITransUserFrom {
	system = "system",
	payment = "payment",
	admin = "admin",
}

export interface ITransaction {
	timecode: number;
	userfrom: ITransUserFrom;
	idtrans: string;
	cash: number;
	discription: string;
}
