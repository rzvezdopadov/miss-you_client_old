import "./App.css";
import { useEffect } from "react";
import { MobileMenu } from "./role_user/components/selections/MobileMenu";
import { ModalLoading } from "./role_all/components/modal/ModalLoading";
import { Socket } from "./role_user/components/utils/Socket";
import { ModalMessage } from "./role_all/components/modal/ModalMessage";
import { ModalUserProfile } from "./role_user/components/modal/ModalUserProfile";
import { closeMobileMenu } from "./role_all/components/wrappers/MobileMenuWrapper";
import { AppHeader } from "./role_user/components/selections/AppHeader";
import { AppMain } from "./role_user/components/selections/AppMain";
import { storeAll } from "./role_all/store/storeAll";
import { getJWT } from "./role_all/socket/auth";

function App() {
	const { jwt, mobileMenu } = storeAll.getState();

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
				if (mobileMenu && e.clientX > 100) closeMobileMenu(e);
			}}
		>
			<AppHeader />
			<AppMain />
			<MobileMenu />
			<ModalLoading />
			<ModalUserProfile />
			{/* <Holiday /> */}
			{jwt ? <Socket /> : <></>}
			<ModalMessage />
		</div>
	);
}

export default App;
