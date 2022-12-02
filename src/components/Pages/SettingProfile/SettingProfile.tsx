import * as React from "react";
import { useEffect, useState } from "react";
import {
	arr_alcohol,
	arr_children,
	arr_education,
	arr_fieldOfActivity,
	arr_gender,
	arr_genderVapor,
	arr_growth,
	arr_iDontLikeСharacter,
	arr_iLikeСharacter,
	arr_location,
	arr_maritalStatus,
	arr_profit,
	arr_religion,
	arr_smoke,
	arr_weight,
} from "../../../arrdata/profiles";
import { useQuerySetProfile } from "../../../hooks/api.hook";
import { IFilterUsers, IProfile } from "../../../interfaces/iprofiles";
import { IQuerySetProfile } from "../../../interfaces/iquery";
import {
	filtersUserAction,
	userMyProfileAction,
} from "../../../utils/reducers";
import { store } from "../../../utils/store";
import { Filters } from "../../Filters/Filters";
import { openModalMessage } from "../../Modal/ModalMessage/ModalMessage";
import {
	ModalPhotoDelete,
	openModalPhotoDelete,
} from "../../Modal/ModalPhotoDelete/ModalPhotoDelete";
import {
	SelectFromArr,
	SelectFromArrValue,
} from "../../Utils/SelectFromArr/SelectFromArr";
import {
	openSettingProfileCharacters,
	SettingProfileCharacters,
} from "./SettingProfileCharacters/SettingProfileCharacters";
import { SettingProfileSlider } from "./SettingProfileSlider/SettingProfileSlider";

