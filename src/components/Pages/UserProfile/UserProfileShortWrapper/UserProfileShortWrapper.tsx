import * as React from "react";
import { store } from "../../../../utils/store";
import { UserProfileShort } from "../UserProfileShort/UserProfileShort";

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
