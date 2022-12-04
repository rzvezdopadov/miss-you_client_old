import { IProfile } from "../../../interfaces/iprofiles";
import { userMyProfileAction } from "../../../utils/reducers";
import { store } from "../../../utils/store";

export const onChangeValueProfile = (
	e:
		| React.ChangeEvent<HTMLSelectElement>
		| React.ChangeEvent<HTMLTextAreaElement>
		| React.ChangeEvent<HTMLInputElement>,
	key: keyof IProfile,
	type = "number"
) => {
	const { userMyProfile } = store.getState();

	const newProfile = { ...userMyProfile };
	let value: number | string = e.target.value;

	if (type !== "string") {
		value = Number(value);
	}

	newProfile[key] = value as never;
	store.dispatch(userMyProfileAction(newProfile));
};
