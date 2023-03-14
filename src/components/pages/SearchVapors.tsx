import * as React from "react";
import { useEffect, useRef } from "react";
import { store } from "../../store/store";
import { UserProfileFilters } from "../widgets/userprofile/UserProfileFilters";
import { LabelHeader } from "../utils/Labels";
import {
	userProfileAction,
	usersProfilesAction,
} from "../../store/redusers/profile";
import { lazyloadingusercount } from "../../config";
import { ButtonScrollToTop } from "../utils/Buttons";
import { ModalDialog, modalDialogClose } from "../modal/ModalDialog";
import { modalMessageOpen } from "../modal/ModalMessage";
import { UserProfileShortWrapper } from "../widgets/userprofile/UserProfileShortWrapper";
import { ModalUserProfileWrapper } from "../wrappers/ModalUserProfileWrapper";
import { useQueryGetProfiles } from "../../api/profile/profile.api.hook";
import { IQueryGetProfiles } from "../../api/profile/iprofile.api";
import { MainScrollWrapper } from "../wrappers/MainScrollWrapper";

export function SearchVapors() {
	const { filtersUser, userMyProfile, usersProfiles, userProfile } =
		store.getState();
	const {
		dataGetProfiles,
		errorGetProfiles,
		loadedGetProfiles,
		querySendGetProfiles,
	} = useQueryGetProfiles();
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
	}, [filtersUser]);

	useEffect(() => {
		if (!dataGetProfiles) return;
		if (dataGetProfiles.length === 0) return;

		const index = usersProfiles.findIndex(
			(value) => value.userid === dataGetProfiles[0].userid
		);
		if (index !== -1) return;

		let newUsersProfiles = [...usersProfiles, ...dataGetProfiles];

		store.dispatch(usersProfilesAction(newUsersProfiles));
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
				location: filtersUser.location,
				agestart: Number(filtersUser.agestart),
				ageend: Number(filtersUser.ageend),
				growthstart: Number(filtersUser.growthstart),
				growthend: Number(filtersUser.growthend),
				weight: Number(filtersUser.weight),
				signzodiac: Number(filtersUser.signzodiac),
				gendervapor: Number(filtersUser.gendervapor),
				education: Number(filtersUser.education),
				fieldofactivity: Number(filtersUser.fieldofactivity),
				maritalstatus: Number(filtersUser.maritalstatus),
				children: Number(filtersUser.children),
				religion: Number(filtersUser.religion),
				smoke: Number(filtersUser.smoke),
				alcohol: Number(filtersUser.alcohol),
				profit: Number(filtersUser.profit),
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
		>
			<>
				<ButtonScrollToTop
					scrollTopDiv={scrollTopDiv}
					scrollToTopBtn={scrollToTopBtn}
				/>
				<LabelHeader value={`Поиск пары`} />
				<div className="flex justify-center">
					<UserProfileFilters />
				</div>
				<div className="flex flex-row flex-wrap justify-center">
					<UserProfileShortWrapper />
				</div>
				<ModalUserProfileWrapper />
				<ModalDialog />
			</>
		</MainScrollWrapper>
	);
}
