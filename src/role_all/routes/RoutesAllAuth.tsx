import { Route } from "react-router-dom";
import { Dialogs } from "../../role_admin/components/pages/Dialogs";
import { SettingProfile } from "../components/pages/SettingProfile";
import { Shop } from "../../role_user/components/pages/Shop";
import { Logout } from "../components/pages/Logout";

export function RoutesAllAuth() {
	return (
		<>
			<Route path="/dialogs" element={<Dialogs />} />
			<Route path="/settings" element={<SettingProfile />} />
			<Route path="/shop" element={<Shop />} />
			<Route path="/logout" element={<Logout />} />
		</>
	);
}
