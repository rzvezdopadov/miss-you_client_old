import * as React from "react";
import { store } from "../../store/store";
import { useEffect } from "react";
import { mobileMenuAction } from "../../store/redusers/menu";
import { Navigation } from "../widgets/Navigation";

export function openMobileMenu() {
	store.dispatch(mobileMenuAction(true));
}

export function closeMobileMenu(
	e: React.MouseEvent<HTMLDivElement, MouseEvent>
) {
	e.preventDefault();

	store.dispatch(mobileMenuAction(false));
}

export function MobileMenu() {
	const { mobileMenu } = store.getState();

	useEffect(() => {
		let mobileMenuElem = document.getElementById("mobile-menu");

		if (!mobileMenuElem) return;

		if (mobileMenu.enabled) {
			mobileMenuElem.classList.remove("left-[-150px]");
			mobileMenuElem.classList.add("left-0");
		} else {
			mobileMenuElem.classList.remove("left-0");
			mobileMenuElem.classList.add("left-[-150px]");
		}
	}, [mobileMenu]);

	return (
		<div
			id="mobile-menu"
			onClick={closeMobileMenu}
			className="fixed items-center top-0 left-[-150px] w-[150px] h-screen z-50 bg-gray-700 p-5 flex flex-col text-white duration-300"
		>
			<Navigation naviKey={"mobile"} />
		</div>
	);
}
