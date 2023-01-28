import * as React from "react";
import { useEffect } from "react";
import socketIO from "socket.io-client";
import { IDialog } from "../../../interfaces/iprofiles";
import {
	IQueryLike,
	IQuerySendMessage,
	IQuerySendSticker,
} from "../../../interfaces/iquery";
import { IGetLike, IGetMessage } from "../../../interfaces/isocket";
import {
	dialogAction,
	dialogsAction,
	socketAction,
	userMyProfileAction,
	userProfileAction,
} from "../../../utils/reducers";
import { store } from "../../../utils/store";
import { openModalMessage } from "../../Modal/ModalMessage/ModalMessage";

const socketClient = socketIO("http://192.168.1.11:8000/", {
	reconnection: true,
	timeout: 5000,
	transports: ["websocket"],
});

setInterval(() => {
	const { jwt, socket } = store.getState();
	if (jwt && socket) socketClient.emit("ping");
}, 5000);

export const sendMessage = (message: string) => {
	const { dialogUserId } = store.getState();

	const data: IQuerySendMessage = {
		userid: dialogUserId,
		message: message,
	};

	socketClient.emit("message", data);
};

export const sendSticker = (stickerpackid: string, stickerpos: number) => {
	const { dialogUserId } = store.getState();

	const data: IQuerySendSticker = {
		userid: dialogUserId,
		stickerpackid,
		stickerpos,
	};

	socketClient.emit("sticker", data);
};

export const setLike = () => {
	const { userProfile } = store.getState();

	const data: IQueryLike = {
		userid: userProfile.profile.userid,
	};

	socketClient.emit("set_like", data);
};

export const getJWT = () => {
	const { jwt } = store.getState();

	socketClient.emit("get_jwt", {
		jwt: jwt,
	});
};

export function Socket() {
	const setSocketConnect = (socketConnect: boolean) => {
		store.dispatch(socketAction(socketConnect));
	};

	useEffect(() => {
		socketClient.on("connect", () => {
			setSocketConnect(true);
		});
		socketClient.on("disconnect", () => {
			setSocketConnect(false);
		});
		socketClient.on("get_jwt", () => {
			getJWT();
		});
		socketClient.on("set_like", (socket: Array<string>) => {
			const { userProfile } = store.getState();

			const newProfile = { ...userProfile.profile };

			newProfile.likes = socket;

			store.dispatch(userProfileAction(true, newProfile));
		});

		socketClient.on("get_like", (socket: IGetLike) => {
			const { userMyProfile } = store.getState();

			const userMyProfileNew = { ...userMyProfile };
			const likesNew = [...userMyProfile.likes];

			switch (socket.command) {
				case "add":
					likesNew.push(socket.userid);
					openModalMessage("Вас кто-то лайкнул =)");

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

		socketClient.on("delete_jwt", () => {
			console.log("logout");
			// logout();
		});
		socketClient.on("message", (socket: IGetMessage) => {
			const { dialogs, dialog, dialogUserId } = store.getState();

			switch (socket.command) {
				case "add":
					if (socket.userid === dialog.userid) {
						const newDialog = { ...dialog };
						const newMessages = [...newDialog.messages];

						newMessages.push(socket.message);
						newDialog.messages = newMessages;

						store.dispatch(dialogAction(newDialog));
					}

					const newDialogs = [...dialogs];
					const dialogPos = newDialogs.findIndex(
						(value) => value.userid === socket.userid
					);

					if (dialogPos !== -1) {
						const newDialog = { ...newDialogs[dialogPos] };
						const newMessages = [...newDialogs[dialogPos].messages];

						newMessages.push(socket.message);
						newDialog.messages = newMessages;
						newDialogs[dialogPos] = newDialog;

						newDialogs.sort(
							(a, b) =>
								b.messages[b.messages.length - 1].timecode -
								a.messages[a.messages.length - 1].timecode
						);

						store.dispatch(dialogsAction(newDialogs));
					}

					break;
				default:
					break;
			}

			if (!dialogUserId) openModalMessage("У вас новое сообщение =)");
		});
		socketClient.on("dialog", (socket: IDialog) => {
			const { dialogs, dialog } = store.getState();
			if (dialog.userid === socket.userid) {
				store.dispatch(dialogAction(socket));
			}

			const newDialogs = [...dialogs];
			const dialogPos = newDialogs.findIndex(
				(value) => value.userid === socket.userid
			);

			if (dialogPos !== -1) {
				newDialogs[dialogPos] = socket;
			} else {
				newDialogs.push(socket);
			}

			store.dispatch(dialogsAction(newDialogs));
		});

		return () => {
			socketClient.off("connect");
			socketClient.off("disconnect");
			socketClient.off("get_jwt");
			socketClient.off("delete_jwt");
			socketClient.off("get_like");
			socketClient.off("set_like");
			socketClient.off("message");
			socketClient.off("dialog");
		};
	}, []);

	return <></>;
}
