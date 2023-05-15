/* API Query to server */

import {
	IProfile,
	IProfileShort,
} from "../../../role_all/interfaces/iprofiles";
import { IQueryAnswerError } from "../../../role_all/api/iquerys.api";
import { useQueryGet } from "../../../role_all/api/querys.api.hook";
import {
	IQueryAnswerGetProfile,
	IQueryAnswerGetProfiles,
	IQueryGetProfile,
	IQueryGetProfiles,
} from "./iprofile.api";

/* Get profiles for admin
    - filters - filters by which to search in the database, 
    if this field is left blank, then all users will be sent; 
    - startCount - user position to start;
    - amount - number of users in response;
*/
export function useQueryGetProfiles() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetProfiles = async (dataQuery: IQueryGetProfiles) => {
		querySend("/api/admin/profiles", dataQuery, true);
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

/* Get profile for admin
    - id = * - profile 
*/
export function useQueryGetProfile() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetProfile = async (dataQuery: IQueryGetProfile) => {
		querySend("/api/admin/profile", dataQuery, true);
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
