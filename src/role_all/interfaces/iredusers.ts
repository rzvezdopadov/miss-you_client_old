export interface IActionReducer {
	type: string;
	payload: any;
}

export interface IStateModalMessage {
	enabled: boolean;
	text: string;
}

export interface IStatePhotoDelete {
	enabled: boolean;
	photoPos: number;
}
