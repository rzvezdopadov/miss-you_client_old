import * as React from "react";
import { IFilterUsers } from "../../../interfaces/iprofiles";
import { store } from "../../../store/store";
import { Filters } from "../../filters/Filters";
import { filtersUserAction } from "../../../store/redusers/filterusers";
import { WidgetWrapper } from "../../wrappers/WidgetWrapper";

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
		<WidgetWrapper wrap={true}>
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
		</WidgetWrapper>
	);
}
