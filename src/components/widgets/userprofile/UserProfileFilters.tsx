import * as React from "react";
import { IFilterUsers } from "../../../interfaces/iprofiles";
import { store } from "../../../store/store";
import { Filters } from "../../filters/Filters";
import { filtersUserAction } from "../../../store/redusers/filterusers";
import { WidgetWrapper } from "../../wrappers/WidgetWrapper";

export function UserProfileFilters() {
	const { filtersUser, userMyProfile } = store.getState();

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
				longfilters={userMyProfile.paid.longfilters.enabled}
				location={{
					value: filtersUser.location,
					onChange: (e) => onChangeValueProfileFilter(e, "location"),
				}}
				agestart={{
					value: filtersUser.agestart,
					onChange: (e) => onChangeValueProfileFilter(e, "agestart"),
				}}
				ageend={{
					value: filtersUser.ageend,
					onChange: (e) => onChangeValueProfileFilter(e, "ageend"),
				}}
				growthstart={{
					value: filtersUser.growthstart,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "growthstart"),
				}}
				growthend={{
					value: filtersUser.growthend,
					onChange: (e) => onChangeValueProfileFilter(e, "growthend"),
				}}
				weight={{
					value: filtersUser.weight,
					onChange: (e) => onChangeValueProfileFilter(e, "weight"),
				}}
				signzodiac={{
					value: filtersUser.signzodiac,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "signzodiac"),
				}}
				gendervapor={{
					value: filtersUser.gendervapor,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "gendervapor"),
				}}
				education={{
					value: filtersUser.education,
					onChange: (e) => onChangeValueProfileFilter(e, "education"),
				}}
				fieldofactivity={{
					value: filtersUser.fieldofactivity,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "fieldofactivity"),
				}}
				maritalstatus={{
					value: filtersUser.maritalstatus,
					onChange: (e) =>
						onChangeValueProfileFilter(e, "maritalstatus"),
				}}
				children={{
					value: filtersUser.children,
					onChange: (e) => onChangeValueProfileFilter(e, "children"),
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
				profit={{
					value: filtersUser.profit,
					onChange: (e) => onChangeValueProfileFilter(e, "profit"),
				}}
				interests={[]}
			/>
		</WidgetWrapper>
	);
}
