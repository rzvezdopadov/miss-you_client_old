import * as React from "react";
import { Link } from "react-router-dom";
import { store } from "../../utils/store";
import { logout } from "../logout/logout";
import message from "../../img/message.png";
import heart from "../../img/heart.png";
import glass from "../../img/glass.png";
import gear from "../../img/gear.png";
import exit from "../../img/exit.png";

function AppHeaderRightSideBarNoAuth() {
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
				Партнерство
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

function AppHeaderRightSideBarAuth() {
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
				to="/"
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

export function AppHeaderRightSideBar() {
	const { jwt } = store.getState();

	return (
		<div className="flex space-x-4">
			{jwt ? (
				<AppHeaderRightSideBarAuth />
			) : (
				<AppHeaderRightSideBarNoAuth />
			)}
		</div>
	);
}
