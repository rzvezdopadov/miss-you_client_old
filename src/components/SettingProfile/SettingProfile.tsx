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
} from "../../arrdata/profiles";
import { useQuerySetProfile } from "../../hooks/api.hook";
import { IProfile } from "../../interfaces/iprofiles";
import { IQuerySetProfile } from "../../interfaces/iquery";
import { filtersUserAction, userMyProfileAction } from "../../utils/reducers";
import { store } from "../../utils/store";
import { Filters } from "../Filters/Filters";
import { openModalMessage } from "../ModalMessage/ModalMessage";
import {
	SelectFromArr,
	SelectFromArrValue,
} from "../SelectFromArr/SelectFromArr";
import {
	openSettingProfileCharacters,
	SettingProfileCharacters,
} from "../SettingProfileCharacters/SettingProfileCharacters";

export function SettingProfile() {
	const { userMyProfile } = store.getState();
	const [positionPhoto, setPositionPhoto] = useState(0);
	const myProfile: IProfile = userMyProfile;
	const [interest, setInterest] = useState("");
	const { data, error, querySendSetProfile } = useQuerySetProfile();

	let date = new Date();

	date.setFullYear(date.getFullYear() - 18);

	let minDateBirth = date.toISOString().split("T")[0];

	const leftBtnSlideHandler = () => {
		let posPhoto = positionPhoto;

		if (myProfile.photolink.length > 0) {
			posPhoto--;

			if (posPhoto < 0) {
				posPhoto = myProfile.photolink.length - 1;
			}
		}

		setPositionPhoto(posPhoto);
	};

	const rightBtnSlideHandler = () => {
		let posPhoto = positionPhoto;

		if (myProfile.photolink.length > 0) {
			posPhoto++;

			if (posPhoto > myProfile.photolink.length - 1) {
				posPhoto = 0;
			}
		}

		setPositionPhoto(posPhoto);
	};

	const onChangeValueProfile = (e, key, type = "number") => {
		const newProfile = { ...myProfile };
		let value: number | string = e.target.value;

		if (type !== "string") {
			value = Number(value);
		}

		newProfile[key] = value;
		store.dispatch(userMyProfileAction(newProfile));
	};

	const nameOnChangeHandler = (e) => {
		onChangeValueProfile(e, "name", "string");
	};
	const discriptionOnChangeHandler = (e) => {
		onChangeValueProfile(e, "discription", "string");
	};
	const locationOnChangeHandler = (e) => {
		onChangeValueProfile(e, "location", "string");
	};
	const genderOnChangeHandler = (e) => {
		onChangeValueProfile(e, "gender");
	};
	const genderVaporOnChangeHandler = (e) => {
		onChangeValueProfile(e, "gendervapor");
	};
	const birhdayOnChangeHandler = (e) => {
		const newProfile = { ...myProfile };
		const date: string = e.target.value;
		const arrDate = date.split("-");

		if (arrDate.length !== 3) return;

		newProfile.yearofbirth = Number(arrDate[0]);
		newProfile.monthofbirth = Number(arrDate[1]);
		newProfile.birthday = Number(arrDate[2]);
		store.dispatch(userMyProfileAction(newProfile));
	};

	const growthOnChangeHandler = (e) => {
		onChangeValueProfile(e, "growth");
	};
	const weightOnChangeHandler = (e) => {
		onChangeValueProfile(e, "weight");
	};
	const educationOnChangeHandler = (e) => {
		onChangeValueProfile(e, "education");
	};
	const fieldofactivityOnChangeHandler = (e) => {
		onChangeValueProfile(e, "fieldofactivity");
	};
	const maritalstatusOnChangeHandler = (e) => {
		onChangeValueProfile(e, "maritalstatus");
	};
	const childrenOnChangeHandler = (e) => {
		onChangeValueProfile(e, "children");
	};
	const religionOnChangeHandler = (e) => {
		onChangeValueProfile(e, "religion");
	};
	const smokeOnChangeHandler = (e) => {
		onChangeValueProfile(e, "smoke");
	};
	const alcoholOnChangeHandler = (e) => {
		onChangeValueProfile(e, "alcohol");
	};
	const profitOnChangeHandler = (e) => {
		onChangeValueProfile(e, "profit");
	};

	const interestOnChangeHandler = (e) => {
		setInterest(e.target.value);
	};

	const interestAddOnKeyPressHandler = (e) => {
		if (e.key === "Enter") interestAddOnClickHandler();
	};

	const interestAddOnClickHandler = () => {
		if (!interest) return;

		const newProfile = { ...myProfile };
		newProfile.interests = [...newProfile.interests];
		newProfile.interests.push(interest.toLowerCase() as never);
		store.dispatch(userMyProfileAction(newProfile));

		setInterest("");
	};

	const interestDeleteOnClickHandler = (value: never) => {
		const index = myProfile.interests.indexOf(value);

		if (index === -1) return;

		const newProfile = { ...myProfile };
		newProfile.interests = [...newProfile.interests];
		newProfile.interests.splice(index, 1);
		store.dispatch(userMyProfileAction(newProfile));
	};

	const onChangeValueProfileFilter = (e, key, type = "number") => {
		const newProfile = { ...myProfile };
		newProfile.filters = { ...newProfile.filters };
		let value: number | string = e.target.value;

		if (type !== "string") {
			value = Number(value);
		}

		newProfile.filters[key] = value;
		store.dispatch(userMyProfileAction(newProfile));
	};

	const filtersLocationOnChangeHandler = (e) => {
		onChangeValueProfileFilter(e, "location");
	};
	const filtersAgeStartOnChangeHandler = (e) => {
		onChangeValueProfileFilter(e, "agestart");
	};
	const filtersAgeEndOnChangeHandler = (e) => {
		onChangeValueProfileFilter(e, "ageend");
	};
	const filtersGrowthStartOnChangeHandler = (e) => {
		onChangeValueProfileFilter(e, "growthstart");
	};
	const filtersGrowthEndOnChangeHandler = (e) => {
		onChangeValueProfileFilter(e, "growthend");
	};
	const filtersWeightStartOnChangeHandler = (e) => {
		onChangeValueProfileFilter(e, "weightstart");
	};
	const filtersWeightEndOnChangeHandler = (e) => {
		onChangeValueProfileFilter(e, "weightend");
	};
	const filtersSignZodiacOnChangeHandler = (e) => {
		onChangeValueProfileFilter(e, "signzodiac");
	};
	const filtersGenderVaporOnChangeHandler = (e) => {
		onChangeValueProfileFilter(e, "gendervapor");
	};
	const filtersReligionOnChangeHandler = (e) => {
		onChangeValueProfileFilter(e, "religion");
	};
	const filtersSmokeOnChangeHandler = (e) => {
		onChangeValueProfileFilter(e, "smoke");
	};
	const filtersAlcoholOnChangeHandler = (e) => {
		onChangeValueProfileFilter(e, "alcohol");
	};

	const btnSaveOnClick = () => {
		const data: IQuerySetProfile = {
			profile: { ...myProfile },
		};

		data.profile.likes = [];

		querySendSetProfile(data);
	};

	useEffect(() => {
		if (data) {
			store.dispatch(filtersUserAction(data.filters));
			store.dispatch(userMyProfileAction(data));
			openModalMessage("Успешно сохранено!");
		} else if (error) {
			openModalMessage(error.response.data.message);
		}
	}, [data, error]);

	return (
		<>
			<div className="flex flex-col fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl overflow-y-scroll lg:overflow-auto top-20 bottom-6 left-0 right-0 m-auto px-2 pt-2 pb-2 lg:h-2/3 lg:max-w-5xl">
				<div className="flex flex-col font-bold">
					{" "}
					Настройки профиля{" "}
				</div>
				<div className="flex flex-col">
					<div className="flex justify-center m-1">
						<div
							style={{
								backgroundImage:
									"URL(" +
									myProfile.photolink[positionPhoto] +
									")",
							}}
							className="flex relative bg-center bg-cover bg-no-repeat shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-2xl justify-center h-80 w-80 m-1"
						>
							<div
								className="flex justify-center absolute right-0 m-4 cursor-pointer rounded-full shadow-[0px_0px_3px_3px] shadow-lime-300 bg-red-500 h-6 w-6"
								title="Удалить фото"
							>
								X
							</div>
						</div>
					</div>
					<div className="flex justify-center cursor-pointer m-1 rounded-md">
						<div
							onClick={leftBtnSlideHandler}
							className="flex select-none bg-gray-300 text-black text-xl border-lime-300 border-2 font-bold justify-center cursor-pointer m-1 w-24 rounded-md"
							title="Фото влево"
						>
							&lt;
						</div>
						<div
							className="flex select-none bg-gray-300 text-black text-xl border-yellow-300 border-2 font-bold justify-center cursor-pointer m-1 w-24 rounded-md"
							title="Добавить фото"
						>
							+
						</div>
						<div
							onClick={rightBtnSlideHandler}
							className="flex select-none bg-gray-300 text-black text-xl border-lime-300 border-2 font-bold justify-center cursor-pointer m-1 w-24 rounded-md"
							title="Фото вправо"
						>
							&gt;
						</div>
					</div>
					<div className="flex flex-wrap justify-center m-1">
						{myProfile.photolink.map((value, index) => {
							return (
								<div
									style={{
										backgroundImage: "URL(" + value + ")",
									}}
									key={"slide" + index}
									onClick={() => {
										setPositionPhoto(index);
									}}
									className="flex bg-center bg-cover bg-no-repeat shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-2xl cursor-pointer justify-center ml-2 mr-2 h-16 w-16 m-1"
								></div>
							);
						})}
					</div>
				</div>

				<div className="flex flex-col my-1">
					<input
						value={myProfile.name}
						onChange={nameOnChangeHandler}
						title="Ваше имя"
						className="flex text-center rounded-md shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-300 text-black m-1"
						placeholder="Ваше имя"
					/>
				</div>

				<div className="flex flex-col my-1">
					<textarea
						value={myProfile.discription}
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
							value={myProfile.location}
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
						value={myProfile.gender}
						onChangeHandler={genderOnChangeHandler}
						arr={arr_gender}
						title={"Кто я?"}
					/>

					<SelectFromArr
						keyOpt={"gendervapor"}
						value={myProfile.gendervapor}
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
								myProfile.yearofbirth +
								"-" +
								(myProfile.monthofbirth < 10
									? "0" + myProfile.monthofbirth
									: myProfile.monthofbirth) +
								"-" +
								(myProfile.birthday < 10
									? "0" + myProfile.birthday
									: myProfile.birthday)
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
						value={myProfile.growth}
						onChangeHandler={growthOnChangeHandler}
						arr={arr_growth}
						title={"Рост:"}
					/>

					<SelectFromArrValue
						keyOpt={"weight"}
						value={myProfile.weight}
						onChangeHandler={weightOnChangeHandler}
						arr={arr_weight}
						title={"Вес:"}
					/>

					<SelectFromArr
						keyOpt={"education"}
						value={myProfile.education}
						onChangeHandler={educationOnChangeHandler}
						arr={arr_education}
						title={"Образование:"}
					/>

					<SelectFromArr
						keyOpt={"fieldofactivity"}
						value={myProfile.fieldofactivity}
						onChangeHandler={fieldofactivityOnChangeHandler}
						arr={arr_fieldOfActivity}
						title={"Сфера деятельности:"}
					/>

					<SelectFromArr
						keyOpt={"maritalstatus"}
						value={myProfile.maritalstatus}
						onChangeHandler={maritalstatusOnChangeHandler}
						arr={arr_maritalStatus}
						title={"Семейное положение:"}
					/>

					<SelectFromArr
						keyOpt={"children"}
						value={myProfile.children}
						onChangeHandler={childrenOnChangeHandler}
						arr={arr_children}
						title={"Дети:"}
					/>

					<SelectFromArr
						keyOpt={"religion"}
						value={myProfile.religion}
						onChangeHandler={religionOnChangeHandler}
						arr={arr_religion}
						title={"Религия:"}
					/>

					<SelectFromArr
						keyOpt={"smoke"}
						value={myProfile.smoke}
						onChangeHandler={smokeOnChangeHandler}
						arr={arr_smoke}
						title={"Курение:"}
					/>

					<SelectFromArr
						keyOpt={"alcohol"}
						value={myProfile.alcohol}
						onChangeHandler={alcoholOnChangeHandler}
						arr={arr_alcohol}
						title={"Алкоголь:"}
					/>

					<SelectFromArr
						keyOpt={"profit"}
						value={myProfile.profit}
						onChangeHandler={profitOnChangeHandler}
						arr={arr_profit}
						title={"Заработок в месяц:"}
					/>
				</div>

				<div className="flex flex-wrap shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl relative items-center justify-center p-1 my-2 w-full">
					<div className="flex m-2">
						<span> {"Интересы:"} </span>
					</div>

					{myProfile.interests.map((value, index) => {
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

							{myProfile.ilikecharacter.length ? (
								myProfile.ilikecharacter.map((value, index) => {
									return (
										<div
											key={"ilikecharacter" + index}
											className="flex items-center shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-1 m-2 select-none"
											title={arr_iLikeСharacter[value][1]}
										>
											{arr_iLikeСharacter[value][0]}
										</div>
									);
								})
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

							{myProfile.idontlikecharacter.length ? (
								myProfile.idontlikecharacter.map(
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
								value: myProfile.filters.location,
								onChange: filtersLocationOnChangeHandler,
							}}
							ageStart={{
								value: myProfile.filters.agestart,
								onChange: filtersAgeStartOnChangeHandler,
							}}
							ageEnd={{
								value: myProfile.filters.ageend,
								onChange: filtersAgeEndOnChangeHandler,
							}}
							growthStart={{
								value: myProfile.filters.growthstart,
								onChange: filtersGrowthStartOnChangeHandler,
							}}
							growthEnd={{
								value: myProfile.filters.growthend,
								onChange: filtersGrowthEndOnChangeHandler,
							}}
							weightStart={{
								value: myProfile.filters.weightstart,
								onChange: filtersWeightStartOnChangeHandler,
							}}
							weightEnd={{
								value: myProfile.filters.weightend,
								onChange: filtersWeightEndOnChangeHandler,
							}}
							signZodiac={{
								value: myProfile.filters.signzodiac,
								onChange: filtersSignZodiacOnChangeHandler,
							}}
							genderVapor={{
								value: myProfile.filters.gendervapor,
								onChange: filtersGenderVaporOnChangeHandler,
							}}
							religion={{
								value: myProfile.filters.religion,
								onChange: filtersReligionOnChangeHandler,
							}}
							smoke={{
								value: myProfile.filters.smoke,
								onChange: filtersSmokeOnChangeHandler,
							}}
							alcohol={{
								value: myProfile.filters.alcohol,
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
		</>
	);
}
