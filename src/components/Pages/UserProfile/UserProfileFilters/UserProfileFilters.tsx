import * as React from "react";
import { IFilterUsers } from "../../../../interfaces/iprofiles";
import { filtersUserAction } from "../../../../utils/reducers";
import { store } from "../../../../utils/store";
import { Filters } from "../../../Filters/Filters";

export function UserProfileFilters() {
	const { filtersUser } = store.getState();

	const onChangeValueProfileFilter = (
		e: React.ChangeEvent<HTMLSelectElement>,
		key: keyof IFilterUsers
	) => {
		const newFilters = { ...filtersUser };

		newFilters[key] = e.target.value as never;
		store.dispatch(filtersUserAction(newFilters));
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
			<Filters
				location={{
					value: filtersUser.location,
					onChange: filtersLocationOnChangeHandler,
				}}
				ageStart={{
					value: filtersUser.agestart,
					onChange: filtersAgeStartOnChangeHandler,
				}}
				ageEnd={{
					value: filtersUser.ageend,
					onChange: filtersAgeEndOnChangeHandler,
				}}
				growthStart={{
					value: filtersUser.growthstart,
					onChange: filtersGrowthStartOnChangeHandler,
				}}
				growthEnd={{
					value: filtersUser.growthend,
					onChange: filtersGrowthEndOnChangeHandler,
				}}
				weightStart={{
					value: filtersUser.weightstart,
					onChange: filtersWeightStartOnChangeHandler,
				}}
				weightEnd={{
					value: filtersUser.weightend,
					onChange: filtersWeightEndOnChangeHandler,
				}}
				signZodiac={{
					value: filtersUser.signzodiac,
					onChange: filtersSignZodiacOnChangeHandler,
				}}
				genderVapor={{
					value: filtersUser.gendervapor,
					onChange: filtersGenderVaporOnChangeHandler,
				}}
				religion={{
					value: filtersUser.religion,
					onChange: filtersReligionOnChangeHandler,
				}}
				smoke={{
					value: filtersUser.smoke,
					onChange: filtersSmokeOnChangeHandler,
				}}
				alcohol={{
					value: filtersUser.alcohol,
					onChange: filtersAlcoholOnChangeHandler,
				}}
			/>
		</div>
	);
}
