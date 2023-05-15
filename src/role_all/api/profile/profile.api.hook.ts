/* API Query to server */

import { IProfile } from "../../../role_all/interfaces/iprofiles";
import { IQueryAnswerError } from "../../../role_all/api/iquerys.api";
import {
	useQueryPut,
	useQueryDelete,
} from "../../../role_all/api/querys.api.hook";
import {
	IQuerySetProfile,
	IQueryAnswerSetProfile,
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
