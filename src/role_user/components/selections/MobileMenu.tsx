import { MobileMenuWrapper } from "../../../role_all/components/wrappers/MobileMenuWrapper";
import { Navigation } from "../widgets/Navigation";

export function MobileMenu() {
	return (
		<MobileMenuWrapper>
			<Navigation naviKey={"mobile"} />
		</MobileMenuWrapper>
	);
}
