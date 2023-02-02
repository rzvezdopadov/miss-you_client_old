import * as React from "react";
import { UserProfileShort } from "./UserProfileShort";
import { store } from "../../../store/store";

export function UserProfileShortWrapper() {
	const { usersProfiles } = store.getState();

	return (
		<>
			{usersProfiles.length ? (
				usersProfiles.map((profile) => (
					<UserProfileShort
						key={"profile" + profile.userid}
						profile={profile}
					/>
				))
			) : (
				<span className="flex bg-gray-900 p-2 m-2 rounded-lg select-none">
					Никто не нашелся ^..^
				</span>
			)}
		</>
	);
}
