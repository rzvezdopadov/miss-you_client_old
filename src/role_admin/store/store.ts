import { configureStore } from "@reduxjs/toolkit";
import {
	modalBannedReducer,
	modalChangeCashReducer,
	modalChangeRatingReducer,
} from "./redusers/modal";
import { userFiltersReducer } from "./redusers/filters";
import { userProfileReducer } from "./redusers/profile";

export const store = configureStore({
	reducer: {
		userProfile: userProfileReducer,
		userFilters: userFiltersReducer,
		modalChangeRating: modalChangeRatingReducer,
		modalChangeCash: modalChangeCashReducer,
		modalBanned: modalBannedReducer,
	},
});
