import { Route } from "react-router-dom";
import { Agreement } from "../../role_all/components/pages/Agreement";
import { AboutUs } from "../../role_all/components/pages/AboutUs";
import { Partners } from "../../role_all/components/pages/Partners";

export function RoutesAll() {
	return (
		<>
			<Route path="/agreement" element={<Agreement />} />
			<Route path="/about" element={<AboutUs />} />
			<Route path="/partners" element={<Partners />} />
		</>
	);
}
