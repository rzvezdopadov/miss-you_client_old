import * as React from "react";
import { useEffect } from "react";
import { useQuerySetProfile } from "../../hooks/api.hook";
import { IQuerySetProfile } from "../../interfaces/iquery";
import { store } from "../../store/store";
import { ModalPhotoDelete } from "../modal/ModalPhotoDelete";
import { ModalSettingProfileCharacters } from "../modal/ModalSettingProfileCharacters";
import { SettingProfileAbout } from "../widgets/settingprofile/SettingProfileAbout";
import { SettingProfileCharacters } from "../widgets/settingprofile/SettingProfileCharacters";
import { SettingProfileFilters } from "../widgets/settingprofile/SettingProfileFilters";
import { SettingProfileGeneral } from "../widgets/settingprofile/SettingProfileGeneral";
import { SettingProfileInterests } from "../widgets/settingprofile/SettingProfileInterests";
import { SettingProfileSlider } from "../widgets/settingprofile/SettingProfileSlider";
import { ModalPhotoEditor } from "../modal/ModalPhotoEditor";
import { LabelHeader } from "../utils/Labels";
import { Button } from "../utils/Buttons";
import { SettingProfileChangePass } from "../widgets/settingprofile/SettingProfileChangePass";
import { modalMessageOpen } from "../modal/ModalMessage";
import { userMyProfileAction } from "../../store/redusers/profile";
import { filtersUserAction } from "../../store/redusers/filterusers";

export function SettingProfile() {
	const { userMyProfile } = store.getState();
	const { data, error, querySendSetProfile } = useQuerySetProfile();

	useEffect(() => {
		if (data) {
			store.dispatch(filtersUserAction(data.filters));
			store.dispatch(userMyProfileAction(data));
			modalMessageOpen("Успешно сохранено!");
		} else if (error) {
			modalMessageOpen(error.response.data.message);
		}
	}, [data, error]);

	const btnSaveOnClickHandler = () => {
		const data: IQuerySetProfile = {
			profile: { ...userMyProfile },
		};

		data.profile.likes = [];

		querySendSetProfile(data);
	};

	return (
		<>
			<div className="flex flex-col fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl overflow-y-scroll lg:overflow-auto top-20 bottom-6 left-0 right-0 m-auto px-2 pt-2 pb-2 lg:h-2/3 lg:max-w-5xl">
				<LabelHeader value={`Настройки профиля`} />
				<SettingProfileSlider />
				<SettingProfileAbout />
				<SettingProfileGeneral />
				<SettingProfileInterests />
				<SettingProfileCharacters />
				<SettingProfileFilters />
				<Button onClick={btnSaveOnClickHandler} value={`Сохранить`} />
				<SettingProfileChangePass />
			</div>

			<ModalSettingProfileCharacters />
			<ModalPhotoDelete />
			<ModalPhotoEditor />
		</>
	);
}
