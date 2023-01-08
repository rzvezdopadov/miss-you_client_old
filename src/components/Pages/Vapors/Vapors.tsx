import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { useQueryGetProfilesForLikes } from "../../../hooks/api.hook";
import { IQueryGetProfilesForLikes } from "../../../interfaces/iquery";
import { lazyloadingusercount } from "../../../utils/globalconst";
import { invisibleOnScrollToTop } from "../../../utils/pagescroll";
import {
	userProfileAction,
	usersProfilesAction,
} from "../../../utils/reducers";
import { store } from "../../../utils/store";
import { closeDialogModal } from "../../Modal/ModalDialog/ModalDialog";
import { openModalMessage } from "../../Modal/ModalMessage/ModalMessage";
import { ModalUserProfile } from "../../Modal/ModalUserProfile/ModalUserProfile";
import { ScrollToTopBtn } from "../../Utils/ScrollToTopBtn/ScrollToTopBtn";
import { UserProfileShortLoader } from "../UserProfile/UserProfileShortLoader/UserProfileShortLoader";
import { UserProfileShortWrapper } from "../UserProfile/UserProfileShortWrapper/UserProfileShortWrapper";
import { LabelHeader } from "../../Utils/Labels/Labels";

export function Vapors() {
	const { userMyProfile, usersProfiles, userProfile } = store.getState();
	const { data, error, querySendGetProfilesForLikes } =
		useQueryGetProfilesForLikes();
	const [dataLoader, setDataLoader] = useState(true);
	const [likes, setLikes] = useState(userMyProfile.likes);
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
		if (userMyProfile.userid !== "") {
			setLikes(userMyProfile.likes);
		}
	}, [userMyProfile.userid]);

	useEffect(() => {
		querySendGetProfilesLocal(0);
	}, [likes]);

	useEffect(() => {
		if (data) {
			let newUsersProfiles = [...usersProfiles, ...data];

			store.dispatch(usersProfilesAction(newUsersProfiles));
			setDataLoader(false);
		} else if (error) {
			openModalMessage(error.response.data.message);
		}
	}, [data, error]);

	const querySendGetProfilesLocal = (startcount: number) => {
		const data: IQueryGetProfilesForLikes = {
			startcount: startcount,
			amount: lazyloadingusercount,
		};

		if (userMyProfile.userid) querySendGetProfilesForLikes(data);
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
				<LabelHeader value={`Кто меня лайкнул`} />

				<div className="flex flex-row flex-wrap justify-center">
					{dataLoader ? (
						<UserProfileShortLoader />
					) : (
						<UserProfileShortWrapper />
					)}
				</div>

				<ModalUserProfile />
			</div>
		</div>
	);
}
