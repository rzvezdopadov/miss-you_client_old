import { ACCTYPE } from "../../interfaces/iprofiles";
import { store } from "../../store/store";
import { ModalAdminUserProfile } from "../modal/ModalAdminUserProfile";
import { ModalUserProfile } from "../modal/ModalUserProfile";

export function ModalUserProfileWrapper() {
	const { userMyProfile } = store.getState();

	return (
		<>
			{userMyProfile.acctype === ACCTYPE.admin ? (
				<ModalAdminUserProfile />
			) : (
				<ModalUserProfile />
			)}
		</>
	);
}
