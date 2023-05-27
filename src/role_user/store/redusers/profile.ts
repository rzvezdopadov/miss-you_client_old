import { createAction, createReducer } from "@reduxjs/toolkit";
import { IUserProfile } from "../../interfaces/iredusers";
import { ACCTYPE } from "../../../role_all/interfaces/iprofiles";
import {
	initFilterUsers,
	initPaidProfile,
} from "../../../role_all/store/redusers/profile";

export const USER_PROFILE = "USER_PROFILE";

export const userProfileAction = createAction<IUserProfile>(USER_PROFILE);

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
