import {
	COMPLAINTSTATUS,
	COMPLAINTTYPE,
	IProfile,
	MESSAGETYPE,
} from "../../../role_all/interfaces/iprofiles";
import { LabelRating } from "../../../role_all/components/utils/Labels";
import {
	Button,
	ButtonClose,
} from "../../../role_all/components/utils/Buttons";
import {
	initialStateUserProfile,
	userProfileAction,
} from "../../../role_all/store/redusers/profile";
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
import { useRefDivVisible } from "../../../role_all/hooks/form.hook";
import { UserProfileBunned } from "../widgets/userprofile/UserProfileBunned";
import { UserProfileSendMessage } from "../../../role_all/components/widgets/userprofile/UserProfileSendMessage";
import {
	ModalComplaint,
	modalComplaintClose,
	modalComplaintOpen,
} from "./ModalComplaint";
import { storeAll } from "../../../role_all/store/storeAll";

export function modalUserProfileOpen(profile: IProfile) {
	storeAll.dispatch(userProfileAction({ enabled: true, profile }));
}

function modalUserProfileClose() {
	storeAll.dispatch(
		userProfileAction({
			enabled: false,
			profile: initialStateUserProfile.profile,
		})
	);
}

export function ModalUserProfile() {
	const { userProfile, userMyProfile } = storeAll.getState();
	const refUserProfile = useRefDivVisible(userProfile.enabled);

	const closeUserProfileHandler = () => {
		modalUserProfileClose();
		modalDialogClose();
		modalComplaintClose();
	};

	return (
		<div
			ref={refUserProfile}
			className="flex flex-col invisible fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl overflow-y-scroll lg:overflow-auto top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-20 pb-2 h-full lg:h-2/3 lg:max-w-5xl"
		>
			<ButtonClose onClick={closeUserProfileHandler} />

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
									stickerpackid: "",
									stickerpos: 0,
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
		</div>
	);
}
