import {
	IRegistration,
	ILogin,
	IRecoveryPassword,
	IChangePass,
} from "../../interfaces/iauth";
import { IQueryAnswerMessageData, IQueryAnswerError } from "../iquerys.api";
import { useQueryPost, useQueryPut } from "../querys.api.hook";
import {
	IQueryAnswerRegistration,
	IQueryAnswerLoginData,
	IQueryAnswerLogin,
	IQueryAnswerRecoveryPass,
	IQueryAnswerChangePass,
} from "./iauth.api";

/* API Query to server */

/* Registration new user */
export function useQueryRegistration() {
	const { data, error, loaded, querySend } = useQueryPost();

	const querySendRegistration = async (dataQuery: IRegistration) => {
		querySend("/api/registration", dataQuery, true);
	};

	const dataNew = data as IQueryAnswerMessageData;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerRegistration = {
		dataRegistration: dataNew,
		errorRegistration: errorNew,
		loadedRegistration: loaded,
		querySendRegistration,
	};

	return queryAnswer;
}

/* Enter user */
export function useQueryLogin() {
	const { data, error, loaded, querySend } = useQueryPost();

	const querySendLogin = async (dataQuery: ILogin) => {
		querySend("/api/login", dataQuery, true);
	};

	const dataNew = data as IQueryAnswerLoginData;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerLogin = {
		dataLogin: dataNew,
		errorLogin: errorNew,
		loadedLogin: loaded,
		querySendLogin,
	};

	return queryAnswer;
}

/* Recovery password */
export function useQueryRecoveryPass() {
	const { data, error, loaded, querySend } = useQueryPost();

	const querySendRecoveryPass = async (dataQuery: IRecoveryPassword) => {
		querySend("/api/recoverypass", dataQuery, true);
	};

	const dataNew = data as IQueryAnswerMessageData;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerRecoveryPass = {
		dataRecoveryPass: dataNew,
		errorRecoveryPass: errorNew,
		loadedRecoveryPass: loaded,
		querySendRecoveryPass,
	};

	return queryAnswer;
}

/* Change password */
export function useQueryChangePass() {
	const { data, error, loaded, querySend } = useQueryPut();

	const querySendChangePass = async (dataQuery: IChangePass) => {
		querySend("/api/changepass", dataQuery, true);
	};

	const dataNew = data as IQueryAnswerMessageData;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerChangePass = {
		dataChangePass: dataNew,
		errorChangePass: errorNew,
		loadedChangePass: loaded,
		querySendChangePass,
	};

	return queryAnswer;
}
