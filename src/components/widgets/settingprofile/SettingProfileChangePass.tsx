import { useEffect } from "react";
import { useFormFieldInputString } from "../../../hooks/form.hook";
import { Captcha } from "../../utils/Captcha";
import { Button } from "../../utils/Buttons";
import { Input } from "../../utils/Inputs";
import { LabelHeader } from "../../utils/Labels";
import { modalMessageOpen } from "../../modal/ModalMessage";
import { useQueryChangePass } from "../../../api/auth/auth.api.hook";

export function SettingProfileChangePass() {
	const { dataChangePass, errorChangePass, querySendChangePass } =
		useQueryChangePass();
	const passwordNow = useFormFieldInputString();
	const passwordNew = useFormFieldInputString();
	const passwordConfirm = useFormFieldInputString();
	const captcha = useFormFieldInputString();

	useEffect(() => {
		if (dataChangePass) {
			modalMessageOpen(dataChangePass.message);
		} else if (errorChangePass) {
			modalMessageOpen(errorChangePass.response.data.message);
		}
	}, [dataChangePass, errorChangePass]);

	const btnSaveOnClickHandler = () => {
		if (!passwordNow.value) {
			modalMessageOpen("Поле 'Текущий пароль' должно быть заполнено!");
			return;
		}

		if (!passwordNew.value) {
			modalMessageOpen("Поле 'Новый пароль' должно быть заполнено!");
			return;
		}

		if (!passwordConfirm.value) {
			modalMessageOpen(
				"Поле 'Новый пароль повторить' должно быть заполнено!"
			);
			return;
		}

		if (!captcha) {
			modalMessageOpen("Поле 'Код с картинки' должно быть заполнено!");
			return;
		}

		if (passwordNew.value !== passwordConfirm.value) {
			modalMessageOpen(
				"Поле 'Новый пароль' и 'Новый пароль повторить' не совпадают!"
			);
			return;
		}

		querySendChangePass({
			passwordnow: passwordNow.value,
			passwordnew: passwordNew.value,
			captcha: captcha.value,
		});
	};

	return (
		<div className="flex flex-col bg-gray-900 shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl relative items-center justify-center p-1 my-2 w-full">
			<LabelHeader value={"Сменить пароль"} />
			<Input
				{...passwordNow}
				type={"password"}
				placeholder={"Текущий пароль"}
			></Input>
			<Input
				{...passwordNew}
				type={"password"}
				placeholder={"Новый пароль"}
			></Input>
			<Input
				{...passwordConfirm}
				type={"password"}
				placeholder={"Новый пароль повторить"}
			></Input>
			<Input {...captcha} type="captcha" placeholder="Код с картинки" />
			<Captcha />

			<Button onClick={btnSaveOnClickHandler} value={`Сохранить`} />
		</div>
	);
}
