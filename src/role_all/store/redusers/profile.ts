import { createAction, createReducer } from "@reduxjs/toolkit";
import {
	ACCTYPE,
	IUserFilters,
	IPaid,
	IProfile,
	IProfileShort,
} from "../../interfaces/iprofiles";
import { data_age, data_genderVapor, data_growth } from "../../data/profiles";
import { IUserProfile } from "../../../role_user/interfaces/iredusers";

////////////////////////////////////////////////////////////////////////
export const USERS_PROFILES = "USERS_PROFILES";

export const usersProfilesAction =
	createAction<IProfileShort[]>(USERS_PROFILES);

const initialStateUsersProfiles: IProfileShort[] = [];

export const usersProfilesReducer = createReducer(
	initialStateUsersProfiles,
	(builder) => {
		builder.addCase(
			usersProfilesAction,
			(state: IProfileShort[], action: any) => {
				const dataProfileShort = [...action.payload];

				return dataProfileShort;
			}
		);
	}
);
////////////////////////////////////////////////////////////////////////
export const USER_PROFILE = "USER_PROFILE";

export const userProfileAction = createAction<IUserProfile>(USER_PROFILE);

const initFilterUsers: IUserFilters = {
	location: "",
	agestart: data_age[data_age.length - 1],
	ageend: data_age[0],
	growthstart: data_growth[0],
	growthend: data_growth[data_growth.length - 1],
	weight: 0,
	signzodiac: 0,
	gendervapor: data_genderVapor.length - 1,
	education: 0,
	fieldofactivity: 0,
	maritalstatus: 0,
	children: 0,
	religion: 0,
	smoke: 0,
	profit: 0,
	alcohol: 0,
	interests: [],
};

const initPaidProfile: IPaid = {
	messageswrite: {
		enabled: false,
		timecode: 0,
	},
	messagesread: {
		enabled: false,
		timecode: 0,
	},
	longfilters: {
		enabled: false,
		timecode: 0,
	},
	filtersvapors: {
		enabled: false,
		timecode: 0,
	},
	longfiltersvapors: {
		enabled: false,
		timecode: 0,
	},
	filtersfavoriteusers: {
		enabled: false,
		timecode: 0,
	},
	longfiltersfavoriteusers: {
		enabled: false,
		timecode: 0,
	},
	photofull: {
		enabled: false,
		timecode: 0,
	},
	photoload10: {
		enabled: false,
		timecode: 0,
	},
	photoload15: {
		enabled: false,
		timecode: 0,
	},
	photoload20: {
		enabled: false,
		timecode: 0,
	},
	photoload25: {
		enabled: false,
		timecode: 0,
	},
	photoload30: {
		enabled: false,
		timecode: 0,
	},
	interests20: {
		enabled: false,
		timecode: 0,
	},
	interests30: {
		enabled: false,
		timecode: 0,
	},
	historymessages20: {
		enabled: false,
		timecode: 0,
	},
	historymessages40: {
		enabled: false,
		timecode: 0,
	},
	historymessages60: {
		enabled: false,
		timecode: 0,
	},
	historymessages80: {
		enabled: false,
		timecode: 0,
	},
	historymessages100: {
		enabled: false,
		timecode: 0,
	},
	historymessages200: {
		enabled: false,
		timecode: 0,
	},
	historymessages300: {
		enabled: false,
		timecode: 0,
	},
};

export const initialStateUserProfile: IUserProfile = {
	enabled: false,
	profile: {
		userid: "",
		timecode: 0,
		name: "",
		location: "",
		likes: [],
		favoriteusers: [],
		bannedusers: [],
		presents: [],
		achivments: [],
		birthday: 0,
		monthofbirth: 0,
		yearofbirth: 0,
		growth: 80,
		weight: 0,
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
		rating: 0,
		stickerpacks: [],
		cash: 0,
		acctype: ACCTYPE.user,
		filters: initFilterUsers,
		paid: initPaidProfile,
		deleteacc: 0,
	},
};

export const userProfileReducer = createReducer(
	initialStateUserProfile,
	(builder) => {
		builder.addCase(
			userProfileAction,
			(state: IUserProfile, action: any) => {
				const { enabled, profile } = action.payload;

				return { enabled, profile };
			}
		);
	}
);

////////////////////////////////////////////////////////////////////////
export const USER_MYPROFILE = "USER_MYPROFILE";

export const userMyProfileAction = createAction<IProfile>(USER_MYPROFILE);

export const initialStateUserMyProfile: IProfile = {
	userid: "",
	timecode: 0,
	name: "",
	location: "",
	likes: [],
	favoriteusers: [],
	bannedusers: [],
	presents: [],
	achivments: [],
	birthday: 1,
	monthofbirth: 1,
	yearofbirth: 1970,
	growth: 80,
	weight: 0,
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
	rating: 0,
	stickerpacks: [],
	cash: 0,
	acctype: ACCTYPE.user,
	filters: initFilterUsers,
	paid: initPaidProfile,
	deleteacc: 0,
};

export const userMyProfileReducer = createReducer(
	initialStateUserMyProfile,
	(builder) => {
		builder.addCase(userMyProfileAction, (state: IProfile, action: any) => {
			const profile = { ...action.payload };

			return profile;
		});
	}
);

////////////////////////////////////////////////////////////////////////
export const SETTING_PROFILE_CHARACTER = "SETTING_PROFILE_CHARACTER";

export const settingProfileCharactersAction = createAction<boolean>(
	SETTING_PROFILE_CHARACTER
);

const initialStateSettingProfileCharacters: boolean = false;

export const settingProfileCharactersReducer = createReducer(
	initialStateSettingProfileCharacters,
	(builder) => {
		builder.addCase(
			settingProfileCharactersAction,
			(state: boolean, action: any) => {
				return action.payload;
			}
		);
	}
);
