import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { invisibleOnScrollToTop } from "../../helpers/pagescroll";
import { store } from "../../store/store";
import { ModalUserProfile } from "../modal/ModalUserProfile";
import { LabelHeader } from "../utils/Labels";
import {
	userProfileAction,
	usersProfilesAction,
} from "../../store/redusers/profile";
import { lazyloadingusercount } from "../../config";
import { ButtonScrollToTop } from "../utils/Buttons";
import { ModalDialog, modalDialogClose } from "../modal/ModalDialog";
import { modalMessageOpen } from "../modal/ModalMessage";
import { UserProfileShortLoader } from "../widgets/userprofile/UserProfileShortLoader";
import { UserProfileShortWrapper } from "../widgets/userprofile/UserProfileShortWrapper";
import { useQueryGetProfilesForLikes } from "../../api/profile/profile.api.hook";
import { IQueryGetProfilesForLikes } from "../../api/profile/iprofile.api";

export function Vapors() {
	const { userMyProfile, usersProfiles, userProfile } = store.getState();
	const {
		dataGetProfilesForLikes,
		errorGetProfilesForLikes,
		loadedGetProfilesForLikes,
		querySendGetProfilesForLikes,
	} = useQueryGetProfilesForLikes();
	const [likes, setLikes] = useState(userMyProfile.likes);
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

	const onScrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
		const scrollBottom =
			e.currentTarget.scrollTop + e.currentTarget.offsetHeight >
			e.currentTarget.scrollHeight - 100;

		if (scrollBottom && !loadedGetProfilesForLikes) {
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
				<LabelHeader value={`Кто меня лайкнул`} />

				<div className="flex flex-row flex-wrap justify-center">
					{loadedGetProfilesForLikes ? (
						<UserProfileShortLoader />
					) : (
						<UserProfileShortWrapper />
					)}
				</div>

				<ModalUserProfile />
				<ModalDialog />
			</div>
		</div>
	);
}
