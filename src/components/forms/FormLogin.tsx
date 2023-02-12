import * as React from "react";
import { useEffect } from "react";
import { useFormFieldInputString } from "../../hooks/form.hook";
import { store } from "../../store/store";
import { Captcha } from "../utils/Captcha";
import { Input } from "../utils/Inputs";
import { LabelHeader } from "../utils/Labels";
import { Button } from "../utils/Buttons";
import { ILogin } from "../../interfaces/iauth";
import { Link } from "react-router-dom";
import { jwtAction } from "../../store/redusers/auth";
import { maxagejwt } from "../../config";
import { modalMessageOpen } from "../modal/ModalMessage";
import { useQueryLogin } from "../../api/auth/auth.api.hook";

export function FormEnter() {
	const { dataLogin, errorLogin, querySendLogin } = useQueryLogin();
	const email = useFormFieldInputString();
	const password = useFormFieldInputString();
	const captcha = useFormFieldInputString();

	const btnLoginClickHandler = () => {
		if (!email) {
			modalMessageOpen("E-mail должен быть обязательно указан!");
			return;
		}
		if (!password) {
			modalMessageOpen("Пароль должен быть обязательно указан!");
			return;
		}
		if (!captcha) {
			modalMessageOpen("Код с картинки должен быть обязательно указан!");
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

			modalMessageOpen(dataLogin.message);

			document.cookie = `jwt=${jwt}; max-age=${maxagejwt}`;

			setTimeout(() => {
				store.dispatch(jwtAction(jwt));
			}, 1500);
		} else if (errorLogin) {
			modalMessageOpen(errorLogin.response.data.message);
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
				<Link to="/recoverypass" className=" text-white">
					<u>{"Забыли пароль?"}</u>
				</Link>
				<Button onClick={btnLoginClickHandler} value={`Войти`} />
			</div>
		</div>
	);
}
