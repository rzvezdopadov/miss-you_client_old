import {
	IDialog,
	IPhoto,
	IProfile,
	IProfileShort,
	IRegistration,
} from "../interfaces/iprofiles";
import {
	ILogin,
	IQueryDialog,
	IQueryGetProfiles,
	IQueryGetProfilesForLikes,
	IQueryLike,
	IQueryPhoto,
	IQuerySendMessage,
	IQuerySetProfile,
	IQueryUploadPhoto,
} from "../interfaces/iquery";
import {
	IQueryAnswerCheckPhoto,
	IQueryAnswerDeletePhoto,
	IQueryAnswerDialog,
	IQueryAnswerDialogs,
	IQueryAnswerError,
	IQueryAnswerGetProfile,
	IQueryAnswerLike,
	IQueryAnswerLogin,
	IQueryAnswerLoginData,
	IQueryAnswerMessage,
	IQueryAnswerMessageData,
	IQueryAnswerProfiles,
	IQueryAnswerProfilesForLikes,
	IQueryAnswerProfileShort,
	IQueryAnswerRegistration,
	IQueryAnswerRegistrationData,
	IQueryAnswerSetProfile,
	IQueryAnswerUploadPhoto,
} from "../interfaces/iqueryanswer";
import {
	useQueryDelete,
	useQueryGet,
	useQueryPost,
	useQueryPut,
} from "./querys.hook";

/* API Query to server */

/* Registration new user */
export function useQueryRegistration() {
	const { data, error, loaded, querySend } = useQueryPost();

	const querySendRegistration = async (dataQuery: IRegistration) => {
		querySend("/api/registration", dataQuery, true);
	};

	const dataNew = data as IQueryAnswerRegistrationData;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerRegistration = {
		data: dataNew,
		error: errorNew,
		loaded,
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
		data: dataNew,
		error: errorNew,
		loaded,
		querySendLogin,
	};

	return queryAnswer;
}

/* Enter user */
export function useQueryLike() {
	const { data, error, loaded, querySend } = useQueryPut();

	const querySendLike = async (dataQuery: IQueryLike) => {
		querySend("/api/like", dataQuery, false);
	};

	const dataNew = data as IQueryAnswerMessageData;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerLike = {
		data: dataNew,
		error: errorNew,
		loaded,
		querySendLike,
	};

	return queryAnswer;
}

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
		data: dataNew,
		error: errorNew,
		loaded,
		querySendSetProfile,
	};

	return queryAnswer;
}

/* Set profile short
    - profileShort - modified user profile  
*/
export function useQuerySetProfileShort() {
	const { data, error, loaded, querySend } = useQueryPut();

	const querySendSetProfileShort = async (dataQuery: IProfileShort) => {
		querySend("/api/profileshort", dataQuery, true);
	};

	const dataNew = data as IProfileShort;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerProfileShort = {
		data: dataNew,
		error: errorNew,
		loaded,
		querySendSetProfileShort,
	};

	return queryAnswer;
}

/* Get profile 
    - id = 0 - get our profile, * - other profiles 
*/
export function useQueryGetProfile() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetProfile = async (dataQuery: IProfileShort) => {
		querySend("/api/profile", dataQuery, true);
	};

	const dataNew = data as IProfile;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerGetProfile = {
		data: dataNew,
		error: errorNew,
		loaded,
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
		querySend("/api/profiles", dataQuery, true);
	};

	const dataNew = data as [IProfile];
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerProfiles = {
		data: dataNew,
		error: errorNew,
		loaded,
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

	const dataNew = data as [IProfile];
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerProfilesForLikes = {
		data: dataNew,
		error: errorNew,
		loaded,
		querySendGetProfilesForLikes,
	};

	return queryAnswer;
}

/* Get dialogs
 */
export function useQueryGetDialogs() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetDialogs = async () => {
		querySend("/api/dialogs", {}, true);
	};

	const dataNew = data as [IDialog];
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerDialogs = {
		data: dataNew,
		error: errorNew,
		loaded,
		querySendGetDialogs,
	};

	return queryAnswer;
}

/* Get dialog
    - * - id user
*/
export function useQueryGetDialog() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetDialog = async (dataQuery: IQueryDialog) => {
		querySend("/api/dialog", dataQuery, true);
	};

	const dataNew = data as IDialog;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerDialog = {
		data: dataNew,
		error: errorNew,
		loaded,
		querySendGetDialog,
	};

	return queryAnswer;
}

/* Set message
    - * - id user
*/
export function useQuerySendMessage() {
	const { data, error, loaded, querySend } = useQueryPut();

	const querySendMessage = async (dataQuery: IQuerySendMessage) => {
		querySend("/api/message", dataQuery, true);
	};

	const dataNew = data as IDialog;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerMessage = {
		data: dataNew,
		error: errorNew,
		loaded,
		querySendMessage,
	};

	return queryAnswer;
}

/* Delete photo
    - * - photoPos
*/
export function useQueryDeletePhoto() {
	const { data, error, loaded, querySend } = useQueryDelete();

	const queryDeletePhoto = async (dataQuery: IQueryPhoto) => {
		querySend("/api/photo", dataQuery, true);
	};

	const dataNew = data as IPhoto;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerDeletePhoto = {
		data: dataNew,
		error: errorNew,
		loaded,
		queryDeletePhoto,
	};

	return queryAnswer;
}

/* Check photo
    - * - photoPos
*/
export function useQueryCheckPhoto() {
	const { data, error, loaded, querySend } = useQueryPut();

	const queryCheckPhoto = async (dataQuery: IQueryPhoto) => {
		querySend("/api/photo", dataQuery, true);
	};

	const dataNew = data as IPhoto;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerCheckPhoto = {
		data: dataNew,
		error: errorNew,
		loaded,
		queryCheckPhoto,
	};

	return queryAnswer;
}

/* Upload photo
    - * - photoPos
*/
export function useQueryUploadPhoto() {
	const { data, error, loaded, querySend } = useQueryPost();

	const queryUploadPhoto = async (dataQuery: IQueryUploadPhoto) => {
		querySend("/api/photo", dataQuery, true, {
			headers: { "Content-Type": "multipart/form-data" },
		});
	};

	const dataNew = data as IPhoto;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerUploadPhoto = {
		data: dataNew,
		error: errorNew,
		loaded,
		queryUploadPhoto,
	};

	return queryAnswer;
}
