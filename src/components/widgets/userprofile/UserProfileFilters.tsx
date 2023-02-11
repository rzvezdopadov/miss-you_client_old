import * as React from "react";
import { IFilterUsers } from "../../../interfaces/iprofiles";
import { store } from "../../../store/store";
import { Filters } from "../../filters/Filters";
import { filtersUserAction } from "../../../store/redusers/filterusers";

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

	return (
		<div className="flex flex-wrap shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl relative w-full items-center justify-center p-1 my-2">
			<Filters
				location={{
					value: filtersUser.location,
					onChange: (e) => onChangeValueProfileFilter(e, "location"),
				}}
				ageStart={{
					value: filtersUser.agestart,
					onChange: (e) => onChangeValueProfileFilter(e, "agestart"),
				}}
				ageEnd={{
					value: filtersUser.ageend,
					onChange: (e) => onChangeValueProfileFilter(e, "ageend"),
				}}
				growthStart={{
					value: filtersUser.growthstart,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "growthstart"),
				}}
				growthEnd={{
					value: filtersUser.growthend,
					onChange: (e) => onChangeValueProfileFilter(e, "growthend"),
				}}
				weight={{
					value: filtersUser.weight,
					onChange: (e) => onChangeValueProfileFilter(e, "weight"),
				}}
				signZodiac={{
					value: filtersUser.signzodiac,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "signzodiac"),
				}}
				genderVapor={{
					value: filtersUser.gendervapor,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "gendervapor"),
				}}
				religion={{
					value: filtersUser.religion,
					onChange: (e) => onChangeValueProfileFilter(e, "religion"),
				}}
				smoke={{
					value: filtersUser.smoke,
					onChange: (e) => onChangeValueProfileFilter(e, "smoke"),
				}}
				alcohol={{
					value: filtersUser.alcohol,
					onChange: (e) => onChangeValueProfileFilter(e, "alcohol"),
				}}
			/>
		</div>
	);
}
