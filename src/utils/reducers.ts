import { createReducer } from "@reduxjs/toolkit";
import {
	arr_age,
	arr_genderVapor,
	arr_growth,
	arr_location,
	arr_signZodiac,
	arr_weight,
} from "../arrdata/profiles";
import {
	IDialog,
	IFilterUsers,
	IProfile,
	IProfileShort,
} from "../interfaces/iprofiles";
import { IStateModalMessage, IStatePhotoDelete } from "../interfaces/iredusers";
import { getCookiesJWT } from "./cookie";

export const MOBILE_MENU = "MOBILE_MENU";

export const mobileMenuAction = (enabled: boolean) => ({
	type: MOBILE_MENU,
	payload: {
		enabled,
	},
});

interface IEnableParamState {
	enabled: boolean;
}

const initialStateMobileMenu: IEnableParamState = {
	enabled: false,
};

export const mobileMenuReducer = createReducer(initialStateMobileMenu, {
	[MOBILE_MENU]: (state: IEnableParamState, action: any) => {
		const { enabled } = action.payload;

		return { enabled };
	},
});
////////////////////////////////////////////////////////////////////////
export const SOCKET = "SOCKET";

export const socketAction = (enabled: boolean) => ({
	type: SOCKET,
	payload: {
		enabled,
	},
});

const initialStateSocket: IEnableParamState = {
	enabled: false,
};

export const socketReducer = createReducer(initialStateSocket, {
	[SOCKET]: (state: IEnableParamState, action: any) => {
		const { enabled } = action.payload;

		return { enabled };
	},
});
////////////////////////////////////////////////////////////////////////
export const MODAL_LOADING = "MODAL_LOADING";

export const modalLoadingAction = (enabled: boolean, text: string = "") => ({
	type: MODAL_LOADING,
	payload: {
		enabled,
		text,
	},
});

const initialStateModalLoading: IStateModalMessage = {
	enabled: false,
	text: "",
};

export const modalLoadingReducer = createReducer(initialStateModalLoading, {
	[MODAL_LOADING]: (state: IStateModalMessage, action: any) => {
		const { enabled, text } = action.payload;

		return { enabled, text };
	},
});
////////////////////////////////////////////////////////////////////////
export const MODAL_MESSAGE = "MODAL_MESSAGE";

export const modalMessageAction = (enabled: boolean, text: string) => ({
	type: MODAL_MESSAGE,
	payload: {
		enabled,
		text,
	},
});

const initialStateModalMessage: IStateModalMessage = {
	enabled: false,
	text: "",
};

export const modalMessageReducer = createReducer(initialStateModalMessage, {
	[MODAL_MESSAGE]: (state: IStateModalMessage, action: any) => {
		let { enabled, text } = action.payload;

		if (!enabled) text = state.text;

		return { enabled, text };
	},
});
////////////////////////////////////////////////////////////////////////
export const MODAL_PHOTO_DELETE = "MODAL_PHOTO_DELETE";

export const modalPhotoDeleteAction = (enabled: boolean, photoPos: number) => ({
	type: MODAL_PHOTO_DELETE,
	payload: {
		enabled,
		photoPos,
	},
});

const initialStateModalPhotoDelete: IStatePhotoDelete = {
	enabled: false,
	photoPos: 0,
};

export const modalPhotoDeleteReducer = createReducer(
	initialStateModalPhotoDelete,
	{
		[MODAL_PHOTO_DELETE]: (state: IStatePhotoDelete, action: any) => {
			let { enabled, photoPos } = action.payload;

			if (!enabled) photoPos = state.photoPos;

			return { enabled, photoPos };
		},
	}
);
////////////////////////////////////////////////////////////////////////
export const JWT_TOKEN = "JWT_TOKEN";

export const jwtAction = (value: string) => ({
	type: JWT_TOKEN,
	payload: { value },
});

const initialStateJWT: string = getCookiesJWT();

export const jwtReducer = createReducer(initialStateJWT, {
	[JWT_TOKEN]: (state: string, action: any) => {
		return (state = action.payload.value);
	},
});
////////////////////////////////////////////////////////////////////////
export const MY_VAPORS = "MY_VAPORS";

export const myVaporsAction = (value: any) => ({
	type: MY_VAPORS,
	payload: value,
});

export const myVaporsReducer = createReducer("", {
	[MY_VAPORS]: (state: string, action: any) => {
		const myVapors = action.payload;

		return myVapors;
	},
});
////////////////////////////////////////////////////////////////////////
export const FILTERS_USER = "FILTERS_USER";

