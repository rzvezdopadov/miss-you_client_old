import { useEffect } from "react";
import { useFormFieldInputString } from "../../../hooks/form.hook";
import { Captcha } from "../../utils/Captcha";
import { Button } from "../../utils/Buttons";
import { Input } from "../../utils/Inputs";
import { LabelWidget } from "../../utils/Labels";
import { modalMessageOpen } from "../../modal/ModalMessage";
import { useQueryChangePass } from "../../../api/auth/auth.api.hook";
import { WidgetWrapper } from "../../wrappers/WidgetWrapper";

export function SettingProfileChangePass() {
	const { dataChangePass, errorChangePass, querySendChangePass } =
		useQueryChangePass();
	const passwordNow = useFormFieldInputString();
	const passwordNew = useFormFieldInputString();
	const passwordConfirm = useFormFieldInputString();
	const captcha = useFormFieldInputString();

	useEffect(() => {
		if (dataChangePass) {
			modalMessageOpen(dataChangePass.msg);
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
		<WidgetWrapper col={true}>
			<LabelWidget value={"Сменить пароль"} />
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
		</WidgetWrapper>
	);
}
