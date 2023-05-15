import { Route } from "react-router-dom";
import { Vapors } from "../components/pages/Vapors";
import { FavoriteUsers } from "../components/pages/FavoriteUsers";
import { Users } from "../components/pages/Users";

export function RoutesLocal() {
	return (
		<>
			<Route path="/vapors" element={<Vapors />} />
			<Route path="/favoriteusers" element={<FavoriteUsers />} />
			<Route path="/users" element={<Users />} />
			<Route path="/*" element={<Vapors />} />
		</>
	);
}
