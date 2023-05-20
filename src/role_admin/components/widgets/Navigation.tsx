import message from "../../../assets/img/message.png";
import gear from "../../../assets/img/gear.png";
import chart from "../../../assets/img/chart.png";
import peoples from "../../../assets/img/peoples.png";
import basket from "../../../assets/img/basket.png";
import exit from "../../../assets/img/exit.png";
import { useMemo } from "react";
import { ACCTYPE } from "../../../role_all/interfaces/iprofiles";
import { ILink } from "../../../role_all/interfaces/inavigation";
import { linkNoAuth } from "../../../role_all/components/widgets/Navigation";
import { Logout } from "../../../role_all/components/pages/Logout";
import { ButtonNavigationLink } from "../../../role_all/components/utils/Buttons";
import { storeAll } from "../../../role_all/store/storeAll";

export const linkAuthAdmin: ILink[] = [
	{ to: "/statistics", imgSrc: chart, title: "Статистика сайта" },
	{ to: "/dialogs", imgSrc: message, title: "Сообщения" },
	{ to: "/userprofiles", imgSrc: peoples, title: "Пользователи" },
	{ to: "/settings", imgSrc: gear, title: "Настройки" },
	{ to: "/logout", imgSrc: exit, title: "Выход" },
];

export function Navigation(payload: { naviKey: string }) {
	const { jwt, userMyProfile } = storeAll.getState();

	const NavigationMemo = useMemo(() => {
		return jwt ? (
			userMyProfile.userid !== "" ? (
				userMyProfile.acctype === ACCTYPE.admin ? (
					<>
						{linkAuthAdmin.map((link) => {
							return (
								<ButtonNavigationLink
									link={link}
									naviKey={payload.naviKey}
									key={
										"linkAuthAdmin" +
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
