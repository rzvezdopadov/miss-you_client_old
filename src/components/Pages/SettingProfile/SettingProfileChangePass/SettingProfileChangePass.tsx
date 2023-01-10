import { useEffect } from "react";
import { useQueryChangePass } from "../../../../hooks/api.hook";
import { useFormFieldInputString } from "../../../../hooks/form.hook";
import { Captcha } from "../../../Auth/Captcha/Captcha";
import { Button } from "../../../Utils/Buttons/Buttons";
import { Input } from "../../../Utils/Inputs/Inputs";
import { LabelHeader } from "../../../Utils/Labels/Labels";
import { openModalMessage } from "../../../Modal/ModalMessage/ModalMessage";

export function SettingProfileChangePass() {
	const { dataChangePass, errorChangePass, querySendChangePass } =
		useQueryChangePass();
	const passwordNow = useFormFieldInputString();
	const passwordNew = useFormFieldInputString();
	const passwordConfirm = useFormFieldInputString();
	const captcha = useFormFieldInputString();

	useEffect(() => {
		if (dataChangePass) {
			openModalMessage(dataChangePass.message);
		} else if (errorChangePass) {
			openModalMessage(errorChangePass.response.data.message);
		}
	}, [dataChangePass, errorChangePass]);

	const btnSaveOnClickHandler = () => {
		if (!passwordNow.value) {
			openModalMessage("Поле 'Текущий пароль' должно быть заполнено!");
			return;
		}

		if (!passwordNew.value) {
			openModalMessage("Поле 'Новый пароль' должно быть заполнено!");
			return;
		}

		if (!passwordConfirm.value) {
			openModalMessage(
				"Поле 'Новый пароль повторить' должно быть заполнено!"
			);
			return;
		}

		if (!captcha) {
			openModalMessage("Поле 'Код с картинки' должно быть заполнено!");
			return;
		}

		if (passwordNew.value !== passwordConfirm.value) {
			openModalMessage(
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
		<div className="flex flex-col shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl relative items-center justify-center p-1 my-2 w-full">
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
