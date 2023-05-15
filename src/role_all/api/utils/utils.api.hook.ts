import { IQueryAnswerError } from "../iquerys.api";
import { useQueryGet } from "../querys.api.hook";
import { IQueryAnswerCaptcha } from "./iutils.api";

/* API Query to server */

/* Get captcha */
export function useQueryCaptcha() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendCaptcha = async () => {
		querySend("/api/captcha", {}, true);
	};

	const dataNew = data as TexImageSource;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerCaptcha = {
		dataCaptcha: dataNew,
		errorCaptcha: errorNew,
		loadedCaptcha: loaded,
		querySendCaptcha,
	};

	return queryAnswer;
}
