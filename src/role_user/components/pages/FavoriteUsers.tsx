import { useEffect } from "react";
import { LabelPageName } from "../../../role_all/components/utils/Labels";
import {
	userProfileAction,
	usersProfilesAction,
} from "../../../role_all/store/redusers/profile";
import { lazyloadingusercount } from "../../../config";
import { modalDialogClose } from "../../../role_all/components/modal/ModalDialog";
import { modalMessageOpen } from "../../../role_all/components/modal/ModalMessage";
import { MainScrollWrapper } from "../../../role_all/components/wrappers/MainScrollWrapper";
import { useQueryGetProfilesForFavorite } from "../../api/profile/profile.api.hook";
import { UserProfileFilters } from "../../../role_all/components/widgets/userprofile/UserProfileFilters";
import { IQueryGetProfiles } from "../../api/profile/iprofile.api";
import { storeAll } from "../../../role_all/store/storeAll";
import { store } from "../../store/store";
import { UserProfilesShort } from "../widgets/userprofileshort/UserProfilesShort";

export function FavoriteUsers() {
	const { userMyProfile, usersProfiles, userProfile } = storeAll.getState();
	const { filtersUser } = store.getState();
	const {
		dataGetProfilesForFavorite,
		errorGetProfilesForFavorite,
		loadedGetProfilesForFavorite,
		querySendGetProfilesForFavorite,
	} = useQueryGetProfilesForFavorite();

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
	}, [filtersUser]);

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

		storeAll.dispatch(usersProfilesAction(newUsersProfiles));
	}, [dataGetProfilesForFavorite]);

	useEffect(() => {
		if (!errorGetProfilesForFavorite) return;

		modalMessageOpen(errorGetProfilesForFavorite.response.data.message);
	}, [errorGetProfilesForFavorite]);

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
			<UserProfileFilters
				basefilters={userMyProfile.paid.filtersfavoriteusers.enabled}
				longfilters={
					userMyProfile.paid.longfiltersfavoriteusers.enabled
				}
			/>
			<div className="flex flex-row flex-wrap justify-center">
				<UserProfilesShort />
			</div>
		</MainScrollWrapper>
	);
}
