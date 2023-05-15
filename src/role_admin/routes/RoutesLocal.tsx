import { Route } from "react-router-dom";
import { Profiles } from "../components/pages/Profiles";
import { Statistics } from "../components/pages/Statistics";

export function RoutesLocal() {
	return (
		<>
			<Route path="/userprofiles" element={<Profiles />} />
			<Route path="/statistics" element={<Statistics />} />
			<Route path="/*" element={<Statistics />} />
		</>
	);
}
