import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { useQueryCheckPhoto } from "../../../../hooks/api.hook";
import { IQueryPhoto } from "../../../../interfaces/iquery";
import { userMyProfileAction } from "../../../../utils/reducers";
import { store } from "../../../../utils/store";
import { openModalMessage } from "../../../Modal/ModalMessage/ModalMessage";
import { openModalPhotoDelete } from "../../../Modal/ModalPhotoDelete/ModalPhotoDelete";
import { openModalPhotoEditor } from "../../../Modal/ModalPhotoEditor/ModalPhotoEditor";

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
			openModalMessage("Успешно сохранено!");
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
				<div
					style={{
						backgroundImage:
							"URL(" +
							userMyProfile.photolink[photoPosition] +
							")",
					}}
					className="flex relative bg-center bg-cover bg-no-repeat shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-2xl justify-center h-80 w-80 m-1"
				>
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
						<div
							className="flex justify-center absolute right-0 m-4 cursor-pointer rounded-full shadow-[0px_0px_3px_3px] shadow-lime-300 bg-red-500 select-none h-6 w-6"
							title="Удалить фото"
							onClick={() => {
								openModalPhotoDelete(photoPosition);
							}}
						>
							X
						</div>
					) : (
						<></>
					)}
				</div>
			</div>

			<div className="flex justify-center m-1 rounded-md">
				{userMyProfile.photolink.length > 1 ? (
					<div
						onClick={leftBtnSlideHandler}
						className="flex select-none bg-gray-300 text-black text-xl border-lime-300 border-2 font-bold justify-center cursor-pointer m-1 w-24 rounded-md"
						title="Фото влево"
					>
						&lt;
					</div>
				) : (
					<></>
				)}
				{userMyProfile.photolink.length < 10 ? (
					<div
						onClick={openModalPhotoEditor}
						className="flex select-none bg-gray-300 text-black text-xl border-yellow-300 border-2 font-bold justify-center cursor-pointer m-1 w-24 rounded-md"
						title="Добавить фото"
					>
						+
					</div>
				) : (
					<></>
				)}
				{userMyProfile.photolink.length > 1 ? (
					<div
						onClick={rightBtnSlideHandler}
						className="flex select-none bg-gray-300 text-black text-xl border-lime-300 border-2 font-bold justify-center cursor-pointer m-1 w-24 rounded-md"
						title="Фото вправо"
					>
						&gt;
					</div>
				) : (
					<></>
				)}
			</div>

			<div className="flex flex-wrap justify-center m-1">
				{userMyProfile.photolink.map((value, index) => {
					return (
						<div
							style={{
								backgroundImage: "URL(" + value + ")",
							}}
							key={"slide" + index}
							onClick={() => {
								setPhotoPosition(index);
							}}
							className="flex bg-center bg-cover bg-no-repeat shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-2xl cursor-pointer justify-center ml-2 mr-2 h-16 w-16 m-1"
						></div>
					);
				})}
			</div>
		</div>
	);
}
