import { Button } from "../../../../role_all/components/utils/Buttons";
import { storeAll } from "../../../../role_all/store/storeAll";
import { setBannedUser } from "../../../socket/users";

export function UserProfileBunned() {
	const { userMyProfile, userProfile } = storeAll.getState();

	return (
		<Button
			value={
				userMyProfile.bannedusers.includes(userProfile.profile.userid)
					? "Удалить из моего бан листа"
					: "Добавить в мой бан лист"
			}
			onClick={setBannedUser}
		/>
	);
}
