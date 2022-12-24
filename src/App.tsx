//// @ts-nocheck
import * as React from "react";
import { useEffect } from "react";
import "./App.css";
import { AppHeader } from "./components/App/AppHeader/AppHeader";
import { AppMain } from "./components/App/AppMain/AppMain";
import {
	closeMobileMenu,
	MobileMenu,
} from "./components/App/MobileMenu/MobileMenu";
import { ModalLoading } from "./components/Modal/ModalLoading/ModalLoading";
import { ModalMessage } from "./components/Modal/ModalMessage/ModalMessage";
import { store } from "./utils/store";
import { getJWT } from "./components/Utils/Socket/Socket";
import { Snowflakes } from "./components/Backjokes/Snowflakes/Snowflakes";

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
				if (e.clientX > 100 && mobileMenu.enabled) closeMobileMenu(e);
			}}
		>
			<AppHeader />
			<AppMain />
			<MobileMenu />
			<ModalLoading />
			<ModalMessage />
			<Snowflakes />
		</div>
	);
}

export default App;
