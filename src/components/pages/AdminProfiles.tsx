import { useEffect, useRef } from "react";
import { store } from "../../store/store";
import { LabelHeader } from "../utils/Labels";
import {
	userProfileAction,
	usersProfilesAction,
} from "../../store/redusers/profile";
import { ModalDialog, modalDialogClose } from "../modal/ModalDialog";
import { modalMessageOpen } from "../modal/ModalMessage";
import { lazyloadingusercount } from "../../config";
import { invisibleOnScrollToTop } from "../../helpers/pagescroll";
import { ButtonScrollToTop } from "../utils/Buttons";
import { UserProfileShortWrapper } from "../widgets/userprofile/UserProfileShortWrapper";
import { AdminUserProfileFilters } from "../widgets/admin/AdminUserProfileFilters";
import { ModalUserProfileWrapper } from "../wrappers/ModalUserProfileWrapper";
import { useQueryGetAdminProfiles } from "../../api/admin/admin.api.hook";
import { IQueryGetAdminProfiles } from "../../api/admin/iadmin.api";
import { MainScrollWrapper } from "../wrappers/MainScrollWrapper";

export function AdminProfiles() {
	const { adminFiltersUser, userMyProfile, usersProfiles, userProfile } =
		store.getState();
	const {
		dataGetAdminProfiles,
		errorGetAdminProfiles,
		querySendGetAdminProfiles,
	} = useQueryGetAdminProfiles();

	useEffect(() => {
		return () => {
			store.dispatch(usersProfilesAction([]));
			store.dispatch(
				userProfileAction(false, { ...userProfile.profile })
			);
			modalDialogClose();
		};
	}, []);

	useEffect(() => {
		store.dispatch(usersProfilesAction([]));
		querySendGetProfilesLocal(0);
	}, [adminFiltersUser]);

	useEffect(() => {
		if (!dataGetAdminProfiles) return;

		let newUsersProfiles = [...usersProfiles, ...dataGetAdminProfiles];

		store.dispatch(usersProfilesAction(newUsersProfiles));
	}, [dataGetAdminProfiles]);

	useEffect(() => {
		if (!errorGetAdminProfiles) return;

		modalMessageOpen(errorGetAdminProfiles.response.data.message);
	}, [errorGetAdminProfiles]);

	const querySendGetProfilesLocal = (startcount: number) => {
		const data: IQueryGetAdminProfiles = {
			startcount: startcount,
			amount: lazyloadingusercount,
			filters: {
				userid: String(adminFiltersUser.userid),
				location: adminFiltersUser.location,
				agestart: Number(adminFiltersUser.agestart),
				ageend: Number(adminFiltersUser.ageend),
				growthstart: Number(adminFiltersUser.growthstart),
				growthend: Number(adminFiltersUser.growthend),
				weight: Number(adminFiltersUser.weight),
				signzodiac: Number(adminFiltersUser.signzodiac),
				gender: Number(adminFiltersUser.gender),
				gendervapor: Number(adminFiltersUser.gendervapor),
				education: Number(adminFiltersUser.education),
				fieldofactivity: Number(adminFiltersUser.fieldofactivity),
				maritalstatus: Number(adminFiltersUser.maritalstatus),
				children: Number(adminFiltersUser.children),
				religion: Number(adminFiltersUser.religion),
				smoke: Number(adminFiltersUser.smoke),
				alcohol: Number(adminFiltersUser.alcohol),
				profit: Number(adminFiltersUser.profit),
				acctype: adminFiltersUser.acctype,
				interests: [],
			},
		};

		if (userMyProfile.userid) querySendGetAdminProfiles(data);
	};

	return (
		<MainScrollWrapper
			clbkScrollBottom={() =>
				querySendGetProfilesLocal(usersProfiles.length)
			}
			shadow={true}
			color={true}
		>
			<LabelHeader value={`Пользователи`} />
			<div className="flex justify-center">
				<AdminUserProfileFilters />
			</div>
			<div className="flex flex-row flex-wrap justify-center">
				<UserProfileShortWrapper />
			</div>
			<ModalUserProfileWrapper />
			<ModalDialog />
		</MainScrollWrapper>
	);
}
