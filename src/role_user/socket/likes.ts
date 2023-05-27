import { modalMessageOpen } from "../../role_all/components/modal/ModalMessage";
import { IGetLike } from "../../role_all/interfaces/isocket";
import { socketClient } from "../../role_all/socket/socket";
import { userMyProfileAction } from "../../role_all/store/redusers/profile";
import { storeAll } from "../../role_all/store/storeAll";
import { IQueryLike } from "../../role_user/api/like/ilike.api";
import { userProfileAction } from "../store/redusers/profile";
import { store } from "../store/store";

export const socketSetLikeCreate = () => {
	socketClient.on("set_like", (socket: Array<string>) => {
		const { userProfile } = store.getState();

		const newProfile = { ...userProfile.profile };

		newProfile.likes = socket;

		store.dispatch(
			userProfileAction({ enabled: true, profile: newProfile })
		);
	});
};

export const socketSetLikeDestroy = () => {
	socketClient.off("set_like");
};

export const socketGetLikeCreate = () => {
	socketClient.on("get_like", (socket: IGetLike) => {
		const { userMyProfile } = storeAll.getState();
		const userMyProfileNew = { ...userMyProfile };
		const likesNew = [...userMyProfile.likes];

		switch (socket.command) {
			case "add":
				likesNew.push(socket.userid);
				modalMessageOpen("Вас кто-то лайкнул =)");

				break;

			case "delete":
				const userLikePos = likesNew.findIndex(
					(value) => value === socket.userid
				);

				if (userLikePos !== -1) likesNew.splice(userLikePos, 1);

				break;

			default:
				break;
		}

		userMyProfileNew.likes = likesNew;

		store.dispatch(userMyProfileAction(userMyProfileNew));
	});
};

export const socketGetLikeDestroy = () => {
	socketClient.off("get_like");
};

export const setLike = () => {
	const { userProfile } = store.getState();

	const data: IQueryLike = {
		userid: userProfile.profile.userid,
	};

	socketClient.emit("set_like", data);
};
