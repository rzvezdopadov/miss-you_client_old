import { createReducer } from "@reduxjs/toolkit";
import {
	ACCTYPE,
	IFilterUsers,
	IPaid,
	IProfile,
	IProfileShort,
} from "../../interfaces/iprofiles";
import { data_age, data_genderVapor, data_growth } from "../../data/profiles";

////////////////////////////////////////////////////////////////////////
export const USERS_PROFILES = "USERS_PROFILES";

export const usersProfilesAction = (profiles: IProfileShort[]) => ({
	type: USERS_PROFILES,
	payload: profiles,
});

const initialStateUsersProfiles: IProfileShort[] = [];

export const usersProfilesReducer = createReducer(initialStateUsersProfiles, {
	[USERS_PROFILES]: (state: IProfileShort[], action: any) => {
		const dataayProfileShort = [...action.payload];

		return dataayProfileShort;
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

const initFilterUsers: IFilterUsers = {
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

export const initialStateUserMyProfile: IProfile = {
	userid: "",
	timecode: 0,
	name: "",
	location: "",
	likes: [],
	favoriteusers: [],
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
