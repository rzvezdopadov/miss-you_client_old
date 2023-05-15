import { configureStore } from "@reduxjs/toolkit";
import {
	modalBannedReducer,
	modalChangeCashReducer,
	modalChangeRatingReducer,
} from "./redusers/modal";
import { userFiltersReducer } from "./redusers/filters";

export const store = configureStore({
	reducer: {
		userFilters: userFiltersReducer,
		modalChangeRating: modalChangeRatingReducer,
		modalChangeCash: modalChangeCashReducer,
		modalBanned: modalBannedReducer,
	},
});
