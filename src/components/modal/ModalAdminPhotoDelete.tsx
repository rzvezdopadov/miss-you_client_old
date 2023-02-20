import * as React from "react";
import { useEffect } from "react";
import { store } from "../../store/store";
import { modalPhotoDeleteAction } from "../../store/redusers/modal";
import { userProfileAction } from "../../store/redusers/profile";
import { ModalYesCancelWrapper } from "../wrappers/ModalYesCancelWrapper";
import { ButtonsYesCancelWidget } from "../widgets/utils/Buttons";
import { useQueryDeleteAdminPhoto } from "../../api/admin/admin.api.hook";
import { IQueryDeleteAdminPhoto } from "../../api/admin/iadmin.api";

export function modalAdminPhotoDeleteOpen(photoPos: number) {
	store.dispatch(modalPhotoDeleteAction(true, photoPos));
}

const modalPhotoDeleteClose = () => {
	store.dispatch(modalPhotoDeleteAction(false, 0));
};

export function ModalAdminPhotoDelete() {
	const { modalPhotoDelete, userProfile } = store.getState();
	const {
		dataDeleteAdminPhoto,
		errorDeleteAdminPhoto,
		queryDeleteAdminPhoto,
	} = useQueryDeleteAdminPhoto();

	useEffect(() => {
		return () => {
			modalPhotoDeleteClose();
		};
	}, []);

	useEffect(() => {
		if (dataDeleteAdminPhoto) {
			const newUserProfile = { ...userProfile.profile };
			newUserProfile.photolink = dataDeleteAdminPhoto.photolink;
			newUserProfile.photomain = dataDeleteAdminPhoto.photomain;

			store.dispatch(userProfileAction(true, newUserProfile));
		}

		modalPhotoDeleteClose();
	}, [dataDeleteAdminPhoto]);

	useEffect(() => {
		console.log(errorDeleteAdminPhoto);
		modalPhotoDeleteClose();
	}, [errorDeleteAdminPhoto]);

	const yesModalPhotoDeleteHandler = () => {
		const data: IQueryDeleteAdminPhoto = {
			userid: userProfile.profile.userid,
			photoPos: modalPhotoDelete.photoPos,
		};

		queryDeleteAdminPhoto(data);
	};

	return (
		<ModalYesCancelWrapper enabled={modalPhotoDelete.enabled}>
			<>
				<div className="flex">{`Вы действительно хотите удалить ${
					modalPhotoDelete.photoPos + 1
				}-е фото?`}</div>
				<ButtonsYesCancelWidget
					onClickYes={yesModalPhotoDeleteHandler}
					onClickCancel={modalPhotoDeleteClose}
				/>
			</>
		</ModalYesCancelWrapper>
	);
}
