//// @ts-nocheck
import * as React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { AppMain } from "./components/AppMain/AppMain";
import {
	closeMobileMenu,
	MobileMenu,
} from "./components/MobileMenu/MobileMenu";
import { ModalLoading } from "./components/ModalLoading/ModalLoading";
import { ModalMessage } from "./components/ModalMessage/ModalMessage";
import { store } from "./utils/store";
// import socketIO from "socket.io-client";

// const socket = socketIO();

function App() {
	const { mobileMenu } = store.getState();
	// const [isConnected, setIsConnected] = useState(socket.connected);
	// const [lastPong, setLastPong] = useState(null);

	// useEffect(() => {
	// 	socket.on("connect", () => {
	// 		setIsConnected(true);
	// 	});

	// 	socket.on("disconnect", () => {
	// 		setIsConnected(false);
	// 	});

	// 	socket.on("pong", () => {
	// 		const date = new Date().toISOString();
	// 		setLastPong(date as any);
	// 	});

	// 	return () => {
	// 		socket.off("connect");
	// 		socket.off("disconnect");
	// 		socket.off("pong");
	// 	};
	// }, []);

	// const sendPing = () => {
	// 	socket.emit("ping");
	// };

	useEffect(() => {
		document.title = "Сайт знакомств Miss-You";
	});

	return (
		<div
			className="App"
			onClick={(e) => {
				if (e.clientX > 100 && mobileMenu.enabled) closeMobileMenu(e);
			}}
		>
			{/* <div>
				<p>Connected: {"" + isConnected}</p>
				<p>Last pong: {lastPong || "-"}</p>
				<button onClick={sendPing}>Send ping</button>
			</div> */}
			<AppHeader />
			<AppMain />
			<MobileMenu />
			<ModalLoading />
			<ModalMessage />
		</div>
	);
}

export default App;
