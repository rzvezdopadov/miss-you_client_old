import { UserProfileShort } from "./UserProfileShort";
import { storeAll } from "../../../../role_all/store/storeAll";

export function UserProfilesShort() {
	const { usersProfiles } = storeAll.getState();

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
