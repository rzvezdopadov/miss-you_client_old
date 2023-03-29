/* API Query to server */

import { IProfile, IProfileShort } from "../../interfaces/iprofiles";
import { IQueryAnswerError } from "../iquerys.api";
import { useQueryPut, useQueryGet } from "../querys.api.hook";
import {
	IQuerySetProfile,
	IQueryAnswerSetProfile,
	IQueryGetProfile,
	IQueryAnswerGetProfile,
	IQueryAnswerGetProfiles,
	IQueryGetProfilesForLikes,
	IQueryAnswerGetProfilesForLikes,
	IQueryGetProfiles,
	IQueryGetProfilesForFavorite,
	IQueryAnswerGetProfilesForFavorite,
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
    - filters - filters by which to search in the database, 
    if this field is left blank, then all users will be sent; 
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
    - startCount - user position to start;
    - amount - number of users in response;
*/
export function useQueryGetProfilesForLikes() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetProfilesForLikes = async (
		dataQuery: IQueryGetProfilesForLikes
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

/* Get profiles for likes
    - startCount - user position to start;
    - amount - number of users in response;
*/
export function useQueryGetProfilesForFavorite() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetProfilesForFavorite = async (
		dataQuery: IQueryGetProfilesForFavorite
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
