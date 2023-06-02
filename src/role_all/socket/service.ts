import { socketAction } from "../store/redusers/socket";
import { storeAll } from "../store/storeAll";
import { IQueryAnswerMessageData } from "../api/iquerys.api";
import { modalMessageOpen } from "../components/modal/ModalMessage";
import { socketClient } from "./socket";

const socketStatusSet = (socketConnect: boolean) => {
	storeAll.dispatch(socketAction(socketConnect));
};

export const socketStatusConnectCreate = () => {
	socketClient.on("connect", () => {
		socketStatusSet(true);
	});
};

export const socketStatusConnectDestroy = () => {
	socketClient.off("connect");
};

export const socketStatusDisconnectCreate = () => {
	socketClient.on("disconnect", () => {
		socketStatusSet(false);
	});
};

export const socketStatusDisconnectDestroy = () => {
	socketClient.off("disconnect");
};

export const socketModalMessageCreate = () => {
	socketClient.on("modalmsg", (socket: IQueryAnswerMessageData) => {
		modalMessageOpen(socket.msg);
	});
};

export const socketModalMessageDestroy = () => {
	socketClient.off("modalmsg");
};
