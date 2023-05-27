import { Label } from "../../../role_all/components/utils/Labels";
import { UserProfileNameAge } from "../../../role_all/components/widgets/userprofile/UserProfileNameAge";
import { ModalUserDataWrapper } from "../../../role_all/components/wrappers/modal/ModalUserDataWrapper";
import { store } from "../../store/store";

export function ModalUserStatistics(payload: {
	enabled: boolean;
	clbkClose: any;
}) {
	const { userProfile } = store.getState();

	return (
		<ModalUserDataWrapper
			enabled={payload.enabled}
			clbkClose={payload.clbkClose}
		>
			<UserProfileNameAge profile={userProfile.profile} />
			<Label value={`${{ ...userProfile.profile.visit }}`} />
		</ModalUserDataWrapper>
	);
}
