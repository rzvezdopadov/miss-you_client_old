import { FormEnter } from "./components/forms/FormLogin";
import { FormRecoveryPass } from "./components/forms/FormRecoveryPass";
import { FormRegistration } from "./components/forms/FormRegistration";
import { Agreement } from "./components/pages/Agreement";
import { Dialogs } from "./components/pages/Dialogs";
import { Partners } from "./components/pages/Partners";
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
		path: "/enter",
		element: FormEnter,
	},
	{
		path: "/recoverypass",
		element: FormRecoveryPass,
	},
	{
		path: "/*",
		element: FormRegistration,
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
