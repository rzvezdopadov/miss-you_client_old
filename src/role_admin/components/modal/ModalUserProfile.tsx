import { useEffect, useState } from "react";
import {
	Label,
	LabelCash,
	LabelRating,
} from "../../../role_all/components/utils/Labels";
import {
	Button,
	ButtonImage,
} from "../../../role_all/components/utils/Buttons";
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
import statistics from "../../../assets/img/chart.png";
import { ModalUserDataWrapper } from "../../../role_all/components/wrappers/modal/ModalUserDataWrapper";
import { ModalUserStatistics } from "./ModalUserStatistic";
import { store } from "../../store/store";
import {
	initialStateUserProfile,
	userProfileAction,
} from "../../store/redusers/profile";
import { IAdminProfile } from "../../interfaces/iadmin";

export function modalUserProfileOpen(profile: IAdminProfile) {
	store.dispatch(userProfileAction({ enabled: true, profile }));
}

function modalUserProfileClose() {
	store.dispatch(userProfileAction(initialStateUserProfile));
}

export function ModalUserProfile() {
	const { dataGetDialog, errorGetDialog, querySendGetDialog } =
		useQueryGetDialog();
	const { userProfile } = store.getState();
	const [modalStatistics, setModalStatistics] = useState(false);

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
		<ModalUserDataWrapper
			enabled={userProfile.enabled}
			clbkClose={closeUserProfileHandler}
		>
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
					<ButtonImage
						imgSrc={statistics}
						title="Статистика пользователя"
						onClick={() => {
							setModalStatistics(true);
						}}
					/>
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
			<ModalUserStatistics
				enabled={modalStatistics}
				clbkClose={() => setModalStatistics(false)}
			/>
		</ModalUserDataWrapper>
	);
}
