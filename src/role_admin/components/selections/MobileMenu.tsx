import { Navigation } from "../widgets/Navigation";
import { MobileMenuWrapper } from "../../../role_all/components/wrappers/MobileMenuWrapper";

export function MobileMenu() {
	return (
		<MobileMenuWrapper>
			<Navigation naviKey={"mobile"} />
		</MobileMenuWrapper>
	);
}
