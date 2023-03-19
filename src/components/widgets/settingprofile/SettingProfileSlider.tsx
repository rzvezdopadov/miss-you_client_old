import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { store } from "../../../store/store";
import {
	SliderPhotoBtnAdd,
	SliderPhotoBtnLeft,
	SliderPhotoBtnRight,
} from "../../utils/Sliders";
import { userMyProfileAction } from "../../../store/redusers/profile";
import { modalMessageOpen } from "../../modal/ModalMessage";
import { useQueryCheckPhoto } from "../../../api/photo/photo.api.hook";
import { IQueryPhoto } from "../../../api/photo/iphoto.api";
import { modalPhotoDeleteOpen } from "../../modal/ModalPhotoDelete";
import { modalPhotoEditorOpen } from "../../modal/ModalPhotoEditor";
import { PhotoProfile, PhotoProfileLittle } from "../utils/Photo";
import { ButtonClose } from "../../utils/Buttons";

export function SettingProfileSlider() {
	const { userMyProfile } = store.getState();
	const [photoPosition, setPhotoPosition] = useState(0);
	const checkMainPhoto = useRef<HTMLDivElement>(null);
	const { data, error, queryCheckPhoto } = useQueryCheckPhoto();

	useEffect(() => {
		if (data) {
			const newUserMyProfile = { ...userMyProfile };
			newUserMyProfile.photolink = data.photolink;
			newUserMyProfile.photomain = data.photomain;

			store.dispatch(userMyProfileAction(newUserMyProfile));
			modalMessageOpen("Успешно сохранено!");
		}
	}, [data, error]);

	useEffect(() => {
		setPhotoPosition(userMyProfile.photolink.length - 1);
	}, [userMyProfile.photolink.length]);

	useEffect(() => {
		setPhotoPosition(userMyProfile.photomain);
		changeCheckPhotoMain();
	}, [userMyProfile.photomain]);

	useEffect(() => {
		changeCheckPhotoMain();
	}, [photoPosition]);

	const changeCheckPhotoMain = () => {
		if (!checkMainPhoto.current) return;

		if (photoPosition === userMyProfile.photomain) {
			checkMainPhoto.current.classList.remove("bg-white");
			checkMainPhoto.current.classList.add("bg-lime-400");
		} else {
			checkMainPhoto.current.classList.remove("bg-lime-400");
			checkMainPhoto.current.classList.add("bg-white");
		}
	};

	const leftBtnSlideHandler = () => {
		let photoPos = photoPosition;

		if (userMyProfile.photolink.length > 0) {
			photoPos--;

			if (photoPos < 0) {
				photoPos = userMyProfile.photolink.length - 1;
			}
		}

		setPhotoPosition(photoPos);
	};

	const rightBtnSlideHandler = () => {
		let photoPos = photoPosition;

		if (userMyProfile.photolink.length > 0) {
			photoPos++;

			if (photoPos > userMyProfile.photolink.length - 1) {
				photoPos = 0;
			}
		}

		setPhotoPosition(photoPos);
	};

	const checkMainPhotoHandler = () => {
		const data: IQueryPhoto = {
			photoPos: photoPosition,
		};

		queryCheckPhoto(data);
	};

	return (
		<div className="flex flex-col">
			<div className="flex justify-center m-1">
				<PhotoProfile src={userMyProfile.photolink[photoPosition]}>
					{userMyProfile.photolink.length ? (
						<div
							className="flex justify-center absolute left-0 m-4 cursor-pointer rounded-full shadow-[0px_0px_3px_3px] shadow-lime-300 text-black bg-lime-400 select-none h-6 w-6"
							title="Сделать главным фото"
							ref={checkMainPhoto}
							onClick={checkMainPhotoHandler}
						>
							&#10004;
						</div>
					) : (
						<></>
					)}
					{userMyProfile.photolink.length ? (
						<ButtonClose
							title="Удалить фото"
							onClick={() => {
								modalPhotoDeleteOpen(photoPosition);
							}}
						></ButtonClose>
					) : (
						<></>
					)}
				</PhotoProfile>
			</div>

			<div className="flex justify-center m-1 rounded-md">
				<SliderPhotoBtnLeft
					photolink={userMyProfile.photolink}
					onClick={leftBtnSlideHandler}
				/>
				<SliderPhotoBtnAdd
					photolink={userMyProfile.photolink}
					onClick={modalPhotoEditorOpen}
				/>
				<SliderPhotoBtnRight
					photolink={userMyProfile.photolink}
					onClick={rightBtnSlideHandler}
				/>
			</div>

			<div className="flex flex-wrap justify-center m-1">
				{userMyProfile.photolink.map((value, index) => {
					return (
						<PhotoProfileLittle
							src={value}
							key={"slide" + value}
							onClick={() => {
								setPhotoPosition(index);
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}
