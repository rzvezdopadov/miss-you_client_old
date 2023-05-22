import { useEffect } from "react";
import { LabelPageName } from "../../../role_all/components/utils/Labels";
import {
	userProfileAction,
	usersProfilesAction,
} from "../../../role_all/store/redusers/profile";
import {
	ModalDialog,
	modalDialogClose,
} from "../../../role_all/components/modal/ModalDialog";
import { modalMessageOpen } from "../../../role_all/components/modal/ModalMessage";
import { lazyloadingusercount } from "../../../config";
import { MainScrollWrapper } from "../../../role_all/components/wrappers/MainScrollWrapper";
import { ModalUserProfile } from "../modal/ModalUserProfile";
import { IQueryGetProfiles } from "../../api/profile/iprofile.api";
import { useQueryGetProfiles } from "../../api/profile/profile.api.hook";
import { UserProfilesShort } from "../widgets/userprofileshort/UserProfilesShort";
import { storeAll } from "../../../role_all/store/storeAll";
import { store } from "../../store/store";
import { UserProfileFiltersWidget } from "../widgets/userprofile/UserProfileFiltersWidget";

export function Profiles() {
	const { userMyProfile, usersProfiles, userProfile } = storeAll.getState();
	const { userFilters } = store.getState();
	const {
		dataGetProfiles,
		errorGetProfiles,
		loadedGetProfiles,
		querySendGetProfiles,
	} = useQueryGetProfiles();

	useEffect(() => {
		return () => {
			storeAll.dispatch(usersProfilesAction([]));
			storeAll.dispatch(
				userProfileAction({
					enabled: false,
					profile: { ...userProfile.profile },
				})
			);
			modalDialogClose();
		};
	}, []);

	useEffect(() => {
		storeAll.dispatch(usersProfilesAction([]));
		querySendGetProfilesLocal(0);
	}, [userFilters]);

	useEffect(() => {
		if (!dataGetProfiles) return;
		if (dataGetProfiles.length === 0) return;

		const index = usersProfiles.findIndex(
			(value) => value.userid === dataGetProfiles[0].userid
		);
		if (index !== -1) return;

		let newUsersProfiles = [...usersProfiles, ...dataGetProfiles];

		storeAll.dispatch(usersProfilesAction(newUsersProfiles));
	}, [dataGetProfiles]);

	useEffect(() => {
		if (!errorGetProfiles) return;

		modalMessageOpen(errorGetProfiles.response.data.message);
	}, [errorGetProfiles]);

	const querySendGetProfilesLocal = (startcount: number) => {
		const data: IQueryGetProfiles = {
			startcount: startcount,
			amount: lazyloadingusercount,
			filters: {
				userid: String(userFilters.userid),
				location: userFilters.location,
				agestart: Number(userFilters.agestart),
				ageend: Number(userFilters.ageend),
				growthstart: Number(userFilters.growthstart),
				growthend: Number(userFilters.growthend),
				weight: Number(userFilters.weight),
				signzodiac: Number(userFilters.signzodiac),
				gender: Number(userFilters.gender),
				gendervapor: Number(userFilters.gendervapor),
				education: Number(userFilters.education),
				fieldofactivity: Number(userFilters.fieldofactivity),
				maritalstatus: Number(userFilters.maritalstatus),
				children: Number(userFilters.children),
				religion: Number(userFilters.religion),
				smoke: Number(userFilters.smoke),
				alcohol: Number(userFilters.alcohol),
				profit: Number(userFilters.profit),
				acctype: userFilters.acctype,
				interests: [],
			},
		};

		if (userMyProfile.userid) querySendGetProfiles(data);
	};

	return (
		<MainScrollWrapper
			clbkScrollBottom={() =>
				querySendGetProfilesLocal(usersProfiles.length)
			}
			loader={loadedGetProfiles}
			shadow={true}
			color={true}
		>
			<LabelPageName value={`Пользователи`} />
			<div className="flex justify-center">
				<UserProfileFiltersWidget />
			</div>
			<div className="flex flex-row flex-wrap justify-center">
				<UserProfilesShort />
			</div>
		</MainScrollWrapper>
	);
}
