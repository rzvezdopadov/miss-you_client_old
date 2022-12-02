import * as React from "react";
import { useEffect, useState } from "react";
import { store } from "../../../../utils/store";
import { openModalPhotoDelete } from "../../../Modal/ModalPhotoDelete/ModalPhotoDelete";

export function SettingProfileSlider() {
	const { userMyProfile } = store.getState();
	const [positionPhoto, setPositionPhoto] = useState(0);

	useEffect(() => {
		setPositionPhoto(userMyProfile.photomain);
	}, [userMyProfile.photomain]);

	const leftBtnSlideHandler = () => {
		let posPhoto = positionPhoto;

		if (userMyProfile.photolink.length > 0) {
			posPhoto--;

			if (posPhoto < 0) {
				posPhoto = userMyProfile.photolink.length - 1;
			}
		}

		setPositionPhoto(posPhoto);
	};

	const rightBtnSlideHandler = () => {
		let posPhoto = positionPhoto;

		if (userMyProfile.photolink.length > 0) {
			posPhoto++;

			if (posPhoto > userMyProfile.photolink.length - 1) {
				posPhoto = 0;
			}
		}

		setPositionPhoto(posPhoto);
	};

	return (
		<div className="flex flex-col">
			<div className="flex justify-center m-1">
				<div
					style={{
						backgroundImage:
							"URL(" +
							userMyProfile.photolink[positionPhoto] +
							")",
					}}
					className="flex relative bg-center bg-cover bg-no-repeat shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-2xl justify-center h-80 w-80 m-1"
				>
					{userMyProfile.photolink.length ? (
						<div
							className="flex justify-center absolute right-0 m-4 cursor-pointer rounded-full shadow-[0px_0px_3px_3px] shadow-lime-300 bg-red-500 h-6 w-6"
							title="Удалить фото"
							onClick={() => {
								openModalPhotoDelete(positionPhoto);
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
				<div
					className="flex select-none bg-gray-300 text-black text-xl border-yellow-300 border-2 font-bold justify-center cursor-pointer m-1 w-24 rounded-md"
					title="Добавить фото"
				>
					+
				</div>
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
								setPositionPhoto(index);
							}}
							className="flex bg-center bg-cover bg-no-repeat shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-2xl cursor-pointer justify-center ml-2 mr-2 h-16 w-16 m-1"
						></div>
					);
				})}
			</div>
		</div>
	);
}
