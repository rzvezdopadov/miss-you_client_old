import * as React from "react";
import { useEffect } from "react";
import { useFormFieldInputString } from "../../../hooks/form.hook";
import { useQueryRecoveryPass } from "../../../hooks/api.hook";
import { openModalMessage } from "../../Modal/ModalMessage/ModalMessage";
import { Captcha } from "../Captcha/Captcha";
import { Input } from "../../Utils/Inputs/Inputs";
import { LabelHeader } from "../../Utils/Labels/Labels";
import { Button } from "../../Utils/Buttons/Buttons";
import { IRecoveryPassword } from "../../../interfaces/iprofiles";

export function FormRecoveryPass() {
	const { dataRecoveryPass, errorRecoveryPass, querySendRecoveryPass } =
		useQueryRecoveryPass();
	const email = useFormFieldInputString();
	const captcha = useFormFieldInputString();

	const btnLoginClickHandler = () => {
		if (!email) {
			openModalMessage("E-mail должен быть обязательно указан!");
			return;
		}
		if (!captcha) {
			openModalMessage("Код с картинки должен быть обязательно указан!");
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
			openModalMessage(dataRecoveryPass.message);
		} else if (errorRecoveryPass) {
			openModalMessage(errorRecoveryPass.response.data.message);
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
