import { Agreement } from "./components/pages/Agreement";
import { Dialogs } from "./components/pages/Dialogs";
import { Login } from "./components/pages/Login";
import { Partners } from "./components/pages/Partners";
import { RecoveryPass } from "./components/pages/RecoveryPass";
import { Registration } from "./components/pages/Registration";
import { SearchVapors } from "./components/pages/SearchVapors";
import { SettingProfile } from "./components/pages/SettingProfile";
import { Shop } from "./components/pages/Shop";
import { Vapors } from "./components/pages/Vapors";

export interface IRoute {
	path: string;
	element: any;
}

export const routesAll: IRoute[] = [
	{
		path: "/agreement",
		element: Agreement,
	},
	{
		path: "/partners",
		element: Partners,
	},
];

export const routesNoAuth: IRoute[] = [
	{
		path: "/login",
		element: Login,
	},
	{
		path: "/recoverypass",
		element: RecoveryPass,
	},
	{
		path: "/registration",
		element: Registration,
	},
	{
		path: "/*",
		element: Registration,
	},
];

export const routesAuthUser: IRoute[] = [
	{
		path: "/searchvapors",
		element: SearchVapors,
	},
	{
		path: "/dialogs",
		element: Dialogs,
	},
	{
		path: "/settings",
		element: SettingProfile,
	},
	{
		path: "/shop",
		element: Shop,
	},
	{
		path: "/vapors",
		element: Vapors,
	},
	{
		path: "/*",
		element: Vapors,
	},
];

export const routesAuthAdmin: IRoute[] = [
	{
		path: "/dialogs",
		element: Dialogs,
	},
	{
		path: "/settings",
		element: SettingProfile,
	},
];
