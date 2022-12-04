import * as React from "react";
import { IFilterUsers } from "../../../../interfaces/iprofiles";
import { userMyProfileAction } from "../../../../utils/reducers";
import { store } from "../../../../utils/store";
import { Filters } from "../../../Filters/Filters";

export function SettingProfileFilters() {
	const { userMyProfile } = store.getState();

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

	return (
		<div className="flex flex-wrap shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl relative w-full items-center justify-center p-1 my-2">
			<div className="flex m-2">
				<span className="select-none"> Фильтры по умолчанию: </span>
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
	);
}
