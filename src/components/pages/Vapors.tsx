import * as React from "react";
import { useEffect, useState } from "react";
import { store } from "../../store/store";
import { LabelPageName } from "../utils/Labels";
import {
	userProfileAction,
	usersProfilesAction,
} from "../../store/redusers/profile";
import { lazyloadingusercount } from "../../config";
import { modalDialogClose } from "../modal/ModalDialog";
import { modalMessageOpen } from "../modal/ModalMessage";
import { UserProfileShortWrapper } from "../widgets/userprofile/UserProfileShortWrapper";
import { useQueryGetProfilesForLikes } from "../../api/profile/profile.api.hook";
import { IQueryGetProfiles } from "../../api/profile/iprofile.api";
import { MainScrollWrapper } from "../wrappers/MainScrollWrapper";
import { UserProfileFilters } from "../widgets/userprofile/UserProfileFilters";

export function Vapors() {
	const { filtersUser, userMyProfile, usersProfiles, userProfile } =
		store.getState();
	const {
		dataGetProfilesForLikes,
		errorGetProfilesForLikes,
		loadedGetProfilesForLikes,
		querySendGetProfilesForLikes,
	} = useQueryGetProfilesForLikes();

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
		if (!dataGetProfilesForLikes) return;
		if (dataGetProfilesForLikes.length === 0) return;

		const index = usersProfiles.findIndex(
			(value) => value.userid === dataGetProfilesForLikes[0].userid
		);
		if (index !== -1) return;

		let newUsersProfiles = [...usersProfiles, ...dataGetProfilesForLikes];

		store.dispatch(usersProfilesAction(newUsersProfiles));
	}, [dataGetProfilesForLikes]);

	useEffect(() => {
		if (!errorGetProfilesForLikes) return;

		modalMessageOpen(errorGetProfilesForLikes.response.data.message);
	}, [errorGetProfilesForLikes]);

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

		if (userMyProfile.userid) querySendGetProfilesForLikes(data);
	};

	return (
		<MainScrollWrapper
			clbkScrollBottom={() =>
				querySendGetProfilesLocal(usersProfiles.length)
			}
			loader={loadedGetProfilesForLikes}
			shadow={true}
			color={true}
		>
			<LabelPageName value={`Кто меня лайкнул`} />
			<UserProfileFilters
				basefilters={userMyProfile.paid.filtersvapors.enabled}
				longfilters={userMyProfile.paid.longfiltersvapors.enabled}
			/>
			<div className="flex flex-row flex-wrap justify-center">
				<UserProfileShortWrapper />
			</div>
		</MainScrollWrapper>
	);
}
