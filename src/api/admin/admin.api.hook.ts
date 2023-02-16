import { IAdminBanned } from "../../interfaces/iadmin";
import { IMessage, IProfile } from "../../interfaces/iprofiles";
import { IQueryAnswerError, IQueryAnswerMessageData } from "../iquerys.api";
import { useQueryGet, useQueryPut } from "../querys.api.hook";
import {
	IQueryGetAdminProfiles,
	IQueryAnswerGetAdminProfile,
	IQueryAnswerGetAdminProfiles,
	IQueryGetAdminProfile,
	IQuerySetAdminRating,
	IQueryAnswerSetAdminRating,
	IQuerySetAdminCash,
	IQueryAnswerSetAdminCash,
	IQueryAnswerBanned,
} from "./iadmin.api";

/* API Query to server */

/* Get profiles for admin
    - filters - filters by which to search in the database, 
    if this field is left blank, then all users will be sent; 
    - startCount - user position to start;
    - amount - number of users in response;
*/
export function useQueryGetAdminProfiles() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetAdminProfiles = async (
		dataQuery: IQueryGetAdminProfiles
	) => {
		querySend("/api/admin/profiles", dataQuery, true);
	};

	const dataNew = data as Array<IProfile>;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerGetAdminProfiles = {
		dataGetAdminProfiles: dataNew,
		errorGetAdminProfiles: errorNew,
		loadedGetAdminProfiles: loaded,
		querySendGetAdminProfiles,
	};

	return queryAnswer;
}

/* Get profile for admin
    - id = * - profile 
*/
export function useQueryGetAdminProfile() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetAdminProfile = async (
		dataQuery: IQueryGetAdminProfile
	) => {
		querySend("/api/admin/profile", dataQuery, true);
	};

	const dataNew = data as IProfile;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerGetAdminProfile = {
		dataGetAdminProfile: dataNew,
		errorGetAdminProfile: errorNew,
		loadedGetAdminProfile: loaded,
		querySendGetAdminProfile,
	};

	return queryAnswer;
}

export function useQuerySetAdminRating() {
	const { data, error, loaded, querySend } = useQueryPut();

	const querySendSetAdminRating = async (dataQuery: IQuerySetAdminRating) => {
		querySend("/api/admin/rating", dataQuery, true);
	};

	const dataNew = data as IProfile;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerSetAdminRating = {
		dataSetAdminRating: dataNew,
		errorSetAdminRating: errorNew,
		loadedSetAdminRating: loaded,
		querySendSetAdminRating,
	};

	return queryAnswer;
}

export function useQuerySetAdminCash() {
	const { data, error, loaded, querySend } = useQueryPut();

	const querySendSetAdminCash = async (dataQuery: IQuerySetAdminCash) => {
		querySend("/api/admin/cash", dataQuery, true);
	};

	const dataNew = data as IProfile;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerSetAdminCash = {
		dataSetAdminCash: dataNew,
		errorSetAdminCash: errorNew,
		loadedSetAdminCash: loaded,
		querySendSetAdminCash,
	};

	return queryAnswer;
}

export function useQuerySetAdminBanned() {
	const { data, error, loaded, querySend } = useQueryPut();

	const querySendSetAdminBanned = async (dataQuery: IAdminBanned) => {
		querySend("/api/admin/banned", dataQuery, true);
	};

	const dataNew = data as IQueryAnswerMessageData;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerBanned = {
		dataSetAdminBanned: dataNew,
		errorSetAdminBanned: errorNew,
		loadedSetAdminBanned: loaded,
		querySendSetAdminBanned,
	};

	return queryAnswer;
}
