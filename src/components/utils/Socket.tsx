import * as React from "react";
import { useEffect } from "react";
import socketIO from "socket.io-client";
import { IDialog } from "../../interfaces/iprofiles";
import { IGetLike, IGetMessage } from "../../interfaces/isocket";

import { store } from "../../store/store";
import { logout } from "../../helpers/logout";
import { socketAction } from "../../store/redusers/socket";
import {
	userMyProfileAction,
	userProfileAction,
} from "../../store/redusers/profile";
import { dialogAction, dialogsAction } from "../../store/redusers/dialog";
import { modalMessageOpen } from "../modal/ModalMessage";
import { IQuerySendMessage } from "../../api/dialog/idialog.api";
import { IQuerySendSticker } from "../../api/sticker/isticker.api";
import { IQueryLike } from "../../api/like/ilike.api";
import {
	modalDialogAction,
	modalMessageAction,
} from "../../store/redusers/modal";
import { IQueryAnswerMessageData } from "../../api/iquerys.api";

const socketClient = socketIO(`${window.location.hostname}:8000/`, {
	reconnection: true,
	timeout: 5000,
	transports: ["websocket"],
});

setInterval(() => {
	const { jwt, socket } = store.getState();
	if (jwt && socket) socketClient.emit("ping");
}, 5000);

const notMessageID = `Чтобы отправить сообщение выберите пользователя!`;

export const sendMessage = (message: string) => {
	const { modalDialog, dialog } = store.getState();

	const userid = modalDialog.dialog.userid || dialog.userid || "";

	if (!userid) {
		store.dispatch(modalMessageAction(true, notMessageID));

		return;
	}

	const data: IQuerySendMessage = {
		userid: userid,
		message: message,
	};

	socketClient.emit("message", data);
};

export const sendSticker = (stickerpackid: string, stickerpos: number) => {
	const { modalDialog, dialog } = store.getState();

	const userid = modalDialog.dialog.userid || dialog.userid || "";

	if (!userid) {
		store.dispatch(modalMessageAction(true, notMessageID));

		return;
	}

	const data: IQuerySendSticker = {
		userid: userid,
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

		socketClient.on("delete_jwt", () => {
			console.log("logout");
			logout();
		});
		socketClient.on("modalmessage", (socket: IQueryAnswerMessageData) => {
			modalMessageOpen(socket.message);
		});
		socketClient.on("message", (socket: IGetMessage) => {
			const { dialogs, dialog, modalDialog } = store.getState();

			switch (socket.command) {
				case "add":
					if (
						socket.userid1 === dialog.userid ||
						socket.userid2 === dialog.userid
					) {
						const newDialog = { ...dialog };
						const newMessages = [...newDialog.messages];

						newMessages.push(socket.message);
						newMessages.sort((a, b) => a.timecode - b.timecode);
						newDialog.messages = newMessages;

						store.dispatch(dialogAction(newDialog));
					}

					if (
						socket.userid1 === modalDialog.dialog.userid ||
						socket.userid2 === modalDialog.dialog.userid
					) {
						const newModalDialog = { ...modalDialog.dialog };
						const newMessages = [...newModalDialog.messages];

						newMessages.push(socket.message);
						newMessages.sort((a, b) => a.timecode - b.timecode);
						newModalDialog.messages = newMessages;

						store.dispatch(
							modalDialogAction({
								enabled: true,
								dialog: newModalDialog,
							})
						);
					}

					const newDialogs = [...dialogs];
					const dialogPos = newDialogs.findIndex(
						(value) =>
							value.userid === socket.userid1 ||
							value.userid === socket.userid2
					);

					if (dialogPos !== -1) {
						const newDialog = { ...newDialogs[dialogPos] };
						const newMessages = [...newDialogs[dialogPos].messages];

						newMessages.push(socket.message);
						newMessages.sort((a, b) => a.timecode - b.timecode);
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

			const { userMyProfile } = store.getState();
			if (socket.message.userid !== userMyProfile.userid)
				modalMessageOpen("У вас новое сообщение =)");
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

			newDialogs.sort(
				(a, b) =>
					b.messages[b.messages.length - 1].timecode -
					a.messages[a.messages.length - 1].timecode
			);

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
			socketClient.off("modalmessage");
			socketClient.close();
		};
	}, []);

	return <></>;
}
