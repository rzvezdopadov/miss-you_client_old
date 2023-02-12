//// @ts-nocheck
import * as React from "react";
import { useEffect } from "react";
import "./App.css";
import { AppHeader } from "./components/sections/AppHeader";
import { AppMain } from "./components/sections/AppMain";
import { closeMobileMenu, MobileMenu } from "./components/sections/MobileMenu";
import { ModalLoading } from "./components/modal/ModalLoading";
import { ModalMessage } from "./components/modal/ModalMessage";
import { store } from "./store/store";
import { getJWT, Socket } from "./components/utils/Socket";
import { Holiday } from "./components/additions/Holiday";

function App() {
	const { jwt, mobileMenu } = store.getState();

	useEffect(() => {
		if (jwt) getJWT();
	}, [jwt]);

	useEffect(() => {
		document.title = "Сайт знакомств Miss-You";
	});

	return (
		<div
			className="App"
			onClick={(e) => {
				if (mobileMenu.enabled && e.clientX > 100) closeMobileMenu(e);
			}}
		>
			<AppHeader />
			<AppMain />
			<MobileMenu />
			<ModalLoading />
			<ModalMessage />
			<Holiday />
			<Socket />
		</div>
	);
}

export default App;
