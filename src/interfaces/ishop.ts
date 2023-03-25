export enum messageType {
	message,
	sticker,
}

export interface IRate {
	idTariff: string;
	amountRate: number;
	price: number;
	discount: number;
}