export const filtersUserAction = (filters: IFilterUsers) => ({
	type: FILTERS_USER,
	payload: filters,
});

const initialStateFiltersUser: IFilterUsers = {
	location: arr_location[0][0],
	agestart: arr_age[arr_age.length - 1],
	ageend: arr_age[0],
	growthstart: arr_growth[0],
	growthend: arr_growth[arr_growth.length - 1],
	weightstart: arr_weight[0],
	weightend: arr_weight[arr_weight.length - 1],
	signzodiac: arr_signZodiac.length - 1,
	gendervapor: arr_genderVapor.length - 1,
	religion: 0,
	smoke: 0,
	alcohol: 0,
	interests: [],
};

export const filtersUserReducer = createReducer(initialStateFiltersUser, {
	[FILTERS_USER]: (state: IFilterUsers, action: any) => {
		const filters = { ...action.payload };

		return filters;
	},
});
////////////////////////////////////////////////////////////////////////
export const USERS_PROFILES = "USERS_PROFILES";

export const usersProfilesAction = (profiles: Array<IProfileShort>) => ({
	type: USERS_PROFILES,
	payload: profiles,
});

const initialStateUsersProfiles: Array<IProfileShort> = [];

export const usersProfilesReducer = createReducer(initialStateUsersProfiles, {
	[USERS_PROFILES]: (state: Array<IProfileShort>, action: any) => {
		const arrayProfileShort = [...action.payload];

		return arrayProfileShort;
	},
});
////////////////////////////////////////////////////////////////////////
export const USER_PROFILE = "USER_PROFILE";

export const userProfileAction = (enabled: boolean, profile: IProfile) => ({
	type: USER_PROFILE,
	payload: {
		enabled,
		profile,
	},
});

interface IUserProfile {
	enabled: boolean;
	profile: IProfile;
}

export const initialStateUserProfile: IUserProfile = {
	enabled: false,
	profile: {
		id: 0,
		timecode: 0,
		name: "",
		latitude: 0,
		longitude: 0,
		location: "",
		likes: [],
		age: 0,
		birthday: 0,
		monthofbirth: 0,
		yearofbirth: 0,
		growth: 80,
		weight: 180,
		gender: 0,
		gendervapor: 0,
		photomain: 0,
		photolink: [],
		signzodiac: 0,
		education: 0,
		fieldofactivity: 0,
		maritalstatus: 0,
		children: 0,
		religion: 0,
		smoke: 0,
		alcohol: 0,
		discription: "",
		profit: 0,
		interests: [],
		ilikecharacter: [],
		idontlikecharacter: [],
		raiting: 0,
		filters: {
			location: arr_location[0][0],
			agestart: arr_age[arr_age.length - 1],
			ageend: arr_age[0],
			growthstart: arr_growth[0],
			growthend: arr_growth[arr_growth.length - 1],
			weightstart: arr_weight[0],
			weightend: arr_weight[arr_weight.length - 1],
			signzodiac: arr_signZodiac.length - 1,
			gendervapor: arr_genderVapor.length - 1,
			religion: 0,
			smoke: 0,
			alcohol: 0,
			interests: [],
		},
	},
};

export const userProfileReducer = createReducer(initialStateUserProfile, {
	[USER_PROFILE]: (state: IUserProfile, action: any) => {
		const { enabled, profile } = action.payload;

		return { enabled, profile };
	},
});
////////////////////////////////////////////////////////////////////////
export const USER_MYPROFILE = "USER_MYPROFILE";

export const userMyProfileAction = (profile: IProfile) => ({
	type: USER_MYPROFILE,
	payload: {
		profile,
	},
});

const initialStateUserMyProfile: IProfile = {
	id: 0,
	timecode: 0,
	name: "",
	latitude: 0,
	longitude: 0,
	location: "",
	likes: [],
	age: 0,
	birthday: 1,
	monthofbirth: 1,
	yearofbirth: 1970,
	growth: 80,
	weight: 180,
	gender: 0,
	gendervapor: 0,
	photomain: 0,
	photolink: [],
	signzodiac: 0,
	education: 0,
	fieldofactivity: 0,
	maritalstatus: 0,
	children: 0,
	religion: 0,
	smoke: 0,
	alcohol: 0,
	discription: "",
	profit: 0,
	interests: [],
	ilikecharacter: [],
	idontlikecharacter: [],
	raiting: 0,
	filters: {
		location: arr_location[0][0],
		agestart: arr_age[arr_age.length - 1],
		ageend: arr_age[0],
		growthstart: arr_growth[0],
		growthend: arr_growth[arr_growth.length - 1],
		weightstart: arr_weight[0],
		weightend: arr_weight[arr_weight.length - 1],
		signzodiac: arr_signZodiac.length - 1,
		gendervapor: arr_genderVapor.length - 1,
		religion: 0,
		smoke: 0,
		alcohol: 0,
		interests: [],
	},
};

