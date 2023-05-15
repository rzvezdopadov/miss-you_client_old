import { useEffect } from "react";
import { LabelPageName } from "../../../role_all/components/utils/Labels";
import {
	userProfileAction,
	usersProfilesAction,
} from "../../../role_all/store/redusers/profile";
import { lazyloadingusercount } from "../../../config";
import { modalDialogClose } from "../../../role_all/components/modal/ModalDialog";
import { modalMessageOpen } from "../../../role_all/components/modal/ModalMessage";
import { useQueryGetProfilesForLikes } from "../../api/profile/profile.api.hook";
import { IQueryGetProfiles } from "../../api/profile/iprofile.api";
import { MainScrollWrapper } from "../../../role_all/components/wrappers/MainScrollWrapper";
import { UserProfileFilters } from "../../../role_all/components/widgets/userprofile/UserProfileFilters";
import { storeAll } from "../../../role_all/store/storeAll";
import { store } from "../../store/store";
import { UserProfilesShort } from "../widgets/userprofileshort/UserProfilesShort";

export function Vapors() {
	const { userMyProfile, usersProfiles, userProfile } = storeAll.getState();
	const { filtersUser } = store.getState();
	const {
		dataGetProfilesForLikes,
		errorGetProfilesForLikes,
		loadedGetProfilesForLikes,
		querySendGetProfilesForLikes,
	} = useQueryGetProfilesForLikes();

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
		if (!dataGetProfilesForLikes) return;
		if (dataGetProfilesForLikes.length === 0) return;

		const index = usersProfiles.findIndex(
			(value) => value.userid === dataGetProfilesForLikes[0].userid
		);
		if (index !== -1) return;

		let newUsersProfiles = [...usersProfiles, ...dataGetProfilesForLikes];

		storeAll.dispatch(usersProfilesAction(newUsersProfiles));
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
				<UserProfilesShort />
			</div>
		</MainScrollWrapper>
	);
}
