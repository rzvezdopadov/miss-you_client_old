import * as React from "react";
import { useEffect } from "react";
import { useQuerySetProfile } from "../../../hooks/api.hook";
import { IQuerySetProfile } from "../../../interfaces/iquery";
import {
	filtersUserAction,
	userMyProfileAction,
} from "../../../utils/reducers";
import { store } from "../../../utils/store";
import { openModalMessage } from "../../Modal/ModalMessage/ModalMessage";
import { ModalPhotoDelete } from "../../Modal/ModalPhotoDelete/ModalPhotoDelete";
import { ModalSettingProfileCharacters } from "../../Modal/ModalSettingProfileCharacters/ModalSettingProfileCharacters";
import { SettingProfileAbout } from "./SettingProfileAbout/SettingProfileAbout";
import { SettingProfileCharacters } from "./SettingProfileCharacters/SettingProfileCharacters";
import { SettingProfileFilters } from "./SettingProfileFilters/SettingProfileFilters";
import { SettingProfileGeneral } from "./SettingProfileGeneral/SettingProfileGeneral";
import { SettingProfileInterests } from "./SettingProfileInterests/SettingProfileInterests";
import { SettingProfileSlider } from "./SettingProfileSlider/SettingProfileSlider";
import { ModalPhotoEditor } from "../../Modal/ModalPhotoEditor/ModalPhotoEditor";

export function SettingProfile() {
	const { userMyProfile } = store.getState();
	const { data, error, querySendSetProfile } = useQuerySetProfile();

	useEffect(() => {
		if (data) {
			store.dispatch(filtersUserAction(data.filters));
			store.dispatch(userMyProfileAction(data));
			openModalMessage("Успешно сохранено!");
		} else if (error) {
			openModalMessage(error.response.data.message);
		}
	}, [data, error]);

	const btnSaveOnClick = () => {
		const data: IQuerySetProfile = {
			profile: { ...userMyProfile },
		};

		data.profile.likes = [];

		querySendSetProfile(data);
	};

	return (
		<>
			<div className="flex flex-col fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl overflow-y-scroll lg:overflow-auto top-20 bottom-6 left-0 right-0 m-auto px-2 pt-2 pb-2 lg:h-2/3 lg:max-w-5xl">
				<div className="flex flex-col font-bold">
					{" "}
					Настройки профиля{" "}
				</div>

				<SettingProfileSlider />
				<SettingProfileAbout />
				<SettingProfileGeneral />
				<SettingProfileInterests />
				<SettingProfileCharacters />
				<SettingProfileFilters />

				<div className="flex flex-wrap justify-around m-2">
					<button
						className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline select-none"
						type="button"
						onClick={btnSaveOnClick}
					>
						Сохранить
					</button>
				</div>
			</div>

			<ModalSettingProfileCharacters />
			<ModalPhotoDelete />
			<ModalPhotoEditor />
		</>
	);
}
