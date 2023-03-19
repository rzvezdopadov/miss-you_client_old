import * as React from "react";
import { useState } from "react";
import { store } from "../../../store/store";
import {
	SliderPhotoBtnLeft,
	SliderPhotoBtnLike,
	SliderPhotoBtnRight,
} from "../../utils/Sliders";
import { setLike } from "../../utils/Socket";
import { PhotoProfile } from "../utils/Photo";

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
			<PhotoProfile
				src={userProfile.profile.photolink[positionPhoto]}
				onClick={rightBtnSlideHandler}
			></PhotoProfile>

			<div className="flex justify-center m-1">
				{positionPhoto + 1} / {userProfile.profile.photolink.length}
			</div>

			<div className="flex justify-center cursor-pointer m-1 rounded-md">
				<SliderPhotoBtnLeft
					photolink={userProfile.profile.photolink}
					onClick={leftBtnSlideHandler}
				/>
				<SliderPhotoBtnLike
					likes={userProfile.profile.likes}
					onClick={setLike}
				/>
				<SliderPhotoBtnRight
					photolink={userProfile.profile.photolink}
					onClick={rightBtnSlideHandler}
				/>
			</div>
		</>
	);
}
