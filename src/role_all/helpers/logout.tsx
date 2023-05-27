import { getCookiesJWT } from "./cookie";
import { jwtAction } from "../store/redusers/auth";
import {
	initialStateUserMyProfile,
	userMyProfileAction,
} from "../store/redusers/profile";
import {
	dialogAction,
	dialogsAction,
	initialStateDialog,
	initialStateDialogs,
} from "../store/redusers/dialog";
import { storeAll } from "../store/storeAll";

export function logout() {
	const jwt = getCookiesJWT();

	document.cookie = `jwt=${jwt}; max-age=${-1}`;
	storeAll.dispatch(jwtAction(""));
	storeAll.dispatch(userMyProfileAction(initialStateUserMyProfile));
	storeAll.dispatch(dialogAction(initialStateDialog));
	storeAll.dispatch(dialogsAction(initialStateDialogs));
}
