import { useEffect } from "react";
import { IProfile } from "../../../role_all/interfaces/iprofiles";
import {
	Label,
	LabelCash,
	LabelRating,
} from "../../../role_all/components/utils/Labels";
import {
	Button,
	ButtonClose,
} from "../../../role_all/components/utils/Buttons";
import {
	initialStateUserProfile,
	userProfileAction,
} from "../../../role_all/store/redusers/profile";
import { dialogAction } from "../../../role_all/store/redusers/dialog";
import {
	ModalDialog,
	modalDialogClose,
	modalDialogOpen,
} from "../../../role_all/components/modal/ModalDialog";
import { modalMessageOpen } from "../../../role_all/components/modal/ModalMessage";
import { DateTimeVisit } from "../../../role_all/components/utils/DateTime";
import { UserProfileInterests } from "../../../role_all/components/widgets/userprofile/UserProfileInterests";
import { UserProfilePersonal } from "../../../role_all/components/widgets/userprofile/UserProfilePersonal";
import { UserProfileQuality } from "../../../role_all/components/widgets/userprofile/UserProfileQuality";
import { UserProfileAboutMe } from "../../../role_all/components/widgets/userprofile/UserProfileAboutMe";
import { UserProfileNameAge } from "../../../role_all/components/widgets/userprofile/UserProfileNameAge";
import { useQueryGetDialog } from "../../../role_all/api/dialog/dialog.api.hook";
import { IQueryDialog } from "../../../role_all/api/dialog/idialog.api";
import { useRefDivVisible } from "../../../role_all/hooks/form.hook";
import {
	ModalChangeRating,
	modalChangeRatingClose,
	modalChangeRatingOpen,
} from "./ModalChangeRating";
import {
	ModalChangeCash,
	modalChangeCashClose,
	modalChangeCashOpen,
} from "./ModalChangeCash";
import { ModalBanned, modalBannedClose, modalBannedOpen } from "./ModalBanned";
import { ModalPhotoDelete } from "./ModalPhotoDelete";
import { storeAll } from "../../../role_all/store/storeAll";
import { UserProfileSlider } from "../widgets/userprofile/UserProfileSlider";
import { BG_COLOR } from "../../../assets/styles/enum";

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
	const { dataGetDialog, errorGetDialog, querySendGetDialog } =
		useQueryGetDialog();
	const { userProfile } = storeAll.getState();
	const refUserProfile = useRefDivVisible(userProfile.enabled);

	useEffect(() => {
		if (!dataGetDialog) return;

		modalDialogOpen(dataGetDialog);
		storeAll.dispatch(dialogAction(dataGetDialog));
	}, [dataGetDialog]);

	useEffect(() => {
		if (!errorGetDialog) return;

		modalMessageOpen(errorGetDialog.response.data.message);
	}, [errorGetDialog]);

	const modalDialogOpenHandler = () => {
		const data: IQueryDialog = {
			userid: userProfile.profile.userid,
		};

		querySendGetDialog(data);
	};

	const closeUserProfileHandler = () => {
		modalDialogClose();
		modalChangeRatingClose();
		modalChangeCashClose();
		modalBannedClose();
		modalUserProfileClose();
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
					<Label
						value={`userid = "${userProfile.profile.userid}"`}
						title={`userid = "${userProfile.profile.userid}"`}
						shadow={true}
						bgcolor={BG_COLOR.Lime700}
					/>
					<LabelRating
						value={userProfile.profile.rating}
						onClick={() => {
							modalChangeRatingOpen(userProfile.profile.userid);
						}}
					/>
					<LabelCash
						value={userProfile.profile.cash}
						onClick={() => {
							modalChangeCashOpen(userProfile.profile.userid);
						}}
					/>
					<Button
						value={"Написать сообщение"}
						onClick={modalDialogOpenHandler}
					/>

					<Button
						value={"Забанить/разбанить"}
						onClick={() => {
							modalBannedOpen(userProfile.profile.userid);
						}}
					/>
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
			<ModalChangeRating />
			<ModalChangeCash />
			<ModalBanned />
			<ModalPhotoDelete />
		</div>
	);
}
