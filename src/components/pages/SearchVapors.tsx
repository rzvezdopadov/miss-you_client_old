import * as React from "react";
import { useEffect, useRef } from "react";
import { invisibleOnScrollToTop } from "../../helpers/pagescroll";
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

export function SearchVapors() {
	const { filtersUser, userMyProfile, usersProfiles, userProfile } =
		store.getState();
	const { dataGetProfiles, errorGetProfiles, querySendGetProfiles } =
		useQueryGetProfiles();
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
		if (dataGetProfiles) {
			let newUsersProfiles = [...usersProfiles, ...dataGetProfiles];

			store.dispatch(usersProfilesAction(newUsersProfiles));
		} else if (errorGetProfiles) {
			modalMessageOpen(errorGetProfiles.response.data.message);
		}
	}, [dataGetProfiles, errorGetProfiles]);

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
				religion: Number(filtersUser.religion),
				smoke: Number(filtersUser.smoke),
				alcohol: Number(filtersUser.alcohol),
				interests: [],
			},
		};

		if (userMyProfile.userid) querySendGetProfiles(data);
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
				<LabelHeader value={`Поиск пары`} />
				<div className="flex justify-center">
					<UserProfileFilters />
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
