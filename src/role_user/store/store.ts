import { configureStore } from "@reduxjs/toolkit";

import {
	modalAddDeleteStickerpackReducer,
	modalComplaintReducer,
	modalReviewStickerpackReducer,
} from "./redusers/modal";
import { myVaporsReducer } from "./redusers/vapor";
import { filtersUserReducer } from "./redusers/filters";
import { complaintReducer, complaintsReducer } from "./redusers/complaints";
import { userProfileReducer } from "./redusers/profile";

export const store = configureStore({
	reducer: {
		userProfile: userProfileReducer,
		modalReviewStickerpack: modalReviewStickerpackReducer,
		modalAddDeleteStickerpack: modalAddDeleteStickerpackReducer,
		myVapors: myVaporsReducer,
		filtersUser: filtersUserReducer,
		complaints: complaintsReducer,
		complaint: complaintReducer,
		modalComplaint: modalComplaintReducer,
	},
});
