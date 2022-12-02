export interface IStateModalMessage {
	enabled: boolean;
	text: "";
}

export interface IStatePhotoDelete {
	enabled: boolean;
	photoPos: number;
}

export interface IActionReducer {
	type: string;
	payload: any;
}
