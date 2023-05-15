import * as React from "react";
import { useState } from "react";
import { userMyProfileAction } from "../../../store/redusers/profile";
import { WidgetWrapper } from "../../wrappers/WidgetWrapper";
import { LabelWidget } from "../../utils/Labels";
import { storeAll } from "../../../store/storeAll";

export function SettingProfileInterests() {
	const { userMyProfile } = storeAll.getState();
	const [interest, setInterest] = useState("");

	const interestAddOnKeyPressHandler = (e: { key: string }) => {
		if (e.key === "Enter") interestAddOnClickHandler();
	};

	const interestOnChangeHandler = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setInterest(e.target.value);
	};

	const interestAddOnClickHandler = () => {
		if (!interest) return;

		const newProfile = { ...userMyProfile };
		newProfile.interests = [...newProfile.interests];
		newProfile.interests.push(interest.toLowerCase() as never);
		storeAll.dispatch(userMyProfileAction(newProfile));

		setInterest("");
	};

	const interestDeleteOnClickHandler = (value: never) => {
		const index = userMyProfile.interests.indexOf(value);

		if (index === -1) return;

		const newProfile = { ...userMyProfile };
		newProfile.interests = [...newProfile.interests];
		newProfile.interests.splice(index, 1);
		storeAll.dispatch(userMyProfileAction(newProfile));
	};

	return (
		<WidgetWrapper wrap={true}>
			<LabelWidget value={"Интересы:"} />

			{userMyProfile.interests.map((value, index) => {
				return (
					<div
						key={"interest" + index}
						className="flex select-none items-center bg-gray-900 shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-1 m-2"
					>
						{value}
						<div
							className="flex ml-2 justify-center cursor-pointer text-xs rounded-full shadow-[0px_0px_3px_3px] shadow-lime-300 bg-red-500 h-4 w-4"
							title="Удалить интерес"
							onClick={() =>
								interestDeleteOnClickHandler(value as never)
							}
						>
							X
						</div>
					</div>
				);
			})}

			<div className="flex bg-gray-900 shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl items-center m-2">
				<input
					className="flex  bg-gray-300 w-full text-center text-black m-1 px-1 rounded-lg"
					value={interest}
					onChange={interestOnChangeHandler}
					onKeyDown={interestAddOnKeyPressHandler}
				/>
				<div
					className="flex border-2 rounded-full cursor-pointer border-white justify-center items-center text-lg m-2 h-8 w-8"
					onClick={interestAddOnClickHandler}
				>
					+
				</div>
			</div>
		</WidgetWrapper>
	);
}
