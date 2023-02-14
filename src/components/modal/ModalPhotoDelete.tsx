import * as React from "react";
import { useEffect } from "react";
import { store } from "../../store/store";
import { modalPhotoDeleteAction } from "../../store/redusers/modal";
import { userMyProfileAction } from "../../store/redusers/profile";
import { ButtonCancel, ButtonYes } from "../utils/Buttons";
import { useQueryDeletePhoto } from "../../api/photo/photo.api.hook";
import { IQueryPhoto } from "../../api/photo/iphoto.api";
import { ModalYesCancelWrapper } from "../wrappers/ModalYesCancelWrapper";

export function openModalPhotoDelete(photoPos: number) {
	store.dispatch(modalPhotoDeleteAction(true, photoPos));
}

export function ModalPhotoDelete() {
	const { modalPhotoDelete, userMyProfile } = store.getState();
	const { dataDeletePhoto, errorDeletePhoto, queryDeletePhoto } =
		useQueryDeletePhoto();

	useEffect(() => {
		return () => {
			closeModalPhotoDeleteHandler();
		};
	}, []);

	useEffect(() => {
		if (dataDeletePhoto) {
			const newUserMyProfile = { ...userMyProfile };
			newUserMyProfile.photolink = dataDeletePhoto.photolink;
			newUserMyProfile.photomain = dataDeletePhoto.photomain;

			store.dispatch(userMyProfileAction(newUserMyProfile));
		}

		closeModalPhotoDeleteHandler();
	}, [dataDeletePhoto, errorDeletePhoto]);

	const closeModalPhotoDeleteHandler = () => {
		store.dispatch(modalPhotoDeleteAction(false, 0));
	};

	const yesModalPhotoDeleteHandler = () => {
		const data: IQueryPhoto = {
			photoPos: modalPhotoDelete.photoPos,
		};

		queryDeletePhoto(data);
	};

	return (
		<ModalYesCancelWrapper enabled={modalPhotoDelete.enabled}>
			<>
				<div className="flex">{`Вы действительно хотите удалить ${
					modalPhotoDelete.photoPos + 1
				}-е фото?`}</div>
				<div className="flex justify-center h-6 w-full">
					<ButtonYes onClick={yesModalPhotoDeleteHandler} />
					<ButtonCancel onClick={closeModalPhotoDeleteHandler} />
				</div>
			</>
		</ModalYesCancelWrapper>
	);
}
