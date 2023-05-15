import * as React from "react";
import { LabelCash, LabelRating } from "../../utils/Labels";
import { onChangeValueProfile } from "../../../helpers/profile";
import { Input } from "../../utils/Inputs";
import { storeAll } from "../../../store/storeAll";

export function SettingProfileAbout() {
	const { userMyProfile } = storeAll.getState();

	const nameOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeValueProfile(e, "name", "string");
	};
	const discriptionOnChangeHandler = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		onChangeValueProfile(e, "discription", "string");
	};

	return (
		<div className="flex flex-col w-full">
			<LabelCash value={userMyProfile.cash} />
			<LabelRating value={userMyProfile.rating} />
			<Input
				value={userMyProfile.name}
				onChange={nameOnChangeHandler}
				type={"name"}
				placeholder={"Ваше имя"}
			/>

			<div className="flex flex-col my-1">
				<textarea
					value={userMyProfile.discription}
					onChange={discriptionOnChangeHandler}
					title="О себе"
					className="flex text-center resize-none rounded-md shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-300 text-black m-1"
					placeholder="О себе"
				></textarea>
			</div>
		</div>
	);
}
