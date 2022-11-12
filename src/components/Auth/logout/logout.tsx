import { getCookiesJWT } from "../../../utils/cookie";
import { jwtAction } from "../../../utils/reducers";
import { store } from "../../../utils/store";

export function logout() {
	const jwt = getCookiesJWT();

	document.cookie = `jwt=${jwt}; max-age=${-1}`;
	store.dispatch(jwtAction(""));
}
