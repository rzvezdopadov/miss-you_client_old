import { storeAll } from "../store/storeAll";
import { logout } from "../helpers/logout";
import { socketClient } from "./socket";

export const getJWT = () => {
	const { jwt } = storeAll.getState();

	socketClient.emit("get_jwt", {
		jwt: jwt,
	});
};

export const socketGetJWTCreate = () => {
	socketClient.on("get_jwt", () => {
		getJWT();
	});
};

export const socketGetJWTDestroy = () => {
	socketClient.off("get_jwt");
};

export const socketDeleteJWTCreate = () => {
	socketClient.on("delete_jwt", () => {
		console.log("logout");
		logout();
	});
};

export const socketDeleteJWTDestroy = () => {
	socketClient.off("delete_jwt");
};
