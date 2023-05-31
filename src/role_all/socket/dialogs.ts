import { storeAll } from "../store/storeAll";
import { dialogAction, dialogsAction } from "../store/redusers/dialog";
import { modalDialogAction, modalMessageAction } from "../store/redusers/modal";
import { IGetMessage } from "../interfaces/isocket";
import { modalMessageOpen } from "../components/modal/ModalMessage";
import { IDialog } from "../interfaces/iprofiles";
import { IQuerySendMessage } from "../api/dialog/idialog.api";
import { socketClient } from "./socket";
import { IQuerySendSticker } from "../../role_user/api/shop/sticker/isticker.api";

export const socketMessageCreate = () => {
	socketClient.on("message", (socket: IGetMessage) => {
		const { dialogs, dialog, modalDialog } = storeAll.getState();

		switch (socket.command) {
			case "add":
				if (
					socket.id1 === dialog.userid ||
					socket.id2 === dialog.userid
				) {
					const newDialog = { ...dialog };
					const newMessages = [...newDialog.msgs];

					newMessages.push(socket.msg);
					newMessages.sort((a, b) => a.timecode - b.timecode);
					newDialog.msgs = newMessages;

					storeAll.dispatch(dialogAction(newDialog));
				}

				if (
					socket.id1 === modalDialog.dialog.userid ||
					socket.id2 === modalDialog.dialog.userid
				) {
					const newModalDialog = { ...modalDialog.dialog };
					const newMessages = [...newModalDialog.msgs];

					newMessages.push(socket.msg);
					newMessages.sort((a, b) => a.timecode - b.timecode);
					newModalDialog.msgs = newMessages;

					storeAll.dispatch(
						modalDialogAction({
							enabled: true,
							dialog: newModalDialog,
						})
					);
				}

				const newDialogs = [...dialogs];
				const dialogPos = newDialogs.findIndex(
					(value) =>
						value.userid === socket.id1 ||
						value.userid === socket.id2
				);

				if (dialogPos !== -1) {
					const newDialog = { ...newDialogs[dialogPos] };
					const newMessages = [...newDialogs[dialogPos].msgs];

					newMessages.push(socket.msg);
					newMessages.sort((a, b) => a.timecode - b.timecode);
					newDialog.msgs = newMessages;
					newDialogs[dialogPos] = newDialog;

					newDialogs.sort(
						(a, b) =>
							b.msgs[b.msgs.length - 1].timecode -
							a.msgs[a.msgs.length - 1].timecode
					);

					storeAll.dispatch(dialogsAction(newDialogs));
				}

				break;
			default:
				break;
		}

		const { userMyProfile } = storeAll.getState();
		if (socket.msg.id1 !== userMyProfile.userid)
			modalMessageOpen("У вас новое сообщение =)");
	});
};

export const socketMessageDestroy = () => {
	socketClient.off("message");
};

export const socketDialogCreate = () => {
	socketClient.on("dialog", (socket: IDialog) => {
		const { dialogs, dialog } = storeAll.getState();
		if (dialog.userid === socket.userid) {
			storeAll.dispatch(dialogAction(socket));
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
				b.msgs[b.msgs.length - 1].timecode -
				a.msgs[a.msgs.length - 1].timecode
		);

		storeAll.dispatch(dialogsAction(newDialogs));
	});
};

export const socketDialogDestroy = () => {
	socketClient.off("dialog");
};

const notMessageID = `Чтобы отправить сообщение выберите пользователя!`;

export const socketSendMessage = (msg: string) => {
	const { modalDialog, dialog } = storeAll.getState();

	const userid = modalDialog.dialog.userid || dialog.userid || "";

	if (!userid) {
		storeAll.dispatch(
			modalMessageAction({ enabled: true, text: notMessageID })
		);

		return;
	}

	const data: IQuerySendMessage = {
		userid: userid,
		msg: msg,
	};

	socketClient.emit("message", data);
};

export const sendSticker = (stickerpackid: string, stickerpos: number) => {
	const { modalDialog, dialog } = storeAll.getState();

	const userid = modalDialog.dialog.userid || dialog.userid || "";

	if (!userid) {
		storeAll.dispatch(
			modalMessageAction({ enabled: true, text: notMessageID })
		);

		return;
	}

	const data: IQuerySendSticker = {
		userid: userid,
		stickerpackid,
		stickerpos,
	};

	socketClient.emit("sticker", data);
};
