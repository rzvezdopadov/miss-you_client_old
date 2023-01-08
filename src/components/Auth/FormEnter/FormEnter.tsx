import * as React from "react";
import { useEffect } from "react";
import { useFormFieldInputString } from "../../../hooks/form.hook";
import { jwtAction } from "../../../utils/reducers";
import { store } from "../../../utils/store";
import { useQueryLogin } from "../../../hooks/api.hook";
import { openModalMessage } from "../../Modal/ModalMessage/ModalMessage";
import { Captcha } from "../Captcha/Captcha";
import { Input } from "../../Utils/Inputs/Inputs";
import { LabelHeader } from "../../Utils/Labels/Labels";
import { Button } from "../../Utils/Buttons/Buttons";
import { ILogin } from "../../../interfaces/iprofiles";

export function FormEnter() {
	const { dataLogin, errorLogin, querySendLogin } = useQueryLogin();
	const email = useFormFieldInputString();
	const password = useFormFieldInputString();
	const captcha = useFormFieldInputString();

	const btnLoginClickHandler = () => {
		if (!email) {
			openModalMessage("E-mail должен быть обязательно указан!");
			return;
		}
		if (!password) {
			openModalMessage("Пароль должен быть обязательно указан!");
			return;
		}
		if (!captcha) {
			openModalMessage("Код с картинки должен быть обязательно указан!");
			return;
		}
		const dataQuery: ILogin = {
			email: email.value,
			password: password.value,
			captcha: captcha.value,
		};

		querySendLogin(dataQuery);
	};

	useEffect(() => {
		if (dataLogin) {
			const { jwt } = dataLogin;

			openModalMessage(dataLogin.message);

			document.cookie = `jwt=${jwt}; max-age=${7 * 24 * 60 * 60}`;

			setTimeout(() => {
				store.dispatch(jwtAction(jwt));
				document.location.href = "/vapors";
			}, 1500);
		} else if (errorLogin) {
			openModalMessage(errorLogin.response.data.message);
		}
	}, [dataLogin, errorLogin]);

	return (
		<div className="flex h-fit w-full justify-center min-w-xs">
			<div className="flex flex-col bg-gray-700 shadow-md rounded-3xl px-2 pt-2 pb-2 w-80 overflow-scroll">
				<LabelHeader value={`Вход`} />
				<Input {...email} type="email" placeholder="E-mail" />
				<Input {...password} type="password" placeholder="Пароль" />
				<Input
					{...captcha}
					type="captcha"
					placeholder="Код с картинки"
				/>
				<Captcha />
				<Button onClick={btnLoginClickHandler} value={`Войти`} />
			</div>
		</div>
	);
}
