import { getCookiesJWT } from "./cookie";
import { store } from "../store/store";
import { jwtAction } from "../store/redusers/auth";
import {
	initialStateUserMyProfile,
	initialStateUserProfile,
	userMyProfileAction,
	userProfileAction,
} from "../store/redusers/profile";
import {
	dialogAction,
	dialogsAction,
	initialStateDialog,
	initialStateDialogs,
} from "../store/redusers/dialog";

export function logout() {
	const jwt = getCookiesJWT();

	document.cookie = `jwt=${jwt}; max-age=${-1}`;
	store.dispatch(jwtAction(""));
	store.dispatch(userMyProfileAction(initialStateUserMyProfile));
	store.dispatch(userProfileAction(false, initialStateUserProfile.profile));
	store.dispatch(dialogAction(initialStateDialog));
	store.dispatch(dialogsAction(initialStateDialogs));
}
