import message from "../../../assets/img/message.png";
import heart from "../../../assets/img/heart.png";
import star from "../../../assets/img/star.png";
import glass from "../../../assets/img/glass.png";
import gear from "../../../assets/img/gear.png";
import basket from "../../../assets/img/basket.png";
import exit from "../../../assets/img/exit.png";
import { useMemo } from "react";
import { ACCTYPE } from "../../../role_all/interfaces/iprofiles";
import { ILink } from "../../../role_all/interfaces/inavigation";
import { linkNoAuth } from "../../../role_all/components/widgets/Navigation";
import { Logout } from "../../../role_all/components/pages/Logout";
import { storeAll } from "../../../role_all/store/storeAll";
import { ButtonNavigationLink } from "../../../role_all/components/utils/Buttons";

export const linkAuthUser: ILink[] = [
	{ to: "/vapors", imgSrc: heart, title: "Кто лайкнул" },
	{ to: "/favoriteusers", imgSrc: star, title: "Избранные пользователи" },
	{ to: "/dialogs", imgSrc: message, title: "Сообщения" },
	{ to: "/users", imgSrc: glass, title: "Поиск людей" },
	{ to: "/settings", imgSrc: gear, title: "Настройки" },
	{ to: "/shop", imgSrc: basket, title: "Магазин" },
	{ to: "/logout", imgSrc: exit, title: "Выход" },
];

export function Navigation(payload: { naviKey: string }) {
	const { jwt, userMyProfile } = storeAll.getState();

	const NavigationMemo = useMemo(() => {
		return jwt ? (
			userMyProfile?.userid !== "" ? (
				userMyProfile.acctype === ACCTYPE.user ? (
					<>
						{linkAuthUser.map((link) => {
							return (
								<ButtonNavigationLink
									link={link}
									naviKey={payload.naviKey}
									key={
										"linkAuthUser" +
										payload.naviKey +
										link.to
									}
								/>
							);
						})}
					</>
				) : (
					<Logout></Logout>
				)
			) : (
				<></>
			)
		) : (
			<>
				{linkNoAuth.map((link) => {
					return (
						<ButtonNavigationLink
							link={link}
							naviKey={payload.naviKey}
							key={"linkNoAuth" + payload.naviKey + link.to}
						/>
					);
				})}
			</>
		);
	}, [jwt, userMyProfile.acctype, userMyProfile.userid]);

	return NavigationMemo;
}
