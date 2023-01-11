import * as React from "react";
import {
	SelectFromArr,
	SelectFromArrValue,
} from "../../Utils/SelectFromArr/SelectFromArr";
import { store } from "../../../utils/store";
import {
	arr_gender,
	arr_genderVapor,
	arr_growth,
	arr_location,
} from "../../../arrdata/profiles";
import { registrationAction } from "../../../utils/reducers";
import { IRegistration } from "../../../interfaces/iprofiles";
import { minage } from "../../../utils/globalconst";
import { useQueryRegistration } from "../../../hooks/api.hook";
import { openModalMessage } from "../../Modal/ModalMessage/ModalMessage";
import { useEffect, useRef } from "react";
import { Captcha } from "../Captcha/Captcha";
import { Input } from "../../Utils/Inputs/Inputs";
import { LabelHeader } from "../../Utils/Labels/Labels";
import { Button } from "../../Utils/Buttons/Buttons";

export function FormRegistration() {
	const { registration } = store.getState();
	const { data, error, querySendRegistration } = useQueryRegistration();
	const btnRegistration = React.useRef<HTMLButtonElement>(null);
	const checkAgreement = useRef<HTMLInputElement>(null);

	let date = new Date();

	date.setFullYear(date.getFullYear() - minage);

	let minDateBirth = date.toISOString().split("T")[0];

	useEffect(() => {
		checkboxAgreementCheck(null as never);
	}, []);

	useEffect(() => {
		if (data) {
			openModalMessage(data.message);
			console.log("data", data);
		} else if (error) {
			openModalMessage(error.response.data.message);
			console.log("error", error.response.data.message);
		}
	}, [data, error]);

	const btnRegistrationOnClickHandler = () => {
		if (!checkAgreement.current) return;
		if (!checkAgreement.current.checked) {
			openModalMessage(
				"Чтобы зарегистрироваться, требуется принять 'Пользовательское соглашение'!"
			);
			return;
		}
		if (
			registration.gender < 0 ||
			registration.gender > arr_gender.length
		) {
			openModalMessage("Неверно задано поле 'Кто я?'!");
			return;
		}
		if (
			registration.gendervapor < 0 ||
			registration.gendervapor > arr_genderVapor.length
		) {
			openModalMessage("Неверно задано поле 'Кого ищу?'!");
			return;
		}
		if (!arr_location.includes(registration.location)) {
			openModalMessage("Неверно задано поле 'Локация'!");
			return;
		}
		if (
			registration.growth < arr_growth[0] ||
			registration.growth > arr_growth[arr_growth.length - 1]
		) {
			openModalMessage("Неверно задано поле 'Рост'!");
			return;
		}
		if (!registration.name) {
			openModalMessage(
				"Имя пользователя должно быть обязательно указанно!"
			);
			return;
		}
		if (!registration.email) {
			openModalMessage("E-mail должен быть обязательно указан!");
			return;
		}
		if (
			registration.password.length < 8 ||
			registration.password.length > 30
		) {
			openModalMessage(
				"Пароль должен быть обязательно указан, от 8 до 30 символов!"
			);
			return;
		}
		if (!registration.captcha) {
			openModalMessage("Код с картинки должен быть обязательно указан!");
			return;
		}

		querySendRegistration(registration);
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
		const arrDate = date.split("-");

		if (arrDate.length !== 3) return;

		newRegistration.yearofbirth = Number(arrDate[0]);
		newRegistration.monthofbirth = Number(arrDate[1]);
		newRegistration.birthday = Number(arrDate[2]);
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
		<div className="flex justify-center min-h-80 h-fit max-h-[80%] w-full">
			<div className="flex flex-col bg-gray-700 shadow-md rounded-3xl px-2 pt-2 pb-2 w-80 overflow-scroll">
				<LabelHeader value={`Регистрация`} />

				<SelectFromArr
					keyOpt={"gender"}
					value={registration.gender}
					onChangeHandler={genderOnChangeHandler}
					arr={arr_gender}
					title={"Кто я?"}
				/>

				<SelectFromArr
					keyOpt={"gendervapor"}
					value={registration.gendervapor}
					onChangeHandler={genderVaporOnChangeHandler}
					arr={arr_genderVapor}
					title={"Кого ищу?"}
				/>

				<SelectFromArrValue
					keyOpt={"location"}
					value={registration.location}
					onChangeHandler={locationOnChangeHandler}
					arr={arr_location}
					title={"Локация:"}
				/>

				<div className="flex justify-around shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl items-center relative  p-0.5 m-1.5 mx-3">
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
					arr={arr_growth}
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
			</div>
		</div>
	);
}
