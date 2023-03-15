import * as React from "react";
import { useEffect, useState } from "react";
import { store } from "../../store/store";
import { ModalUserProfile } from "../modal/ModalUserProfile";
import { LabelHeader } from "../utils/Labels";
import {
	userProfileAction,
	usersProfilesAction,
} from "../../store/redusers/profile";
import { lazyloadingusercount } from "../../config";
import { ModalDialog, modalDialogClose } from "../modal/ModalDialog";
import { modalMessageOpen } from "../modal/ModalMessage";
import { UserProfileShortWrapper } from "../widgets/userprofile/UserProfileShortWrapper";
import { useQueryGetProfilesForLikes } from "../../api/profile/profile.api.hook";
import { IQueryGetProfilesForLikes } from "../../api/profile/iprofile.api";
import { MainScrollWrapper } from "../wrappers/MainScrollWrapper";

export function Vapors() {
	const { userMyProfile, usersProfiles, userProfile } = store.getState();
	const {
		dataGetProfilesForLikes,
		errorGetProfilesForLikes,
		loadedGetProfilesForLikes,
		querySendGetProfilesForLikes,
	} = useQueryGetProfilesForLikes();
	const [likes, setLikes] = useState(userMyProfile.likes);

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
		if (userMyProfile.userid !== "") {
			setLikes(userMyProfile.likes);
		}
	}, [userMyProfile.userid]);

	useEffect(() => {
		querySendGetProfilesLocal(0);
	}, [likes]);

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
		const data: IQueryGetProfilesForLikes = {
			startcount: startcount,
			amount: lazyloadingusercount,
		};

		if (userMyProfile.userid) querySendGetProfilesForLikes(data);
	};

	return (
		<MainScrollWrapper
			clbkScrollBottom={() =>
				querySendGetProfilesLocal(usersProfiles.length)
			}
			loader={loadedGetProfilesForLikes}
		>
			<LabelHeader value={`Кто меня лайкнул`} />
			<div className="flex flex-row flex-wrap justify-center">
				<UserProfileShortWrapper />
			</div>
			<ModalUserProfile />
			<ModalDialog />
		</MainScrollWrapper>
	);
}
