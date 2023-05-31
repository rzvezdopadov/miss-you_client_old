import {
	COMPLAINTSTATUS,
	COMPLAINTTYPE,
	IProfile,
	MESSAGETYPE,
} from "../../../role_all/interfaces/iprofiles";
import { LabelRating } from "../../../role_all/components/utils/Labels";
import { Button } from "../../../role_all/components/utils/Buttons";
import {
	ModalDialog,
	modalDialogClose,
} from "../../../role_all/components/modal/ModalDialog";
import { DateTimeVisit } from "../../../role_all/components/utils/DateTime";
import { UserProfileSlider } from "../widgets/userprofile/UserProfileSlider";
import { UserProfileInterests } from "../../../role_all/components/widgets/userprofile/UserProfileInterests";
import { UserProfileAboutMe } from "../../../role_all/components/widgets/userprofile/UserProfileAboutMe";
import { UserProfilePersonal } from "../../../role_all/components/widgets/userprofile/UserProfilePersonal";
import { UserProfileQuality } from "../../../role_all/components/widgets/userprofile/UserProfileQuality";
import { UserProfileNameAge } from "../../../role_all/components/widgets/userprofile/UserProfileNameAge";
import { UserProfileBunned } from "../widgets/userprofile/UserProfileBunned";
import { UserProfileSendMessage } from "../../../role_all/components/widgets/userprofile/UserProfileSendMessage";
import {
	ModalComplaint,
	modalComplaintClose,
	modalComplaintOpen,
} from "./ModalComplaint";
import { storeAll } from "../../../role_all/store/storeAll";
import { ModalUserDataWrapper } from "../../../role_all/components/wrappers/modal/ModalUserDataWrapper";
import { store } from "../../store/store";
import {
	initialStateUserProfile,
	userProfileAction,
} from "../../store/redusers/profile";

export function modalUserProfileOpen(profile: IProfile) {
	store.dispatch(userProfileAction({ enabled: true, profile }));
}

function modalUserProfileClose() {
	store.dispatch(userProfileAction(initialStateUserProfile));
}

export function ModalUserProfile() {
	const { userMyProfile } = storeAll.getState();
	const { userProfile } = store.getState();

	const closeUserProfileHandler = () => {
		modalUserProfileClose();
		modalDialogClose();
		modalComplaintClose();
	};

	return (
		<ModalUserDataWrapper
			enabled={userProfile.enabled}
			clbkClose={closeUserProfileHandler}
		>
			<div className="flex flex-wrap mt-4 flex-col lg:flex-row justify-center items-center h-fit w-full">
				<div className="flex  flex-col">
					<UserProfileSlider />
					<LabelRating value={userProfile.profile.rating} />
					<UserProfileSendMessage />
					<UserProfileBunned />
					<Button
						value={"Пожаловаться на профиль"}
						onClick={() =>
							modalComplaintOpen({
								userfrom: userMyProfile.userid,
								userto: userProfile.profile.userid,
								timecode: 0,
								type: COMPLAINTTYPE.profile,
								subject: "",
								discription: "",
								dck: "",
								cash: 0,
								status: COMPLAINTSTATUS.open,
								complmessage: {
									timecode: 0,
									type: MESSAGETYPE.message,
									userid: userProfile.profile.userid,
									message: "",
									stpid: "",
									spos: 0,
								},
							})
						}
					></Button>
				</div>

				<div className="flex items-center flex-col">
					<UserProfileNameAge profile={userProfile.profile} />
					<DateTimeVisit profile={userProfile.profile} />
					<UserProfileAboutMe
						discription={userProfile.profile.discription}
					/>
					<UserProfilePersonal profile={userProfile.profile} />
					<UserProfileInterests profile={userProfile.profile} />
					<UserProfileQuality profile={userProfile.profile} />
				</div>
			</div>

			<ModalDialog />
			<ModalComplaint />
		</ModalUserDataWrapper>
	);
}
