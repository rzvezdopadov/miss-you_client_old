import { store } from "../../../store/store";
import { Button } from "../../utils/Buttons";
import { setBannedUser } from "../../utils/Socket";

export function UserProfileBunned() {
	const { userMyProfile, userProfile } = store.getState();

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
