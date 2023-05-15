import { useEffect } from "react";
import { modalPhotoDeleteAction } from "../../store/redusers/modal";
import { userMyProfileAction } from "../../store/redusers/profile";
import { useQueryDeletePhoto } from "../../api/photo/photo.api.hook";
import { IQueryPhoto } from "../../api/photo/iphoto.api";
import { storeAll } from "../../store/storeAll";
import { ModalYesCancelWrapper } from "../wrappers/modal/ModalYesCancelWrapper";
import { Label } from "../utils/Labels";
import { ButtonsYesCancelWidget } from "../widgets/utils/Buttons";

export function modalPhotoDeleteOpen(photoPos: number) {
	storeAll.dispatch(modalPhotoDeleteAction({ enabled: true, photoPos }));
}

export function ModalPhotoDelete() {
	const { modalPhotoDelete, userMyProfile } = storeAll.getState();
	const { dataDeletePhoto, errorDeletePhoto, queryDeletePhoto } =
		useQueryDeletePhoto();

	useEffect(() => {
		return () => {
			modalPhotoDeleteCloseHandler();
		};
	}, []);

	useEffect(() => {
		if (dataDeletePhoto) {
			const newUserMyProfile = { ...userMyProfile };
			newUserMyProfile.photolink = dataDeletePhoto.photolink;
			newUserMyProfile.photomain = dataDeletePhoto.photomain;

			storeAll.dispatch(userMyProfileAction(newUserMyProfile));
		}

		modalPhotoDeleteCloseHandler();
	}, [dataDeletePhoto]);

	useEffect(() => {
		modalPhotoDeleteCloseHandler();
	}, [errorDeletePhoto]);

	const modalPhotoDeleteCloseHandler = () => {
		storeAll.dispatch(
			modalPhotoDeleteAction({ enabled: false, photoPos: 0 })
		);
	};

	const yesModalPhotoDeleteHandler = () => {
		const data: IQueryPhoto = {
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
			></Label>
			<ButtonsYesCancelWidget
				onClickYes={yesModalPhotoDeleteHandler}
				onClickCancel={modalPhotoDeleteCloseHandler}
			/>
		</ModalYesCancelWrapper>
	);
}
