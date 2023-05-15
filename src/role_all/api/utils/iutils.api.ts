import { IQueryAnswerError } from "../iquerys.api";

export interface IQueryAnswerCaptcha {
	dataCaptcha: TexImageSource;
	errorCaptcha: IQueryAnswerError;
	loadedCaptcha: boolean;
	querySendCaptcha(): void;
}
