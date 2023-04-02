import * as React from "react";
import { IProfile } from "../../interfaces/iprofiles";
import { store } from "../../store/store";
import { LabelRating } from "../utils/Labels";
import { ButtonClose } from "../utils/Buttons";
import {
	initialStateUserProfile,
	userProfileAction,
} from "../../store/redusers/profile";
import { ModalDialog, modalDialogClose } from "./ModalDialog";
import { DateTimeVisit } from "../utils/DateTime";
import { UserProfileSlider } from "../widgets/userprofile/UserProfileSlider";
import { UserProfileInterests } from "../widgets/userprofile/UserProfileInterests";
import { UserProfileAboutMe } from "../widgets/userprofile/UserProfileAboutMe";
import { UserProfilePersonal } from "../widgets/userprofile/UserProfilePersonal";
import { UserProfileQuality } from "../widgets/userprofile/UserProfileQuality";
import { UserProfileNameAge } from "../widgets/userprofile/UserProfileNameAge";
import { useRefDivVisible } from "../../hooks/form.hook";
import { UserProfileBunned } from "../widgets/userprofile/UserProfileBunned";
import { UserProfileSendMessage } from "../widgets/userprofile/UserProfileSendMessage";

export function modalUserProfileOpen(profile: IProfile) {
	store.dispatch(userProfileAction(true, profile));
}

function modalUserProfileClose() {
	store.dispatch(userProfileAction(false, initialStateUserProfile.profile));
}

export function ModalUserProfile() {
	const { userProfile } = store.getState();
	const refUserProfile = useRefDivVisible(userProfile.enabled);

	const closeUserProfileHandler = () => {
		modalUserProfileClose();
		modalDialogClose();
	};

	return (
		<div
			ref={refUserProfile}
			className="flex flex-col invisible fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl overflow-y-scroll lg:overflow-auto top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-20 pb-2 h-full lg:h-2/3 lg:max-w-5xl"
		>
			<ButtonClose onClick={closeUserProfileHandler} />

			<div className="flex flex-wrap mt-4 flex-col lg:flex-row justify-center items-center h-fit w-full">
				<div className="flex flex-col">
					<UserProfileSlider />
					<LabelRating value={userProfile.profile.rating} />
					<UserProfileSendMessage />
					<UserProfileBunned />
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
		</div>
	);
}
