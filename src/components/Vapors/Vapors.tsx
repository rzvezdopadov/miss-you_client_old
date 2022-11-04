import * as React from "react";
import { useEffect, useState } from "react";
import { useQueryGetProfiles } from "../../hooks/api.hook";
import { IQueryGetProfilesOnlyLikes } from "../../interfaces/iquery";
import { usersProfilesAction } from "../../utils/reducers";
import { store } from "../../utils/store";
import { openModalMessage } from "../ModalMessage/ModalMessage";
import { UserProfile } from "../UserProfile/UserProfile";
import { UserProfileShortLoader } from "../UserProfileShortLoader/UserProfileShortLoader";
import { UserProfileShortWrapper } from "../UserProfileShortWrapper/UserProfileShortWrapper";

export function Vapors() {
	const { userMyProfile } = store.getState();
	const { data, error, querySendGetProfiles } = useQueryGetProfiles();
	const [dataLoader, setDataLoader] = useState(true);

	useEffect(() => {
		const data: IQueryGetProfilesOnlyLikes = {
			startCount: 0,
			amount: 0,
			users: String(userMyProfile.likes),
		};

		querySendGetProfiles(data);
	}, [userMyProfile]);

	useEffect(() => {
		if (data) {
			store.dispatch(usersProfilesAction(data));
			setDataLoader(false);
		} else if (error) {
			openModalMessage(error.response.data.message);
		}
	}, [data, error]);

	return (
		<div className="flex h-full w-full justify-center">
			<div className="flex overflow-y-scroll relative bg-gray-700 text-neutral-50 flex-col shadow-md rounded-3xl px-8 pt-2 pb-2 w-full">
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
