//// @ts-nocheck
import * as React from "react";
import { useEffect } from "react";
import "./App.css";
import { AppHeader } from "./components/sections/AppHeader";
import { AppMain } from "./components/sections/AppMain";
import { closeMobileMenu, MobileMenu } from "./components/sections/MobileMenu";
import { ModalLoading } from "./components/modal/ModalLoading";
import { store } from "./store/store";
import { getJWT, Socket } from "./components/utils/Socket";
import { ModalUserProfileWrapper } from "./components/wrappers/ModalUserProfileWrapper";
import { ModalDialog } from "./components/modal/ModalDialog";

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
			<ModalUserProfileWrapper />
			<ModalDialog />
			{/* <Holiday /> */}
			{jwt ? <Socket /> : <></>}
		</div>
	);
}

export default App;
