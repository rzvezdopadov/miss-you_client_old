import { storeAll } from "../../role_all/store/storeAll";
import { userMyProfileAction } from "../../role_all/store/redusers/profile";
import { IQueryFavotiteUsers } from "../api/favoriteusers/ifavoriteusers.api";
import { socketClient } from "../../role_all/socket/socket";
import { IQueryBannedUsers } from "../api/bannedusers/ibannedusers.api";

export const socketSetFavoriteUsersCreate = () => {
	socketClient.on("set_favoriteusers", (socket: string[]) => {
		const { userMyProfile } = storeAll.getState();

		const newMyProfile = { ...userMyProfile };

		newMyProfile.favoriteusers = socket;

		storeAll.dispatch(userMyProfileAction(newMyProfile));
	});
};

export const socketSetFavoriteUsersDestroy = () => {
	socketClient.off("set_favoriteusers");
};

export const socketSetBannedUsersCreate = () => {
	socketClient.on("set_bannedusers", (socket: string[]) => {
		const { userMyProfile } = storeAll.getState();

		const newMyProfile = { ...userMyProfile };

		newMyProfile.bannedusers = socket;

		storeAll.dispatch(userMyProfileAction(newMyProfile));
	});
};

export const socketSetBannedUsersDestroy = () => {
	socketClient.off("set_bannedusers");
};

export const setFavoriteUser = () => {
	const { userProfile } = storeAll.getState();

	const data: IQueryFavotiteUsers = {
		userid: userProfile.profile.userid,
	};

	socketClient.emit("set_favoriteusers", data);
};

export const setBannedUser = () => {
	const { userProfile } = storeAll.getState();

	const data: IQueryBannedUsers = {
		userid: userProfile.profile.userid,
	};

	socketClient.emit("set_bannedusers", data);
};
