import * as React from "react";
import { IUserFilters } from "../../../interfaces/iprofiles";
import { FiltersWidget } from "../../../../role_user/components/widgets/FiltersWidget";
import { filtersUserAction } from "../../../../role_user/store/redusers/filters";
import { WidgetWrapper } from "../../wrappers/WidgetWrapper";
import { store } from "../../../../role_user/store/store";

export function UserProfileFilters(payload: {
	basefilters: boolean;
	longfilters: boolean;
}) {
	const { filtersUser } = store.getState();

	const onChangeValueProfileFilter = (
		e: React.ChangeEvent<HTMLSelectElement>,
		key: keyof IUserFilters
	) => {
		const newFilters = { ...filtersUser };

		newFilters[key] = e.target.value as never;
		store.dispatch(filtersUserAction(newFilters));
	};

	return (
		<WidgetWrapper wrap={true}>
			<FiltersWidget
				basefilters={payload.basefilters}
				longfilters={payload.longfilters}
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
