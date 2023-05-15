import { Navigation } from "../../components/widgets/Navigation";
import { Navbar } from "../../../role_all/components/widgets/Navbar";
import { NavbarWrapper } from "../../../role_all/components/wrappers/NavbarWrapper";

export function AppHeader() {
	return (
		<NavbarWrapper>
			<Navbar />
			<div className="hidden md:flex">
				<Navigation naviKey={"header"} />
			</div>
		</NavbarWrapper>
	);
}
