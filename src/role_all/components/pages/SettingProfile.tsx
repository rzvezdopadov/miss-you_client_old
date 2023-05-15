import { useEffect } from "react";
import { ModalPhotoDelete } from "../modal/ModalPhotoDelete";
import { ModalSettingProfileCharacters } from "../modal/ModalSettingProfileCharacters";
import { SettingProfileAbout } from "../widgets/settingprofile/SettingProfileAbout";
import { SettingProfileCharacters } from "../widgets/settingprofile/SettingProfileCharacters";
import { SettingProfileFilters } from "../widgets/settingprofile/SettingProfileFilters";
import { SettingProfileGeneral } from "../widgets/settingprofile/SettingProfileGeneral";
import { SettingProfileInterests } from "../widgets/settingprofile/SettingProfileInterests";
import { SettingProfileSlider } from "../widgets/settingprofile/SettingProfileSlider";
import { ModalPhotoEditor } from "../modal/ModalPhotoEditor";
import { LabelPageName } from "../utils/Labels";
import { Button } from "../utils/Buttons";
import { SettingProfileChangePass } from "../widgets/settingprofile/SettingProfileChangePass";
import { modalMessageOpen } from "../modal/ModalMessage";
import { userMyProfileAction } from "../../store/redusers/profile";
import { filtersUserAction } from "../../../role_user/store/redusers/filters";
import { MainScrollWrapper } from "../wrappers/MainScrollWrapper";
import { WidgetWrapper } from "../wrappers/WidgetWrapper";
import { SettingProfileDeleteAcc } from "../widgets/settingprofile/SettingProfileDeleteAcc";
import { storeAll } from "../../store/storeAll";
import { useQuerySetProfile } from "../../api/profile/profile.api.hook";
import { IQuerySetProfile } from "../../api/profile/iprofile.api";

export function SettingProfile() {
	const { userMyProfile } = storeAll.getState();
	const { dataSetProfile, errorSetProfile, querySendSetProfile } =
		useQuerySetProfile();

	useEffect(() => {
		if (dataSetProfile) {
			storeAll.dispatch(filtersUserAction(dataSetProfile.filters));
			storeAll.dispatch(userMyProfileAction(dataSetProfile));
			modalMessageOpen("Успешно сохранено!");
		} else if (errorSetProfile) {
			modalMessageOpen(errorSetProfile.response.data.message);
		}
	}, [dataSetProfile, errorSetProfile]);

	const btnSaveOnClickHandler = () => {
		const data: IQuerySetProfile = {
			profile: { ...userMyProfile },
		};

		data.profile.likes = [];

		querySendSetProfile(data);
	};

	return (
		<MainScrollWrapper shadow={true} color={true}>
			<WidgetWrapper col={true}>
				<LabelPageName value={`Настройки профиля`} />
				<SettingProfileSlider />
				<SettingProfileAbout />
				<SettingProfileGeneral />
				<SettingProfileInterests />
				<SettingProfileCharacters />
				<SettingProfileFilters />
				<Button onClick={btnSaveOnClickHandler} value={`Сохранить`} />
			</WidgetWrapper>
			<SettingProfileChangePass />
			<SettingProfileDeleteAcc />
			<ModalSettingProfileCharacters />
			<ModalPhotoDelete />
			<ModalPhotoEditor />
		</MainScrollWrapper>
	);
}
