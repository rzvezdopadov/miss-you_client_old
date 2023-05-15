import socketIO from "socket.io-client";
import { storeAll } from "../store/storeAll";

export const socketClient = socketIO(`${window.location.hostname}:8000/`, {
	reconnection: true,
	timeout: 5000,
	transports: ["websocket"],
});

setInterval(() => {
	const { jwt, socket } = storeAll.getState();

	if (jwt && socket) socketClient.emit("ping");
}, 5000);