export function SettingProfile() {
	const { userMyProfile } = store.getState();
	const [interest, setInterest] = useState("");
	const { data, error, querySendSetProfile } = useQuerySetProfile();

	useEffect(() => {
		if (data) {
			store.dispatch(filtersUserAction(data.filters));
			store.dispatch(userMyProfileAction(data));
			openModalMessage("Успешно сохранено!");
		} else if (error) {
			openModalMessage(error.response.data.message);
		}
	}, [data, error]);

	let date = new Date();

	date.setFullYear(date.getFullYear() - 18);

	let minDateBirth = date.toISOString().split("T")[0];

	const onChangeValueProfile = (
		e:
			| React.ChangeEvent<HTMLSelectElement>
			| React.ChangeEvent<HTMLTextAreaElement>
			| React.ChangeEvent<HTMLInputElement>,
		key: keyof IProfile,
		type = "number"
	) => {
		const newProfile = { ...userMyProfile };
		let value: number | string = e.target.value;

		if (type !== "string") {
			value = Number(value);
		}

		newProfile[key] = value as never;
		store.dispatch(userMyProfileAction(newProfile));
	};

	const nameOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeValueProfile(e, "name", "string");
	};
	const discriptionOnChangeHandler = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		onChangeValueProfile(e, "discription", "string");
	};
	const locationOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfile(e, "location", "string");
	};
	const genderOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChangeValueProfile(e, "gender");
	};
	const genderVaporOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfile(e, "gendervapor");
	};
	const birhdayOnChangeHandler = (e: { target: { value: string } }) => {
		const newProfile = { ...userMyProfile };
		const date: string = e.target.value;
		const arrDate = date.split("-");

		if (arrDate.length !== 3) return;

		newProfile.yearofbirth = Number(arrDate[0]);
		newProfile.monthofbirth = Number(arrDate[1]);
		newProfile.birthday = Number(arrDate[2]);
		store.dispatch(userMyProfileAction(newProfile));
	};

	const growthOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChangeValueProfile(e, "growth");
	};
	const weightOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChangeValueProfile(e, "weight");
	};
	const educationOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfile(e, "education");
	};
	const fieldofactivityOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfile(e, "fieldofactivity");
	};
	const maritalstatusOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfile(e, "maritalstatus");
	};
	const childrenOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfile(e, "children");
	};
	const religionOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfile(e, "religion");
	};
	const smokeOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChangeValueProfile(e, "smoke");
	};
	const alcoholOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfile(e, "alcohol");
	};
	const profitOnChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		onChangeValueProfile(e, "profit");
	};

	const interestOnChangeHandler = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setInterest(e.target.value);
	};

	const interestAddOnKeyPressHandler = (e: { key: string }) => {
		if (e.key === "Enter") interestAddOnClickHandler();
	};

	const interestAddOnClickHandler = () => {
		if (!interest) return;

		const newProfile = { ...userMyProfile };
		newProfile.interests = [...newProfile.interests];
		newProfile.interests.push(interest.toLowerCase() as never);
		store.dispatch(userMyProfileAction(newProfile));

		setInterest("");
	};

	const interestDeleteOnClickHandler = (value: never) => {
		const index = userMyProfile.interests.indexOf(value);

		if (index === -1) return;

		const newProfile = { ...userMyProfile };
		newProfile.interests = [...newProfile.interests];
		newProfile.interests.splice(index, 1);
		store.dispatch(userMyProfileAction(newProfile));
	};

	const onChangeValueProfileFilter = (
		e: React.ChangeEvent<HTMLSelectElement>,
		key: keyof IFilterUsers,
		type = "number"
	) => {
		const newProfile = { ...userMyProfile };
		newProfile.filters = { ...newProfile.filters };
		let value: number | string = e.target.value;

		if (type !== "string") {
			value = Number(value);
		}

		newProfile.filters[key] = value as never;
		store.dispatch(userMyProfileAction(newProfile));
	};

	const filtersLocationOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfileFilter(e, "location");
	};
	const filtersAgeStartOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfileFilter(e, "agestart");
	};
	const filtersAgeEndOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfileFilter(e, "ageend");
	};
	const filtersGrowthStartOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfileFilter(e, "growthstart");
	};
	const filtersGrowthEndOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfileFilter(e, "growthend");
	};
	const filtersWeightStartOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfileFilter(e, "weightstart");
	};
	const filtersWeightEndOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfileFilter(e, "weightend");
	};
	const filtersSignZodiacOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfileFilter(e, "signzodiac");
	};
	const filtersGenderVaporOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfileFilter(e, "gendervapor");
	};
	const filtersReligionOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfileFilter(e, "religion");
	};
	const filtersSmokeOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfileFilter(e, "smoke");
	};
	const filtersAlcoholOnChangeHandler = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		onChangeValueProfileFilter(e, "alcohol");
	};

	const btnSaveOnClick = () => {
		const data: IQuerySetProfile = {
			profile: { ...userMyProfile },
		};

		data.profile.likes = [];

		querySendSetProfile(data);
	};

	return (
		<>
			<div className="flex flex-col fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl overflow-y-scroll lg:overflow-auto top-20 bottom-6 left-0 right-0 m-auto px-2 pt-2 pb-2 lg:h-2/3 lg:max-w-5xl">
				<div className="flex flex-col font-bold">
					{" "}
					Настройки профиля{" "}
				</div>

				<SettingProfileSlider />

				<div className="flex flex-col my-1">
					<input
						value={userMyProfile.name}
						onChange={nameOnChangeHandler}
						title="Ваше имя"
						className="flex text-center rounded-md shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-300 text-black m-1"
						placeholder="Ваше имя"
					/>
				</div>

				<div className="flex flex-col my-1">
					<textarea
						value={userMyProfile.discription}
						onChange={discriptionOnChangeHandler}
						title="О себе"
						className="flex text-center resize-none rounded-md shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-300 text-black m-1"
						placeholder="О себе"
					></textarea>
				</div>

				<div className="flex flex-wrap shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl relative items-center justify-center p-1 my-2 w-full">
					<div className="flex flex-row bg-gray-900 p-1 m-2 shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl justify-center">
						<span className="flex m-1">Город:</span>

						<select
							value={userMyProfile.location}
							className="flex bg-gray-300 text-black text-center m-1 rounded-lg"
							onChange={locationOnChangeHandler}
						>
							{arr_location.map((arr) => {
								const [key, value] = arr;

								return (
									<option key={key + value} value={key}>
										{value}
									</option>
								);
							})}
						</select>
					</div>

					<SelectFromArr
						keyOpt={"gender"}
						value={userMyProfile.gender}
						onChangeHandler={genderOnChangeHandler}
						arr={arr_gender}
						title={"Кто я?"}
					/>

					<SelectFromArr
						keyOpt={"gendervapor"}
						value={userMyProfile.gendervapor}
						onChangeHandler={genderVaporOnChangeHandler}
						arr={arr_genderVapor}
						title={"Кого ищу?"}
					/>

					<div className="flex shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl items-center relative p-1.5 w-64 m-2">
						<label htmlFor="date" className="text-white">
							Дата рождения:{" "}
						</label>{" "}
						&nbsp;
						<input
							value={
								"" +
								userMyProfile.yearofbirth +
								"-" +
								(userMyProfile.monthofbirth < 10
									? "0" + userMyProfile.monthofbirth
									: userMyProfile.monthofbirth) +
								"-" +
								(userMyProfile.birthday < 10
									? "0" + userMyProfile.birthday
									: userMyProfile.birthday)
							}
							className="border rounded bg-slate-300 text-black "
							type="date"
							max={minDateBirth}
							name="date"
							onChange={birhdayOnChangeHandler}
						/>
					</div>

					<SelectFromArrValue
						keyOpt={"growth"}
						value={userMyProfile.growth}
						onChangeHandler={growthOnChangeHandler}
						arr={arr_growth}
						title={"Рост:"}
					/>

					<SelectFromArrValue
						keyOpt={"weight"}
						value={userMyProfile.weight}
						onChangeHandler={weightOnChangeHandler}
						arr={arr_weight}
						title={"Вес:"}
					/>

					<SelectFromArr
						keyOpt={"education"}
						value={userMyProfile.education}
						onChangeHandler={educationOnChangeHandler}
						arr={arr_education}
						title={"Образование:"}
					/>

					<SelectFromArr
						keyOpt={"fieldofactivity"}
						value={userMyProfile.fieldofactivity}
						onChangeHandler={fieldofactivityOnChangeHandler}
						arr={arr_fieldOfActivity}
						title={"Сфера деятельности:"}
					/>

					<SelectFromArr
						keyOpt={"maritalstatus"}
						value={userMyProfile.maritalstatus}
						onChangeHandler={maritalstatusOnChangeHandler}
						arr={arr_maritalStatus}
						title={"Семейное положение:"}
					/>

					<SelectFromArr
						keyOpt={"children"}
						value={userMyProfile.children}
						onChangeHandler={childrenOnChangeHandler}
						arr={arr_children}
						title={"Дети:"}
					/>

					<SelectFromArr
						keyOpt={"religion"}
						value={userMyProfile.religion}
						onChangeHandler={religionOnChangeHandler}
						arr={arr_religion}
						title={"Религия:"}
					/>

					<SelectFromArr
						keyOpt={"smoke"}
						value={userMyProfile.smoke}
						onChangeHandler={smokeOnChangeHandler}
						arr={arr_smoke}
						title={"Курение:"}
					/>

					<SelectFromArr
						keyOpt={"alcohol"}
						value={userMyProfile.alcohol}
						onChangeHandler={alcoholOnChangeHandler}
						arr={arr_alcohol}
						title={"Алкоголь:"}
					/>

					<SelectFromArr
						keyOpt={"profit"}
						value={userMyProfile.profit}
						onChangeHandler={profitOnChangeHandler}
						arr={arr_profit}
						title={"Заработок в месяц:"}
					/>
				</div>

				<div className="flex flex-wrap shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl relative items-center justify-center p-1 my-2 w-full">
					<div className="flex m-2">
						<span> {"Интересы:"} </span>
					</div>

					{userMyProfile.interests.map((value, index) => {
						return (
							<div
								key={"interest" + index}
								className="flex select-none items-center shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-1 m-2"
							>
								{value}
								<div
									className="flex ml-2 justify-center cursor-pointer text-xs rounded-full shadow-[0px_0px_3px_3px] shadow-lime-300 bg-red-500 h-4 w-4"
									title="Удалить интерес"
									onClick={() =>
										interestDeleteOnClickHandler(
											value as never
										)
									}
								>
									X
								</div>
							</div>
						);
					})}

					<div className="flex shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl items-center m-2">
						<input
							className="flex bg-gray-300 w-full text-center text-black m-1 px-1 rounded-lg"
							value={interest}
							onChange={interestOnChangeHandler}
							onKeyDown={interestAddOnKeyPressHandler}
						/>
						<div
							className="flex border-2 rounded-full cursor-pointer border-white justify-center items-center text-lg m-2 h-8 w-8"
							onClick={interestAddOnClickHandler}
						>
							+
						</div>
					</div>
				</div>

				<div className="flex flex-wrap flex-col shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl relative w-full items-center p-1 my-2">
					<div className="flex flex-col">
						<div className="flex flex-wrap">
							<div className="flex m-2">
								<span className="select-none">
									{" "}
									Ценю качества:{" "}
								</span>
							</div>

							{userMyProfile.ilikecharacter.length ? (
								userMyProfile.ilikecharacter.map(
									(value, index) => {
										return (
											<div
												key={"ilikecharacter" + index}
												className="flex items-center shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-1 m-2 select-none"
												title={
													arr_iLikeСharacter[value][1]
												}
											>
												{arr_iLikeСharacter[value][0]}
											</div>
										);
									}
								)
							) : (
								<div
									key="ilikecharacter"
									className="flex items-center shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-1 m-2 select-none"
									title={"Отсутствуют"}
								>
									Отсутствуют
								</div>
							)}
						</div>

						<div className="flex flex-wrap">
							<div className="flex m-2">
								<span className="select-none">
									{" "}
									Не нравятся качества:{" "}
								</span>
							</div>

							{userMyProfile.idontlikecharacter.length ? (
								userMyProfile.idontlikecharacter.map(
									(value, index) => {
										return (
											<div
												key={
													"idontlikecharacter" + index
												}
												className="flex items-center shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-1 m-2 select-none"
												title={
													arr_iDontLikeСharacter[
														value
													][1]
												}
											>
												{
													arr_iDontLikeСharacter[
														value
													][0]
												}
											</div>
										);
									}
								)
							) : (
								<div
									key="idontlikecharacter"
									className="flex items-center shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-1 m-2 select-none"
									title={"Отсутствуют"}
								>
									Отсутствуют
								</div>
							)}
						</div>
					</div>

					<div className="flex m-1">
						<div
							className="flex items-center shadow-[0px_0px_3px_3px] shadow-yellow-300 rounded-xl p-1 m-1 cursor-pointer select-none"
							onClick={openSettingProfileCharacters}
						>
							Изменить параметры
						</div>
					</div>
				</div>

				<div className="flex flex-wrap shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl relative w-full items-center justify-center p-1 my-2">
					<div className="flex m-2">
						<span className="select-none">
							{" "}
							Фильтры по умолчанию:{" "}
						</span>
					</div>

					<div className="flex flex-wrap justify-center m-2">
						<Filters
							location={{
								value: userMyProfile.filters.location,
								onChange: filtersLocationOnChangeHandler,
							}}
							ageStart={{
								value: userMyProfile.filters.agestart,
								onChange: filtersAgeStartOnChangeHandler,
							}}
							ageEnd={{
								value: userMyProfile.filters.ageend,
								onChange: filtersAgeEndOnChangeHandler,
							}}
							growthStart={{
								value: userMyProfile.filters.growthstart,
								onChange: filtersGrowthStartOnChangeHandler,
							}}
							growthEnd={{
								value: userMyProfile.filters.growthend,
								onChange: filtersGrowthEndOnChangeHandler,
							}}
							weightStart={{
								value: userMyProfile.filters.weightstart,
								onChange: filtersWeightStartOnChangeHandler,
							}}
							weightEnd={{
								value: userMyProfile.filters.weightend,
								onChange: filtersWeightEndOnChangeHandler,
							}}
							signZodiac={{
								value: userMyProfile.filters.signzodiac,
								onChange: filtersSignZodiacOnChangeHandler,
							}}
							genderVapor={{
								value: userMyProfile.filters.gendervapor,
								onChange: filtersGenderVaporOnChangeHandler,
							}}
							religion={{
								value: userMyProfile.filters.religion,
								onChange: filtersReligionOnChangeHandler,
							}}
							smoke={{
								value: userMyProfile.filters.smoke,
								onChange: filtersSmokeOnChangeHandler,
							}}
							alcohol={{
								value: userMyProfile.filters.alcohol,
								onChange: filtersAlcoholOnChangeHandler,
							}}
						/>
					</div>
				</div>

				<div className="flex flex-wrap justify-around m-2">
					<button
						className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline select-none"
						type="button"
						onClick={btnSaveOnClick}
					>
						Сохранить
					</button>
				</div>
			</div>

			<SettingProfileCharacters />
			<ModalPhotoDelete />
		</>
	);
}
