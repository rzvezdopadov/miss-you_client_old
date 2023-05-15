import { Route } from "react-router-dom";
import { Login } from "../../role_all/components/pages/Login";
import { Registration } from "../../role_all/components/pages/Registration";
import { RecoveryPass } from "../../role_all/components/pages/RecoveryPass";

export function RoutesNoAuth() {
	return (
		<>
			<Route path="/login" element={<Login />} />
			<Route path="/recoverypass" element={<RecoveryPass />} />
			<Route path="/registration" element={<Registration />} />
			<Route path="/*" element={<Registration />} />
		</>
	);
}
