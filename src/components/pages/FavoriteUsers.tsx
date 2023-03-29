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
import { MainScrollWrapper } from "../wrappers/MainScrollWrapper";
import { useQueryGetProfilesForFavorite } from "../../api/profile/profile.api.hook";
import { IQueryGetProfilesForFavorite } from "../../api/profile/iprofile.api";

export function FavoriteUsers() {
	const { userMyProfile, usersProfiles, userProfile } = store.getState();
	const {
		dataGetProfilesForFavorite,
		errorGetProfilesForFavorite,
		loadedGetProfilesForFavorite,
		querySendGetProfilesForFavorite,
	} = useQueryGetProfilesForFavorite();
	const [favoriteUsers, setFavoriteUsers] = useState(
		userMyProfile.favoriteusers
	);

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
			setFavoriteUsers(userMyProfile.favoriteusers);
		}
	}, [userMyProfile.userid]);

	useEffect(() => {
		querySendGetProfilesLocal(0);
	}, [favoriteUsers]);

	useEffect(() => {
		if (!dataGetProfilesForFavorite) return;
		if (dataGetProfilesForFavorite.length === 0) return;

		const index = usersProfiles.findIndex(
			(value) => value.userid === dataGetProfilesForFavorite[0].userid
		);
		if (index !== -1) return;

		let newUsersProfiles = [
			...usersProfiles,
			...dataGetProfilesForFavorite,
		];

		store.dispatch(usersProfilesAction(newUsersProfiles));
	}, [dataGetProfilesForFavorite]);

	useEffect(() => {
		if (!errorGetProfilesForFavorite) return;

		modalMessageOpen(errorGetProfilesForFavorite.response.data.message);
	}, [errorGetProfilesForFavorite]);

	const querySendGetProfilesLocal = (startcount: number) => {
		const data: IQueryGetProfilesForFavorite = {
			startcount: startcount,
			amount: lazyloadingusercount,
		};

		if (userMyProfile.userid) querySendGetProfilesForFavorite(data);
	};

	return (
		<MainScrollWrapper
			clbkScrollBottom={() =>
				querySendGetProfilesLocal(usersProfiles.length)
			}
			loader={loadedGetProfilesForFavorite}
			shadow={true}
			color={true}
		>
			<LabelPageName value={`Избранные пользователи`} />
			<div className="flex flex-row flex-wrap justify-center">
				<UserProfileShortWrapper />
			</div>
		</MainScrollWrapper>
	);
}