export const userMyProfileReducer = createReducer(initialStateUserMyProfile, {
	[USER_MYPROFILE]: (state: IProfile, action: any) => {
		const { profile } = action.payload;

		return profile;
	},
});
////////////////////////////////////////////////////////////////////////
export const SETTING_PROFILE_CHARACTER = "SETTING_PROFILE_CHARACTER";

export const settingProfileCharactersAction = (enabled: boolean) => ({
	type: SETTING_PROFILE_CHARACTER,
	payload: {
		enabled,
	},
});

const initialStateSettingProfileCharacters: { enabled: boolean } = {
	enabled: false,
};

export const settingProfileCharactersReducer = createReducer(
	initialStateSettingProfileCharacters,
	{
		[SETTING_PROFILE_CHARACTER]: (
			state: { enabled: boolean },
			action: any
		) => {
			const { enabled } = action.payload;

			return { enabled };
		},
	}
);

////////////////////////////////////////////////////////////////////////
export const DIALOGS = "DIALOGS";

export const dialogsAction = (dialogs: Array<IDialog>) => ({
	type: DIALOGS,
	payload: {
		dialogs,
	},
});

const initialStateDialogs: Array<IDialog> = [];

export const dialogsReducer = createReducer(initialStateDialogs, {
	[DIALOGS]: (state: Array<IDialog>, action: any) => {
		const { dialogs } = action.payload;

		return dialogs;
	},
});
////////////////////////////////////////////////////////////////////////
export const DIALOG = "DIALOG";

export const dialogAction = (dialog: IDialog) => ({
	type: DIALOG,
	payload: {
		dialog,
	},
});

export const initialStateDialog: IDialog = {
	timecode: 0,
	userId: 0,
	name: "",
	age: 0,
	photomain: 0,
	photolink: [],
	messages: [],
};

export const dialogReducer = createReducer(initialStateDialog, {
	[DIALOG]: (state: IDialog, action: any) => {
		const { dialog } = action.payload;

		return dialog;
	},
});
////////////////////////////////////////////////////////////////////////
export const MODAL_DIALOG = "MODAL_DIALOG";

export const modalDialogAction = (enabled: boolean) => ({
	type: MODAL_DIALOG,
	payload: {
		enabled,
	},
});

export const modalDialogReducer = createReducer(false, {
	[MODAL_DIALOG]: (state: boolean, action: any) => {
		const modalDialog = action.payload.enabled;

		return modalDialog;
	},
});
////////////////////////////////////////////////////////////////////////
export const MODAL_PHOTO_EDITOR = "MODAL_PHOTO_EDITOR";

export const modalPhotoEditorAction = (enabled: boolean) => ({
	type: MODAL_PHOTO_EDITOR,
	payload: {
		enabled,
	},
});

export const modalPhotoEditorReducer = createReducer(false, {
	[MODAL_PHOTO_EDITOR]: (state: boolean, action: any) => {
		const modalPhotoEditor = action.payload.enabled;

		return modalPhotoEditor;
	},
});
////////////////////////////////////////////////////////////////////////
export const DIALOG_USER_ID = "DIALOG_USER_ID";

export const dialogUserIdAction = (dialogUserId: number) => ({
	type: DIALOG_USER_ID,
	payload: dialogUserId,
});

export const dialogUserIdReducer = createReducer(0, {
	[DIALOG_USER_ID]: (state: number, action: any) => {
		const dialogUserId = action.payload;

		return dialogUserId;
	},
});
////////////////////////////////////////////////////////////////////////
export const MESSAGE_FOR_USER = "MESSAGE_FOR_USER";

export const messageForUserAction = (value: string) => ({
	type: MESSAGE_FOR_USER,
	payload: { value },
});

const initialStateMessageForUser: string = "";

export const messageForUserReducer = createReducer(initialStateMessageForUser, {
	[MESSAGE_FOR_USER]: (state: string, action: any) => {
		return (state = action.payload.value);
	},
});
