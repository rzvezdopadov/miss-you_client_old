import { IProfile } from "../../interfaces/iprofiles";
import { IQueryAnswerError } from "../iquerys.api";
import { useQueryGet } from "../querys.api.hook";
import {
	IQueryGetAdminProfiles,
	IQueryAnswerGetAdminProfile,
	IQueryAnswerGetAdminProfiles,
	IQueryGetAdminProfile,
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
