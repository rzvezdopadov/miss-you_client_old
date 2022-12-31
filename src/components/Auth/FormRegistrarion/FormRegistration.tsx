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
	arr_weight,
} from "../../../arrdata/profiles";
import { registrationAction } from "../../../utils/reducers";
import { IRegistration } from "../../../interfaces/iprofiles";

export function FormRegistration() {
	const { registration } = store.getState();

	let date = new Date();

	date.setFullYear(date.getFullYear() - 18);

	let minDateBirth = date.toISOString().split("T")[0];

	function checkboxAgreementCheck(
		e: React.SyntheticEvent<EventTarget>
	): void {
		const elemBtn =
			document.querySelector<HTMLInputElement>("#btnRegistration");

		if (!elemBtn) return;

		e.target ? (elemBtn.disabled = false) : (elemBtn.disabled = true);
	}

	const locationOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueRegistration(e, "location", "string");
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
	const weightOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChangeValueRegistration(e, "weight");
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

	return (
		<div className="flex w-full justify-center min-w-xs">
			<div className="block bg-gray-700 shadow-md rounded-3xl px-2 pt-2 pb-2 w-80">
				<label className="text-white text-2xl font-bold mb-4">
					Регистрация
				</label>

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

				<div className="flex justify-around shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl items-center relative p-1.5 m-3">
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
						className="border rounded select-none bg-slate-300 text-black "
						type="date"
						max={minDateBirth}
						name="date"
						onChange={birhdayOnChangeHandler}
					/>
				</div>

				<div className="">
					<SelectFromArrValue
						keyOpt={"growth"}
						value={registration.growth}
						onChangeHandler={growthOnChangeHandler}
						arr={arr_growth}
						title={"Рост:"}
					/>
				</div>

				<div className="flex flex-col my-1">
					<input
						value={registration.name}
						onChange={nameOnChangeHandler}
						title="Ваше имя"
						className="flex text-center rounded-xl shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-300 leading-tight text-black m-1 mx-3 py-2 px-3"
						placeholder="Ваше имя"
					/>
				</div>

				<div className="flex flex-col my-2">
					<input
						value={registration.email}
						onChange={emailOnChangeHandler}
						title="E-mail"
						className="flex text-center rounded-xl shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-300 leading-tight text-black m-1 mx-3 py-2 px-3"
						type="email"
						placeholder="E-mail"
					/>
				</div>

				<div className="flex flex-col my-2">
					<input
						value={registration.password}
						onChange={passwordOnChangeHandler}
						title="Пароль"
						className="flex text-center rounded-xl shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-300 leading-tight text-black m-1 mx-3 py-2 px-3"
						type="password"
						placeholder="Пароль"
					/>
				</div>
				<div className="mb-4">
					<input type="checkbox" onClick={checkboxAgreementCheck} />
					<span className="text-white">
						{
							" Я подтверждаю, что мне уже исполнилось 18 лет и я принимаю "
						}
					</span>
					<a
						href="/agreement"
						target="_blank"
						className="text-red-500"
					>
						{"Пользовательское соглашение"}
					</a>
				</div>
				<div className="flex items-center justify-center">
					<button
						id="btnRegistration"
						disabled
						className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="button"
					>
						Найти себе пару
					</button>
				</div>
			</div>
		</div>
	);
}
