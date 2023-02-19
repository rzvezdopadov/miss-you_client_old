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

export function AdminProfiles() {
	const { adminFiltersUser, userMyProfile, usersProfiles, userProfile } =
		store.getState();
	const {
		dataGetAdminProfiles,
		errorGetAdminProfiles,
		querySendGetAdminProfiles,
	} = useQueryGetAdminProfiles();
	const scrollTopDiv = useRef(null);
	const scrollToTopBtn = useRef(null);

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

	const onScrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
		const scrollBottom =
			e.currentTarget.scrollTop + e.currentTarget.offsetHeight ===
			e.currentTarget.scrollHeight;

		if (scrollBottom) {
			querySendGetProfilesLocal(usersProfiles.length);
		}

		invisibleOnScrollToTop(e, scrollToTopBtn);
	};

	return (
		<div className="flex h-full w-full justify-center">
			<div
				className="flex overflow-y-scroll relative bg-gray-700 text-neutral-50 flex-col shadow-md rounded-3xl px-8 pt-2 pb-2 w-full"
				onScroll={onScrollHandler}
				ref={scrollTopDiv}
			>
				<ButtonScrollToTop
					scrollTopDiv={scrollTopDiv}
					scrollToTopBtn={scrollToTopBtn}
				/>
				<LabelHeader value={`Пользователи`} />
				<div className="flex justify-center">
					<AdminUserProfileFilters />
				</div>
				<div className="flex flex-row flex-wrap justify-center">
					<UserProfileShortWrapper />
				</div>
				<ModalUserProfileWrapper />
				<ModalDialog />
			</div>
		</div>
	);
}
