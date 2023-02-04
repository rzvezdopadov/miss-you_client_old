import { createReducer } from "@reduxjs/toolkit";
import { ACCTYPE, IProfile, IProfileShort } from "../../interfaces/iprofiles";
import {
	data_age,
	data_genderVapor,
	data_growth,
	data_signZodiac,
} from "../../data/profiles";

////////////////////////////////////////////////////////////////////////
export const USERS_PROFILES = "USERS_PROFILES";

export const usersProfilesAction = (profiles: Array<IProfileShort>) => ({
	type: USERS_PROFILES,
	payload: profiles,
});

const initialStateUsersProfiles: Array<IProfileShort> = [];

export const usersProfilesReducer = createReducer(initialStateUsersProfiles, {
	[USERS_PROFILES]: (state: Array<IProfileShort>, action: any) => {
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

export const initialStateUserProfile: IUserProfile = {
	enabled: false,
	profile: {
		userid: "",
		timecode: 0,
		name: "",
		latitude: 0,
		longitude: 0,
		location: "",
		likes: [],
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
		filters: {
			location: "",
			agestart: data_age[data_age.length - 1],
			ageend: data_age[0],
			growthstart: data_growth[0],
			growthend: data_growth[data_growth.length - 1],
			weight: 0,
			signzodiac: data_signZodiac.length - 1,
			gendervapor: data_genderVapor.length - 1,
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

export const initialStateUserMyProfile: IProfile = {
	userid: "",
	timecode: 0,
	name: "",
	latitude: 0,
	longitude: 0,
	location: "",
	likes: [],
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
	filters: {
		location: "",
		agestart: data_age[data_age.length - 1],
		ageend: data_age[0],
		growthstart: data_growth[0],
		growthend: data_growth[data_growth.length - 1],
		weight: 0,
		signzodiac: data_signZodiac.length - 1,
		gendervapor: data_genderVapor.length - 1,
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
