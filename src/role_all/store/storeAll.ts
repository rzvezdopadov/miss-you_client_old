import { configureStore } from "@reduxjs/toolkit";
import { jwtReducer, registrationReducer } from "./redusers/auth";
import { mobileMenuReducer } from "./redusers/menu";
import { dialogReducer, dialogsReducer } from "./redusers/dialog";
import { stickerpacksReducer } from "./redusers/stickerpacks";
import {
	settingProfileCharactersReducer,
	userMyProfileReducer,
	userProfileReducer,
	usersProfilesReducer,
} from "./redusers/profile";
import {
	modalDialogReducer,
	modalLoadingReducer,
	modalMessageReducer,
	modalPhotoDeleteReducer,
	modalPhotoEditorReducer,
} from "./redusers/modal";
import { socketReducer } from "./redusers/socket";
import { townsReducer } from "./redusers/towns";

export const storeAll = configureStore({
	reducer: {
		jwt: jwtReducer,
		registration: registrationReducer,
		towns: townsReducer,
		mobileMenu: mobileMenuReducer,
		modalLoading: modalLoadingReducer,
		modalMessage: modalMessageReducer,
		modalPhotoDelete: modalPhotoDeleteReducer,
		modalDialog: modalDialogReducer,
		modalPhotoEditor: modalPhotoEditorReducer,
		usersProfiles: usersProfilesReducer,
		userProfile: userProfileReducer,
		userMyProfile: userMyProfileReducer,
		settingProfileCharacters: settingProfileCharactersReducer,
		dialogs: dialogsReducer,
		dialog: dialogReducer,
		stickerpacks: stickerpacksReducer,
		socket: socketReducer,
	},
});
