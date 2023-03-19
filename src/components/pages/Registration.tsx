import * as React from "react";
import { SelectFromArr, SelectFromArrValue } from "../utils/Selects";
import { store } from "../../store/store";
import { IRegistration } from "../../interfaces/iauth";
import { useEffect, useRef } from "react";
import { Captcha } from "../utils/Captcha";
import { Input } from "../utils/Inputs";
import { LabelWidget } from "../utils/Labels";
import { Button } from "../utils/Buttons";
import {
	data_genderVapor_for_reg,
	data_gender_for_reg,
	data_growth,
	data_location,
} from "../../data/profiles";
import { registrationAction } from "../../store/redusers/auth";
import { minage } from "../../config";
import { modalMessageOpen } from "../modal/ModalMessage";
import { useQueryRegistration } from "../../api/auth/auth.api.hook";
import { MainScrollWrapper } from "../wrappers/MainScrollWrapper";
import { FormWrapper } from "../wrappers/FormWrapper";

export function Registration() {
	const { registration } = store.getState();
	const { dataRegistration, errorRegistration, querySendRegistration } =
		useQueryRegistration();
	const btnRegistration = React.useRef<HTMLButtonElement>(null);
	const checkAgreement = useRef<HTMLInputElement>(null);

	let date = new Date();

	date.setFullYear(date.getFullYear() - minage);

	let minDateBirth = date.toISOString().split("T")[0];

	useEffect(() => {
		checkboxAgreementCheck(null as never);
	}, []);

	useEffect(() => {
		if (!dataRegistration) return;

		modalMessageOpen(dataRegistration.message);
	}, [dataRegistration]);

	useEffect(() => {
		if (!errorRegistration) return;

		modalMessageOpen(errorRegistration.response.data.message);
	}, [errorRegistration]);

	const btnRegistrationOnClickHandler = () => {
		if (!checkAgreement.current) return;
		if (!checkAgreement.current.checked) {
			modalMessageOpen(
				"Чтобы зарегистрироваться, требуется принять 'Пользовательское соглашение'!"
			);
			return;
		}

		const newRegistration: IRegistration = JSON.parse(
			JSON.stringify(registration)
		);

		newRegistration.gender -= 1;
		newRegistration.gendervapor -= 1;

		if (
			newRegistration.gender < 0 ||
			newRegistration.gender > data_gender_for_reg.length - 1
		) {
			modalMessageOpen("Неверно задано поле 'Кто я?'!");
			return;
		}
		if (
			newRegistration.gendervapor < 0 ||
			newRegistration.gendervapor > data_genderVapor_for_reg.length - 1
		) {
			modalMessageOpen("Неверно задано поле 'Кого ищу?'!");
			return;
		}
		if (!data_location.includes(newRegistration.location)) {
			modalMessageOpen("Неверно задано поле 'Локация'!");
			return;
		}
		if (
			newRegistration.growth < data_growth[0] ||
			newRegistration.growth > data_growth[data_growth.length - 1]
		) {
			modalMessageOpen("Неверно задано поле 'Рост'!");
			return;
		}
		if (!newRegistration.name) {
			modalMessageOpen(
				"Имя пользователя должно быть обязательно указанно!"
			);
			return;
		}
		if (!newRegistration.email) {
			modalMessageOpen("E-mail должен быть обязательно указан!");
			return;
		}
		if (
			newRegistration.password.length < 8 ||
			newRegistration.password.length > 30
		) {
			modalMessageOpen(
				"Пароль должен быть обязательно указан, от 8 до 30 символов!"
			);
			return;
		}
		if (!newRegistration.captcha) {
			modalMessageOpen("Код с картинки должен быть обязательно указан!");
			return;
		}

		querySendRegistration(newRegistration);
	};

	const checkboxAgreementCheck = (
		e: React.SyntheticEvent<EventTarget>
	): void => {
		if (!btnRegistration.current || !checkAgreement.current) return;

		if (checkAgreement.current.checked) {
			btnRegistration.current.classList.remove("bg-red-500");
			btnRegistration.current.classList.remove("hover:bg-red-700");
			btnRegistration.current.classList.add("bg-green-500");
			btnRegistration.current.classList.add("hover:bg-green-700");
		} else {
			btnRegistration.current.classList.remove("bg-green-500");
			btnRegistration.current.classList.remove("hover:bg-green-700");
			btnRegistration.current.classList.add("bg-red-500");
			btnRegistration.current.classList.add("hover:bg-red-700");
		}
	};

	const locationOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueRegistration(e, "location");
	};

	const onChangeValueRegistration = (
		e:
			| React.ChangeEvent<HTMLSelectElement>
			| React.ChangeEvent<HTMLTextAreaElement>
			| React.ChangeEvent<HTMLInputElement>,
		key: keyof IRegistration,
		type = "number"
	) => {
		const { registration } = store.getState();

		const newRegistration = { ...registration };
		let value: number | string = e.target.value;

		if (type !== "string") {
			value = Number(value);
		}

		newRegistration[key] = value as never;
		store.dispatch(registrationAction(newRegistration));
	};

	const birhdayOnChangeHandler = (e: { target: { value: string } }) => {
		const newRegistration = { ...registration };
		const date: string = e.target.value;
		const dataDate = date.split("-");

		if (dataDate.length !== 3) return;

		newRegistration.yearofbirth = Number(dataDate[0]);
		newRegistration.monthofbirth = Number(dataDate[1]);
		newRegistration.birthday = Number(dataDate[2]);
		store.dispatch(registrationAction(newRegistration));
	};

	const growthOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChangeValueRegistration(e, "growth");
	};
	const genderOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChangeValueRegistration(e, "gender");
	};
	const genderVaporOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueRegistration(e, "gendervapor");
	};
	const nameOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeValueRegistration(e, "name", "string");
	};
	const emailOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeValueRegistration(e, "email", "string");
	};
	const passwordOnChangeHandler = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		onChangeValueRegistration(e, "password", "string");
	};
	const captchaOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeValueRegistration(e, "captcha", "string");
	};

	return (
		<MainScrollWrapper center={true}>
			<FormWrapper>
				<LabelWidget value={`Регистрация`} />

				<SelectFromArr
					keyOpt={"gender"}
					value={registration.gender}
					onChangeHandler={genderOnChangeHandler}
					arr={data_gender_for_reg}
					title={"Кто я?"}
				/>

				<SelectFromArr
					keyOpt={"gendervapor"}
					value={registration.gendervapor}
					onChangeHandler={genderVaporOnChangeHandler}
					arr={data_genderVapor_for_reg}
					title={"Кого ищу?"}
				/>

				<SelectFromArrValue
					keyOpt={"location"}
					value={registration.location}
					onChangeHandler={locationOnChangeHandler}
					arr={data_location}
					title={"Локация:"}
				/>

				<div className="flex justify-around bg-gray-900 shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl items-center relative p-1.5 m-1.5">
					<label htmlFor="date" className="text-white">
						{"Дата рождения:"}
					</label>
					&nbsp;
					<input
						value={
							"" +
							registration.yearofbirth +
							"-" +
							(registration.monthofbirth < 10
								? "0" + registration.monthofbirth
								: registration.monthofbirth) +
							"-" +
							(registration.birthday < 10
								? "0" + registration.birthday
								: registration.birthday)
						}
						className="border rounded-lg select-none bg-slate-300 text-black "
						type="date"
						max={minDateBirth}
						name="date"
						onChange={birhdayOnChangeHandler}
					/>
				</div>

				<SelectFromArrValue
					keyOpt={"growth"}
					value={registration.growth}
					onChangeHandler={growthOnChangeHandler}
					arr={data_growth}
					title={"Рост:"}
				/>

				<Input
					value={registration.name}
					onChange={nameOnChangeHandler}
					type="name"
					placeholder="Ваше имя"
				/>

				<Input
					value={registration.email}
					onChange={emailOnChangeHandler}
					type="email"
					placeholder="E-mail"
				/>

				<Input
					value={registration.password}
					onChange={passwordOnChangeHandler}
					type="password"
					placeholder="Пароль"
				/>

				<Input
					value={registration.captcha}
					onChange={captchaOnChangeHandler}
					type="captcha"
					placeholder="Код с картинки"
				/>

				<Captcha />

				<div className="mb-4">
					<input
						type="checkbox"
						ref={checkAgreement}
						onClick={checkboxAgreementCheck}
						className={"cursor-pointer"}
					/>
					<span className="text-white">
						{` Я подтверждаю, что мне уже исполнилось ${minage} лет и я принимаю `}
					</span>
					<a
						href="/agreement"
						target="_blank"
						className="text-red-500"
					>
						{"Пользовательское соглашение"}
					</a>
				</div>
				<Button
					onClick={btnRegistrationOnClickHandler}
					ref={btnRegistration}
					value={`Найти себе пару`}
				/>
			</FormWrapper>
		</MainScrollWrapper>
	);
}
