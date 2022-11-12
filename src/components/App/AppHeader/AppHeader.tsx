import * as React from "react";
import logoNavBar from "../../../img/logoNavBar.png";
import logoNameNavBar from "../../../img/logoNameNavBar.png";
import menuOpenNavBar from "../../../img/menuOpenNavBar.png";
import { AppHeaderRightSideBar } from "../AppHeaderRightSideBar/AppHeaderRightSideBar";
import { openMobileMenu } from "../MobileMenu/MobileMenu";

export function AppHeader() {
	return (
		<div className="flex flex-shrink-0 items-center justify-around bg-gray-700 h-16">
			<div className="flex items-center">
				<a href="https://miss-you.ru">
					<img
						className="block h-12 rounded-full w-auto"
						src={logoNavBar}
						alt="Logo"
					/>
				</a>
				<img
					className="visible h-8 ml-2 w-auto"
					src={logoNameNavBar}
					alt="LogoName"
				/>
			</div>
			<img
				className="visible md:hidden cursor-pointer h-8 ml-2 w-auto"
				src={menuOpenNavBar}
				onClick={openMobileMenu}
				alt="LogoMenu"
			/>
			<div className="hidden md:block md:ml-6">
				<AppHeaderRightSideBar />
			</div>
		</div>
	);
}
