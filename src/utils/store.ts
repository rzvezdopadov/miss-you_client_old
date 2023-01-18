import { configureStore } from "@reduxjs/toolkit";
import {
	jwtReducer,
	modalLoadingReducer,
	modalMessageReducer,
	myVaporsReducer,
	filtersUserReducer,
	usersProfilesReducer,
	userProfileReducer,
	userMyProfileReducer,
	settingProfileCharactersReducer,
	dialogsReducer,
	dialogReducer,
	modalDialogReducer,
	mobileMenuReducer,
	socketReducer,
	dialogUserIdReducer,
	messageForUserReducer,
	modalPhotoDeleteReducer,
	modalPhotoEditorReducer,
	registrationReducer,
	stickerpacksReducer,
} from "./reducers";

export const store = configureStore({
	reducer: {
		jwt: jwtReducer,
		mobileMenu: mobileMenuReducer,
		modalLoading: modalLoadingReducer,
		modalMessage: modalMessageReducer,
		modalPhotoDelete: modalPhotoDeleteReducer,
		myVapors: myVaporsReducer,
		filtersUser: filtersUserReducer,
		usersProfiles: usersProfilesReducer,
		userProfile: userProfileReducer,
		userMyProfile: userMyProfileReducer,
		registration: registrationReducer,
		settingProfileCharacters: settingProfileCharactersReducer,
		dialogs: dialogsReducer,
		dialog: dialogReducer,
		modalDialog: modalDialogReducer,
		modalPhotoEditor: modalPhotoEditorReducer,
		dialogUserId: dialogUserIdReducer,
		socket: socketReducer,
		messageForUser: messageForUserReducer,
		stickerpacks: stickerpacksReducer,
	},
});
