import { useEffect } from "react";
import { userProfileAction } from "../../../role_all/store/redusers/profile";
import { ButtonsYesCancelWidget } from "../../../role_all/components/widgets/utils/Buttons";
import { Label } from "../../../role_all/components/utils/Labels";
import { store } from "../../store/store";
import { modalPhotoDeleteAction } from "../../../role_all/store/redusers/modal";
import { storeAll } from "../../../role_all/store/storeAll";
import { useQueryDeletePhoto } from "../../api/photo/photo.api.hook";
import { IQueryDeletePhoto } from "../../api/photo/iphoto.api";
import { ModalYesCancelWrapper } from "../../../role_all/components/wrappers/modal/ModalYesCancelWrapper";

export function modalPhotoDeleteOpen(photoPos: number) {
	storeAll.dispatch(modalPhotoDeleteAction({ enabled: true, photoPos }));
}

const modalPhotoDeleteClose = () => {
	storeAll.dispatch(modalPhotoDeleteAction({ enabled: false, photoPos: 0 }));
};

export function ModalPhotoDelete() {
	const { modalPhotoDelete, userProfile } = storeAll.getState();
	const { dataDeletePhoto, errorDeletePhoto, queryDeletePhoto } =
		useQueryDeletePhoto();

	useEffect(() => {
		return () => {
			modalPhotoDeleteClose();
		};
	}, []);

	useEffect(() => {
		if (dataDeletePhoto) {
			const newUserProfile = { ...userProfile.profile };
			newUserProfile.photolink = dataDeletePhoto.photolink;
			newUserProfile.photomain = dataDeletePhoto.photomain;

			storeAll.dispatch(
				userProfileAction({ enabled: true, profile: newUserProfile })
			);
		}

		modalPhotoDeleteClose();
	}, [dataDeletePhoto]);

	useEffect(() => {
		modalPhotoDeleteClose();
	}, [errorDeletePhoto]);

	const yesModalPhotoDeleteHandler = () => {
		const data: IQueryDeletePhoto = {
			userid: userProfile.profile.userid,
			photoPos: modalPhotoDelete.photoPos,
		};

		queryDeletePhoto(data);
	};

	return (
		<ModalYesCancelWrapper enabled={modalPhotoDelete.enabled}>
			<Label
				value={`Вы действительно хотите удалить ${
					modalPhotoDelete.photoPos + 1
				}-е фото?`}
			/>
			<ButtonsYesCancelWidget
				onClickYes={yesModalPhotoDeleteHandler}
				onClickCancel={modalPhotoDeleteClose}
			/>
		</ModalYesCancelWrapper>
	);
}
