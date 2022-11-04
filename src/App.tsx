import * as React from "react";
import { useEffect } from "react";
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

function App() {
	const { mobileMenu } = store.getState();

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
		</div>
	);
}

export default App;
