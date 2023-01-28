export enum messageType {
	message,
	sticker,
}

export interface IRate {
	idRate: string;
	amountRate: number;
	price: number;
	discount: number;
}
