import * as React from "react";
import { Link } from "react-router-dom";
import { store } from "../../store/store";
import message from "../../assets/img/message.png";
import heart from "../../assets/img/heart.png";
import glass from "../../assets/img/glass.png";
import gear from "../../assets/img/gear.png";
import basket from "../../assets/img/basket.png";
import exit from "../../assets/img/exit.png";
import { logout } from "../../helpers/logout";
import { useEffect } from "react";
import { mobileMenuAction } from "../../store/redusers/menu";

export function openMobileMenu() {
	store.dispatch(mobileMenuAction(true));
}

export function closeMobileMenu(
	e: React.MouseEvent<HTMLDivElement, MouseEvent>
) {
	e.preventDefault();

	store.dispatch(mobileMenuAction(false));
}

function MobileMenuNoAuth() {
	return (
		<>
			<Link
				to="/"
				className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
			>
				Главная
			</Link>
			<Link
				to="/about"
				className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
			>
				О нас
			</Link>
			<Link
				to="/partners"
				className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
			>
				Партнеры
			</Link>
			<Link
				to="/enter"
				className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
			>
				Войти
			</Link>
		</>
	);
}

function MobileMenuAuth() {
	return (
		<>
			<Link
				to="/vapors"
				className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
			>
				<img
					className="block h-5 w-auto"
					src={heart}
					alt="Кто лайкнул"
					title="Кто лайкнул"
				/>
			</Link>
			<Link
				to="/dialogs"
				className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
			>
				<img
					className="block h-5 w-auto"
					src={message}
					alt="Сообщения"
					title="Сообщения"
				/>
			</Link>
			<Link
				to="/searchvapors"
				className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
			>
				<img
					className="block h-5 w-auto"
					src={glass}
					alt="Поиск людей"
					title="Поиск людей"
				/>
			</Link>
			<Link
				to="/settings"
				className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
			>
				<img
					className="block h-5 w-auto"
					src={gear}
					alt="Настройки"
					title="Настройки"
				/>
			</Link>
			<Link
				to="/shop"
				className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
			>
				<img
					className="block h-5 w-auto"
					src={basket}
					alt="Магазин"
					title="Магазин"
				/>
			</Link>
			<Link
				to="/logout"
				className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
				onClick={logout}
			>
				<img
					className="block h-5 w-auto"
					src={exit}
					alt="Выход"
					title="Выход"
				/>
			</Link>
		</>
	);
}

export function MobileMenu() {
	const { jwt, mobileMenu } = store.getState();

	useEffect(() => {
		let mobileMenuElem = document.getElementById("mobile-menu");

		if (!mobileMenuElem) return;

		if (mobileMenu.enabled) {
			mobileMenuElem.classList.remove("left-[-100px]");
			mobileMenuElem.classList.add("left-0");
		} else {
			mobileMenuElem.classList.remove("left-0");
			mobileMenuElem.classList.add("left-[-100px]");
		}
	}, [mobileMenu]);

	return (
		<div
			id="mobile-menu"
			onClick={closeMobileMenu}
			className="fixed items-center top-0 left-[-100px] w-[100px] h-screen z-50 bg-gray-700 p-5 flex flex-col space-y-5 text-white duration-300"
		>
			{jwt ? <MobileMenuAuth /> : <MobileMenuNoAuth />}
		</div>
	);
}
