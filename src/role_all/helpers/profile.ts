import { IProfile } from "../interfaces/iprofiles";
import { userMyProfileAction } from "../store/redusers/profile";
import { storeAll } from "../store/storeAll";

export const onChangeValueProfile = (
	e:
		| React.ChangeEvent<HTMLSelectElement>
		| React.ChangeEvent<HTMLTextAreaElement>
		| React.ChangeEvent<HTMLInputElement>,
	key: keyof IProfile,
	type = "number"
) => {
	const { userMyProfile } = storeAll.getState();

	const newProfile = { ...userMyProfile };
	let value: number | string = e.target.value;

	if (type !== "string") {
		value = Number(value);
	}

	newProfile[key] = value as never;
	storeAll.dispatch(userMyProfileAction(newProfile));
};
