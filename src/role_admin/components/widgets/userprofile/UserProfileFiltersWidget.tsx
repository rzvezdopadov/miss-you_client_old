import * as React from "react";
import { IUserFilters } from "../../../interfaces/iadmin";
import { store } from "../../../store/store";
import { userFiltersAction } from "../../../store/redusers/filters";
import { FiltersWidget } from "../FiltersWidget";

export function UserProfileFiltersWidget() {
	const { userFilters } = store.getState();

	const onChangeValueProfileFilter = (
		e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
		key: keyof IUserFilters
	) => {
		const newFilters = { ...userFilters };

		newFilters[key] = e.target.value as never;
		store.dispatch(userFiltersAction(newFilters));
	};

	return (
		<div className="flex flex-wrap shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl relative w-full items-center justify-center p-1 my-2">
			<FiltersWidget
				userid={{
					value: userFilters.userid,
					onChange: (e) => onChangeValueProfileFilter(e, "userid"),
				}}
				location={{
					value: userFilters.location,
					onChange: (e) => onChangeValueProfileFilter(e, "location"),
				}}
				agestart={{
					value: userFilters.agestart,
					onChange: (e) => onChangeValueProfileFilter(e, "agestart"),
				}}
				ageend={{
					value: userFilters.ageend,
					onChange: (e) => onChangeValueProfileFilter(e, "ageend"),
				}}
				growthstart={{
					value: userFilters.growthstart,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "growthstart"),
				}}
				growthend={{
					value: userFilters.growthend,
					onChange: (e) => onChangeValueProfileFilter(e, "growthend"),
				}}
				weight={{
					value: userFilters.weight,
					onChange: (e) => onChangeValueProfileFilter(e, "weight"),
				}}
				signzodiac={{
					value: userFilters.signzodiac,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "signzodiac"),
				}}
				gender={{
					value: userFilters.gender,
					onChange: (e) => onChangeValueProfileFilter(e, "gender"),
				}}
				gendervapor={{
					value: userFilters.gendervapor,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "gendervapor"),
				}}
				education={{
					value: userFilters.education,
					onChange: (e) => onChangeValueProfileFilter(e, "education"),
				}}
				fieldofactivity={{
					value: userFilters.fieldofactivity,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "fieldofactivity"),
				}}
				maritalstatus={{
					value: userFilters.maritalstatus,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "maritalstatus"),
				}}
				children={{
					value: userFilters.children,
					onChange: (e) => onChangeValueProfileFilter(e, "children"),
				}}
				religion={{
					value: userFilters.religion,
					onChange: (e) => onChangeValueProfileFilter(e, "religion"),
				}}
				smoke={{
					value: userFilters.smoke,
					onChange: (e) => onChangeValueProfileFilter(e, "smoke"),
				}}
				alcohol={{
					value: userFilters.alcohol,
					onChange: (e) => onChangeValueProfileFilter(e, "alcohol"),
				}}
				profit={{
					value: userFilters.profit,
					onChange: (e) => onChangeValueProfileFilter(e, "profit"),
				}}
				acctype={{
					value: userFilters.acctype,
					onChange: (e) => onChangeValueProfileFilter(e, "acctype"),
				}}
			/>
		</div>
	);
}
