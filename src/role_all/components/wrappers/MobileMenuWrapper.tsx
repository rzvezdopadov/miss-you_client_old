import * as React from "react";
import { useEffect } from "react";
import { mobileMenuAction } from "../../store/redusers/menu";
import { storeAll } from "../../store/storeAll";

export function openMobileMenu() {
	storeAll.dispatch(mobileMenuAction(true));
}

export function closeMobileMenu(
	e: React.MouseEvent<HTMLDivElement, MouseEvent>
) {
	e.preventDefault();

	storeAll.dispatch(mobileMenuAction(false));
}

export function MobileMenuWrapper(payload: { children: React.ReactNode }) {
	const { mobileMenu } = storeAll.getState();

	useEffect(() => {
		let mobileMenuElem = document.getElementById("mobile-menu");

		if (!mobileMenuElem) return;

		if (mobileMenu) {
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
			{payload.children}
		</div>
	);
}
