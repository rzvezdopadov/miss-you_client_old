import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { useQueryGetProfiles } from "../../../hooks/api.hook";
import { IQueryGetProfilesOnlyLikes } from "../../../interfaces/iquery";
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
import { UserProfileShortLoader } from "../UserProfile/UserProfileShortLoader/UserProfileShortLoader";
import { UserProfileShortWrapper } from "../UserProfile/UserProfileShortWrapper/UserProfileShortWrapper";

export function Vapors() {
	const { userMyProfile, usersProfiles, userProfile } = store.getState();
	const { data, error, querySendGetProfiles } = useQueryGetProfiles();
	const [dataLoader, setDataLoader] = useState(true);
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
		querySendGetProfilesLocal(0);
	}, [userMyProfile]);

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
		const data: IQueryGetProfilesOnlyLikes = {
			startcount: startcount,
			amount: lazyloadingusercount,
			users: String(userMyProfile.likes),
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
				<div className="flex justify-center">Кто меня лайкнул</div>

				<div className="flex flex-row flex-wrap justify-center">
					{dataLoader ? (
						<UserProfileShortLoader />
					) : (
						<UserProfileShortWrapper />
					)}
				</div>

				<UserProfile />
			</div>
		</div>
	);
}
