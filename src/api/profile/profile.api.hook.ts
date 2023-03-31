/* API Query to server */

import { IProfile, IProfileShort } from "../../interfaces/iprofiles";
import { IQueryAnswerError } from "../iquerys.api";
import { useQueryPut, useQueryGet, useQueryDelete } from "../querys.api.hook";
import {
	IQuerySetProfile,
	IQueryAnswerSetProfile,
	IQueryGetProfile,
	IQueryAnswerGetProfile,
	IQueryAnswerGetProfiles,
	IQueryAnswerGetProfilesForLikes,
	IQueryGetProfiles,
	IQueryAnswerGetProfilesForFavorite,
	IQueryAnswerDeleteAcc,
	IQueryAnswerDeleteAccCancel,
} from "./iprofile.api";

/* Set profile 
    - profile - modified user profile  
*/
export function useQuerySetProfile() {
	const { data, error, loaded, querySend } = useQueryPut();

	const querySendSetProfile = async (dataQuery: IQuerySetProfile) => {
		querySend("/api/profile", dataQuery, true);
	};

	const dataNew = data as IProfile;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerSetProfile = {
		dataSetProfile: dataNew,
		errorSetProfile: errorNew,
		loadedSetProfile: loaded,
		querySendSetProfile,
	};

	return queryAnswer;
}

/* Get profile 
    - id = 0 - get our profile, * - other profiles 
*/
export function useQueryGetProfile() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetProfile = async (dataQuery: IQueryGetProfile) => {
		querySend("/api/profile", dataQuery, true);
	};

	const dataNew = data as IProfile;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerGetProfile = {
		dataGetProfile: dataNew,
		errorGetProfile: errorNew,
		loadedGetProfile: loaded,
		querySendGetProfile,
	};

	return queryAnswer;
}

/* Get profiles
    - filters - filters by which to search in the database;
    - startCount - user position to start;
    - amount - number of users in response;
*/
export function useQueryGetProfiles() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetProfiles = async (dataQuery: IQueryGetProfiles) => {
		querySend("/api/profilesshort", dataQuery, true);
	};

	const dataNew = data as IProfileShort[];
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerGetProfiles = {
		dataGetProfiles: dataNew,
		errorGetProfiles: errorNew,
		loadedGetProfiles: loaded,
		querySendGetProfiles,
	};

	return queryAnswer;
}

/* Get profiles for likes
    - filters - filters by which to search in the database;
    - startCount - user position to start;
    - amount - number of users in response;
*/
export function useQueryGetProfilesForLikes() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetProfilesForLikes = async (
		dataQuery: IQueryGetProfiles
	) => {
		querySend("/api/profilesforlikes", dataQuery, true);
	};

	const dataNew = data as IProfileShort[];
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerGetProfilesForLikes = {
		dataGetProfilesForLikes: dataNew,
		errorGetProfilesForLikes: errorNew,
		loadedGetProfilesForLikes: loaded,
		querySendGetProfilesForLikes,
	};

	return queryAnswer;
}

/* Get profiles for favorite users
    - filters - filters by which to search in the database;
    - startCount - user position to start;
    - amount - number of users in response;
*/
export function useQueryGetProfilesForFavorite() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetProfilesForFavorite = async (
		dataQuery: IQueryGetProfiles
	) => {
		querySend("/api/profilesforfavoriteusers", dataQuery, true);
	};

	const dataNew = data as IProfileShort[];
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerGetProfilesForFavorite = {
		dataGetProfilesForFavorite: dataNew,
		errorGetProfilesForFavorite: errorNew,
		loadedGetProfilesForFavorite: loaded,
		querySendGetProfilesForFavorite,
	};

	return queryAnswer;
}

/* Query for delete profile
 */
export function useQuerySetDeleteAcc() {
	const { data, error, loaded, querySend } = useQueryDelete();

	const querySendDeleteAcc = async () => {
		querySend("/api/deleteacc", {}, true);
	};

	const dataNew = data as IProfile;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerDeleteAcc = {
		dataDeleteAcc: dataNew,
		errorDeleteAcc: errorNew,
		loadedDeleteAcc: loaded,
		querySendDeleteAcc,
	};

	return queryAnswer;
}

/* Query for cancel delete profile
 */
export function useQuerySetDeleteAccCancel() {
	const { data, error, loaded, querySend } = useQueryPut();

	const querySendDeleteAccCancel = async () => {
		querySend("/api/deleteacc", {}, true);
	};

	const dataNew = data as IProfile;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerDeleteAccCancel = {
		dataDeleteAccCancel: dataNew,
		errorDeleteAccCancel: errorNew,
		loadedDeleteAccCancel: loaded,
		querySendDeleteAccCancel,
	};

	return queryAnswer;
}
