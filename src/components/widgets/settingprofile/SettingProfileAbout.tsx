import * as React from "react";
import { store } from "../../../store/store";
import { LabelCash, LabelRating } from "../../utils/Labels";
import { onChangeValueProfile } from "../../../helpers/profile";

export function SettingProfileAbout() {
	const { userMyProfile } = store.getState();

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
			<div className="flex flex-col my-1">
				<input
					value={userMyProfile.name}
					onChange={nameOnChangeHandler}
					title="Ваше имя"
					className="flex text-center rounded-md shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-300 text-black m-1"
					placeholder="Ваше имя"
				/>
			</div>

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
