import * as React from "react";
import { useEffect, useRef } from "react";
import { useQueryGetProfiles } from "../../../hooks/api.hook";
import { IQueryGetProfiles } from "../../../interfaces/iquery";
import { lazyloadingusercount } from "../../../utils/globalconst";
import { invisibleOnScrollToTop } from "../../../utils/pagescroll";
import {
	userProfileAction,
	usersProfilesAction,
} from "../../../utils/reducers";
import { store } from "../../../utils/store";
import { closeDialogModal } from "../../Modal/ModalDialog/ModalDialog";
import { openModalMessage } from "../../Modal/ModalMessage/ModalMessage";
import { UserProfile } from "../../Modal/ModalUserProfile/ModalUserProfile";
import { ScrollToTopBtn } from "../../Utils/ScrollToTopBtn/ScrollToTopBtn";
import { UserProfileFilters } from "../UserProfile/UserProfileFilters/UserProfileFilters";
import { UserProfileShortWrapper } from "../UserProfile/UserProfileShortWrapper/UserProfileShortWrapper";

export function SearchVapors() {
	const { filtersUser, userMyProfile, usersProfiles, userProfile } =
		store.getState();
	const { data, error, querySendGetProfiles } = useQueryGetProfiles();
	const scrollTopDiv = useRef(null);
	const scrollToTopBtn = useRef(null);

	useEffect(() => {
		return () => {
			store.dispatch(usersProfilesAction([]));
			store.dispatch(
				userProfileAction(false, { ...userProfile.profile })
			);
			closeDialogModal();
		};
	}, []);

	useEffect(() => {
		store.dispatch(usersProfilesAction([]));
		querySendGetProfilesLocal(0);
	}, [filtersUser]);

	useEffect(() => {
		if (data) {
			let newUsersProfiles = [...usersProfiles, ...data];

			store.dispatch(usersProfilesAction(newUsersProfiles));
		} else if (error) {
			openModalMessage(error.response.data.message);
		}
	}, [data, error]);

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
				weightstart: Number(filtersUser.weightstart),
				weightend: Number(filtersUser.weightend),
				signzodiac: Number(filtersUser.signzodiac),
				gendervapor: Number(filtersUser.gendervapor),
				religion: Number(filtersUser.religion),
				smoke: Number(filtersUser.smoke),
				alcohol: Number(filtersUser.alcohol),
				interests: [],
			},
		};

		if (userMyProfile.id) querySendGetProfiles(data);
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
				<ScrollToTopBtn
					scrollTopDiv={scrollTopDiv}
					scrollToTopBtn={scrollToTopBtn}
				/>
				<div className="flex justify-center">Поиск пары</div>
				<div className="flex justify-center">
					<UserProfileFilters />
				</div>
				<div className="flex flex-row flex-wrap justify-center">
					<UserProfileShortWrapper />
				</div>
				<UserProfile />
			</div>
		</div>
	);
}
