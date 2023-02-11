import * as React from "react";
import { store } from "../../../store/store";
import { AdminFilters } from "./AdminFilters";
import { IAdminFilterUsers } from "../../../interfaces/iadmin";
import { adminFiltersUserAction } from "../../../store/redusers/admin";

export function AdminUserProfileFilters() {
	const { adminFiltersUser } = store.getState();

	const onChangeValueProfileFilter = (
		e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
		key: keyof IAdminFilterUsers
	) => {
		const newFilters = { ...adminFiltersUser };

		newFilters[key] = e.target.value as never;
		store.dispatch(adminFiltersUserAction(newFilters));
	};

	return (
		<div className="flex flex-wrap shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl relative w-full items-center justify-center p-1 my-2">
			<AdminFilters
				userid={{
					value: adminFiltersUser.userid,
					onChange: (e) => onChangeValueProfileFilter(e, "userid"),
				}}
				location={{
					value: adminFiltersUser.location,
					onChange: (e) => onChangeValueProfileFilter(e, "location"),
				}}
				agestart={{
					value: adminFiltersUser.agestart,
					onChange: (e) => onChangeValueProfileFilter(e, "agestart"),
				}}
				ageend={{
					value: adminFiltersUser.ageend,
					onChange: (e) => onChangeValueProfileFilter(e, "ageend"),
				}}
				growthstart={{
					value: adminFiltersUser.growthstart,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "growthstart"),
				}}
				growthend={{
					value: adminFiltersUser.growthend,
					onChange: (e) => onChangeValueProfileFilter(e, "growthend"),
				}}
				weight={{
					value: adminFiltersUser.weight,
					onChange: (e) => onChangeValueProfileFilter(e, "weight"),
				}}
				signzodiac={{
					value: adminFiltersUser.signzodiac,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "signzodiac"),
				}}
				gender={{
					value: adminFiltersUser.gender,
					onChange: (e) => onChangeValueProfileFilter(e, "gender"),
				}}
				gendervapor={{
					value: adminFiltersUser.gendervapor,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "gendervapor"),
				}}
				education={{
					value: adminFiltersUser.education,
					onChange: (e) => onChangeValueProfileFilter(e, "education"),
				}}
				fieldofactivity={{
					value: adminFiltersUser.fieldofactivity,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "fieldofactivity"),
				}}
				maritalstatus={{
					value: adminFiltersUser.maritalstatus,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "maritalstatus"),
				}}
				children={{
					value: adminFiltersUser.children,
					onChange: (e) => onChangeValueProfileFilter(e, "children"),
				}}
				religion={{
					value: adminFiltersUser.religion,
					onChange: (e) => onChangeValueProfileFilter(e, "religion"),
				}}
				smoke={{
					value: adminFiltersUser.smoke,
					onChange: (e) => onChangeValueProfileFilter(e, "smoke"),
				}}
				alcohol={{
					value: adminFiltersUser.alcohol,
					onChange: (e) => onChangeValueProfileFilter(e, "alcohol"),
				}}
				profit={{
					value: adminFiltersUser.profit,
					onChange: (e) => onChangeValueProfileFilter(e, "profit"),
				}}
				acctype={{
					value: adminFiltersUser.acctype,
					onChange: (e) => onChangeValueProfileFilter(e, "acctype"),
				}}
			/>
		</div>
	);
}
