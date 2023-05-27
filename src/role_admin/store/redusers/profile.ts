import { createAction, createReducer } from "@reduxjs/toolkit";
import { IAdminUserProfile } from "../../interfaces/iredusers";
import { ACCTYPE } from "../../../role_all/interfaces/iprofiles";
import {
	initFilterUsers,
	initPaidProfile,
} from "../../../role_all/store/redusers/profile";

export const USER_PROFILE = "USER_PROFILE";

export const userProfileAction = createAction<IAdminUserProfile>(USER_PROFILE);

export const initialStateUserProfile: IAdminUserProfile = {
	enabled: false,
	profile: {
		userid: "",
		email: "",
		coordinates: { ipaddress: "", latitude: 0, longitude: 0 },
		registrationdate: 0,
		timecode: 0,
		name: "",
		location: "",
		phone: "",
		likes: [],
		favoriteusers: [],
		privateselections: [],
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
		goaldate: 0,
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
		filters: initFilterUsers,
		ilikecharacter: [],
		idontlikecharacter: [],
		stickerpacks: [],
		rating: 0,
		cash: 0,
		acctype: ACCTYPE.user,
		visit: [],
		paid: initPaidProfile,
		referral: "",
		deleteacc: 0,
	},
};

export const userProfileReducer = createReducer(
	initialStateUserProfile,
	(builder) => {
		builder.addCase(
			userProfileAction,
			(state: IAdminUserProfile, action: any) => {
				const { enabled, profile } = action.payload;

				return { enabled, profile };
			}
		);
	}
);

////////////////////////////////////////////////////////////////////////
