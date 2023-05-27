import { useState } from "react";
import {
	SliderPhotoBtnLeft,
	SliderPhotoBtnRight,
} from "../../../../role_all/components/utils/Sliders";
import { PhotoProfile } from "../../../../role_all/components/widgets/utils/Photo";
import { ButtonClose } from "../../../../role_all/components/utils/Buttons";
import { modalPhotoDeleteOpen } from "../../modal/ModalPhotoDelete";
import { store } from "../../../store/store";

export function UserProfileSlider() {
	const { userProfile } = store.getState();
	const [positionPhoto, setPositionPhoto] = useState(0);

	if (positionPhoto > userProfile.profile.photolink.length - 1) {
		setTimeout(() => {
			setPositionPhoto(0);
		}, 50);
	}

	const leftBtnSlideHandler = () => {
		let posPhoto = positionPhoto;

		if (userProfile.profile.photolink.length > 0) {
			posPhoto--;

			if (posPhoto < 0) {
				posPhoto = userProfile.profile.photolink.length - 1;
			}
		}

		setPositionPhoto(posPhoto);
	};

	const rightBtnSlideHandler = () => {
		let posPhoto = positionPhoto;

		if (userProfile.profile.photolink.length > 0) {
			posPhoto++;

			if (posPhoto > userProfile.profile.photolink.length - 1) {
				posPhoto = 0;
			}
		}

		setPositionPhoto(posPhoto);
	};

	return (
		<>
			<PhotoProfile src={userProfile.profile.photolink[positionPhoto]}>
				{userProfile.profile.photolink.length ? (
					<ButtonClose
						title="Удалить фото"
						onClick={() => {
							modalPhotoDeleteOpen(positionPhoto);
						}}
					></ButtonClose>
				) : (
					<></>
				)}
			</PhotoProfile>

			<div className="flex justify-center m-1">
				{positionPhoto + 1} / {userProfile.profile.photolink.length}
			</div>

			<div className="flex justify-center cursor-pointer m-1 rounded-md">
				<SliderPhotoBtnLeft
					photolink={userProfile.profile.photolink}
					onClick={leftBtnSlideHandler}
				/>

				<SliderPhotoBtnRight
					photolink={userProfile.profile.photolink}
					onClick={rightBtnSlideHandler}
				/>
			</div>
		</>
	);
}
