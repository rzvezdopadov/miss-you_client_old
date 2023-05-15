/* API Query to server */

import {
	IProfile,
	IProfileShort,
} from "../../../role_all/interfaces/iprofiles";
import { IQueryAnswerError } from "../../../role_all/api/iquerys.api";
import {
	useQueryPut,
	useQueryGet,
	useQueryDelete,
} from "../../../role_all/api/querys.api.hook";
import {
	IQueryGetProfile,
	IQueryAnswerGetProfile,
	IQueryAnswerGetProfiles,
	IQueryAnswerGetProfilesForLikes,
	IQueryGetProfiles,
	IQueryAnswerGetProfilesForFavorite,
} from "./iprofile.api";

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
