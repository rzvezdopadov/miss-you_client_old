import { useEffect, useState } from "react";
import { IProfile } from "../../interfaces/iprofiles";
import {
	settingProfileCharactersAction,
	userMyProfileAction,
} from "../../store/redusers/profile";
import { storeAll } from "../../store/storeAll";
import { useRefDivVisible } from "../../hooks/form.hook";
import { Button, ButtonClose } from "../utils/Buttons";
import {
	data_iDontLikeСharacter,
	data_iLikeСharacter,
} from "../../data/profiles";
import { SettingProfileCharacter } from "../widgets/settingprofile/SettingProfileCharacter";

export function modalSettingProfileCharactersOpen() {
	storeAll.dispatch(settingProfileCharactersAction(true));
}

function modalSettingProfileCharactersClose(profile: IProfile) {
	storeAll.dispatch(settingProfileCharactersAction(false));
	storeAll.dispatch(userMyProfileAction(profile));
}

export function ModalSettingProfileCharacters() {
	const { settingProfileCharacters, userMyProfile } = storeAll.getState();
	const myProfile: IProfile = userMyProfile;
	const [profile, setProfile] = useState(myProfile);
	const refSettingProfileCharacters = useRefDivVisible(
		settingProfileCharacters
	);

	const closeUserProfileHandler = () => {
		modalSettingProfileCharactersClose(profile);
	};

	const invertCharacter = (arr: Array<number>, id: number) => {
		const newArr = [...arr];
		if (newArr.includes(id)) {
			newArr.splice(newArr.indexOf(id), 1);
		} else {
			newArr.push(id);
		}

		return newArr;
	};

	const likeCharacterChangeHandler = (id: number) => {
		const newArr = invertCharacter(profile.ilikecharacter, id);
		const newProfile = { ...profile };
		newProfile.ilikecharacter = newArr as any;
		setProfile(newProfile);
	};

	const dontlikeCharacterChangeHandler = (id: number) => {
		const newArr = invertCharacter(profile.idontlikecharacter, id);
		const newProfile = { ...profile };
		newProfile.idontlikecharacter = newArr as any;
		setProfile(newProfile);
	};

	useEffect(() => {
		return () => {
			storeAll.dispatch(settingProfileCharactersAction(false));
		};
	}, []);

	useEffect(() => {
		setProfile(myProfile);
	}, [myProfile]);

	return (
		<div
			ref={refSettingProfileCharacters}
			className="flex flex-col fixed justify-start bg-gray-900 border-2 border-lime-300 text-neutral-50 rounded-xl overflow-y-scroll lg:overflow-auto top-20 bottom-6 left-0 right-0 m-auto px-2 pt-2 pb-2 lg:h-2/3 lg:max-w-5xl z-10"
		>
			<ButtonClose onClick={closeUserProfileHandler} />

			<div className="flex flex-col select-none font-bold">
				Настройки качеств
			</div>

			<div className="flex flex-col select-none"> Ценю качества:</div>

			{data_iLikeСharacter.map((value, index) => {
				return (
					<SettingProfileCharacter
						id={index}
						key={value[0] + index}
						value={value[0]}
						title={value[1]}
						color={"shadow-lime-400"}
						check={profile.ilikecharacter.includes(index as never)}
						changeClbk={async (id) =>
							likeCharacterChangeHandler(id)
						}
					/>
				);
			})}

			<div className="flex flex-col select-none">
				Не нравятся качества:
			</div>

			{data_iDontLikeСharacter.map((value, index) => {
				return (
					<SettingProfileCharacter
						id={index}
						key={value[0] + index}
						value={value[0]}
						title={value[1]}
						color={"shadow-red-400"}
						check={profile.idontlikecharacter.includes(
							index as never
						)}
						changeClbk={async (id) =>
							dontlikeCharacterChangeHandler(id)
						}
					/>
				);
			})}

			<Button value={"Закрыть"} onClick={closeUserProfileHandler} />
		</div>
	);
}
