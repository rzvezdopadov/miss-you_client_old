import { useEffect, useRef } from "react";
import { UserProfileFilters } from "../../../role_all/components/widgets/userprofile/UserProfileFilters";
import { LabelPageName } from "../../../role_all/components/utils/Labels";
import { usersProfilesAction } from "../../../role_all/store/redusers/profile";
import { lazyloadingusercount } from "../../../config";
import { ButtonScrollToTop } from "../../../role_all/components/utils/Buttons";
import { modalDialogClose } from "../../../role_all/components/modal/ModalDialog";
import { modalMessageOpen } from "../../../role_all/components/modal/ModalMessage";
import { useQueryGetProfiles } from "../../api/profile/profile.api.hook";
import { IQueryGetProfiles } from "../../api/profile/iprofile.api";
import { MainScrollWrapper } from "../../../role_all/components/wrappers/MainScrollWrapper";
import { storeAll } from "../../../role_all/store/storeAll";
import { store } from "../../store/store";
import { UserProfilesShort } from "../widgets/userprofileshort/UserProfilesShort";
import { userProfileAction } from "../../store/redusers/profile";

export function Users() {
	const { userMyProfile, usersProfiles } = storeAll.getState();
	const { filtersUser, userProfile } = store.getState();
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
			storeAll.dispatch(usersProfilesAction([]));
			store.dispatch(
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
			shadow={true}
			color={true}
		>
			<ButtonScrollToTop
				scrollTopDiv={scrollTopDiv}
				scrollToTopBtn={scrollToTopBtn}
			/>
			<LabelPageName value={`Поиск пары`} />
			<UserProfileFilters
				basefilters={true}
				longfilters={userMyProfile.paid.longfilters.enabled}
			/>
			<div className="flex flex-row flex-wrap justify-center">
				<UserProfilesShort />
			</div>
		</MainScrollWrapper>
	);
}
