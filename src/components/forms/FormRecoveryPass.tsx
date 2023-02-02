import * as React from "react";
import { useEffect } from "react";
import { useFormFieldInputString } from "../../hooks/form.hook";
import { useQueryRecoveryPass } from "../../hooks/api.hook";
import { Captcha } from "../utils/Captcha";
import { Input } from "../utils/Inputs";
import { LabelHeader } from "../utils/Labels";
import { Button } from "../utils/Buttons";
import { IRecoveryPassword } from "../../interfaces/iprofiles";
import { modalMessageOpen } from "../modal/ModalMessage";

export function FormRecoveryPass() {
	const { dataRecoveryPass, errorRecoveryPass, querySendRecoveryPass } =
		useQueryRecoveryPass();
	const email = useFormFieldInputString();
	const captcha = useFormFieldInputString();

	const btnLoginClickHandler = () => {
		if (!email) {
			modalMessageOpen("E-mail должен быть обязательно указан!");
			return;
		}
		if (!captcha) {
			modalMessageOpen("Код с картинки должен быть обязательно указан!");
			return;
		}
		const dataQuery: IRecoveryPassword = {
			email: email.value,
			captcha: captcha.value,
		};

		querySendRecoveryPass(dataQuery);
	};

	useEffect(() => {
		if (dataRecoveryPass) {
			modalMessageOpen(dataRecoveryPass.message);
		} else if (errorRecoveryPass) {
			modalMessageOpen(errorRecoveryPass.response.data.message);
		}
	}, [dataRecoveryPass, errorRecoveryPass]);

	return (
		<div className="flex h-fit w-full justify-center min-w-xs">
			<div className="flex flex-col bg-gray-700 shadow-md rounded-3xl px-2 pt-2 pb-2 w-80 overflow-scroll">
				<LabelHeader value={`Восстановление пароля`} />
				<Input {...email} type="email" placeholder="E-mail" />
				<Input
					{...captcha}
					type="captcha"
					placeholder="Код с картинки"
				/>
				<Captcha />
				<Button onClick={btnLoginClickHandler} value={`Напомнить`} />
			</div>
		</div>
	);
}
