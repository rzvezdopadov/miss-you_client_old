import { store } from "../../store/store";
import message from "../../assets/img/message.png";
import heart from "../../assets/img/heart.png";
import glass from "../../assets/img/glass.png";
import gear from "../../assets/img/gear.png";
import chart from "../../assets/img/chart.png";
import peoples from "../../assets/img/peoples.png";
import basket from "../../assets/img/basket.png";
import exit from "../../assets/img/exit.png";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { ACCTYPE } from "../../interfaces/iprofiles";

export interface ILink {
	to: string;
	imgSrc: any;
	title: string;
}

export const linkAuthUser: ILink[] = [
	{ to: "/vapors", imgSrc: heart, title: "Кто лайкнул" },
	{ to: "/dialogs", imgSrc: message, title: "Сообщения" },
	{ to: "/searchvapors", imgSrc: glass, title: "Поиск людей" },
	{ to: "/settings", imgSrc: gear, title: "Настройки" },
	{ to: "/shop", imgSrc: basket, title: "Магазин" },
	{ to: "/logout", imgSrc: exit, title: "Выход" },
];

export const linkAuthAdmin: ILink[] = [
	{ to: "/statistics", imgSrc: chart, title: "Статистика сайта" },
	{ to: "/dialogs", imgSrc: message, title: "Сообщения" },
	{ to: "/userprofiles", imgSrc: peoples, title: "Пользователи" },
	{ to: "/settings", imgSrc: gear, title: "Настройки" },
	{ to: "/shop", imgSrc: basket, title: "Магазин" },
	{ to: "/logout", imgSrc: exit, title: "Выход" },
];

export const linkNoAuth: ILink[] = [
	{ to: "/", imgSrc: "", title: "Главная" },
	{ to: "/about", imgSrc: "", title: "О нас" },
	{ to: "/partners", imgSrc: "", title: "Партнерство" },
	{ to: "/login", imgSrc: "", title: "Войти" },
];

export function Navigation(payload: { naviKey: string }) {
	const { jwt, userMyProfile } = store.getState();

	const NavigationLink = (link: ILink) => {
		return (
			<Link to={link.to} key={payload.naviKey + link.to}>
				<div className="flex h-10 w-fit m-1 justify-center items-center bg-gray-900 rounded-lg">
					{link.imgSrc ? (
						<div className="flex h-10 w-10 justify-center items-center cursor-pointer">
							<img
								className="flex h-5 w-6 rounded-sm"
								src={String(link.imgSrc)}
								alt={link.title}
								title={link.title}
							/>
						</div>
					) : (
						<div className="flex h-10 w-fit px-2 justify-center items-center cursor-pointer">
							<label className="flex text-white w-fit cursor-pointer">
								{link.title}
							</label>
						</div>
					)}
				</div>
			</Link>
		);
	};

	const NavigationMemo = useMemo(() => {
		return jwt ? (
			userMyProfile.userid !== "" ? (
				userMyProfile.acctype === ACCTYPE.admin ? (
					<>
						{linkAuthAdmin.map((link) => {
							return NavigationLink(link);
						})}
					</>
				) : (
					<>
						{linkAuthUser.map((link) => {
							return NavigationLink(link);
						})}
					</>
				)
			) : (
				<></>
			)
		) : (
			<>
				{linkNoAuth.map((link) => {
					return NavigationLink(link);
				})}
			</>
		);
	}, [jwt, userMyProfile.acctype, userMyProfile.userid]);

	return NavigationMemo;
}
