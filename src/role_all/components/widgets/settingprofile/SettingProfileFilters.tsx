import * as React from "react";
import { IUserFilters } from "../../../interfaces/iprofiles";
import { FiltersWidget } from "../../../../role_user/components/widgets/FiltersWidget";
import { userMyProfileAction } from "../../../store/redusers/profile";
import { WidgetWrapper } from "../../wrappers/WidgetWrapper";
import { LabelWidget } from "../../utils/Labels";
import { storeAll } from "../../../store/storeAll";

export function SettingProfileFilters() {
	const { userMyProfile } = storeAll.getState();

	const onChangeValueProfileFilter = (
		e: React.ChangeEvent<HTMLSelectElement>,
		key: keyof IUserFilters,
		type = "number"
	) => {
		const newProfile = { ...userMyProfile };
		newProfile.filters = { ...newProfile.filters };
		let value: number | string = e.target.value;

		if (type !== "string") {
			value = Number(value);
		}

		newProfile.filters[key] = value as never;
		storeAll.dispatch(userMyProfileAction(newProfile));
	};

	return (
		<WidgetWrapper wrap={true}>
			<LabelWidget value={"Фильтры по умолчанию:"} />

			<WidgetWrapper wrap={true} shadowDisable={true}>
				<FiltersWidget
					basefilters={true}
					longfilters={true}
					location={{
						value: userMyProfile.filters.location,
						onChange: (e) =>
							onChangeValueProfileFilter(e, "location", "string"),
					}}
					agestart={{
						value: userMyProfile.filters.agestart,
						onChange: (e) =>
							onChangeValueProfileFilter(e, "agestart"),
					}}
					ageend={{
						value: userMyProfile.filters.ageend,
						onChange: (e) =>
							onChangeValueProfileFilter(e, "ageend"),
					}}
					growthstart={{
						value: userMyProfile.filters.growthstart,
						onChange: (e) =>
							onChangeValueProfileFilter(e, "growthstart"),
					}}
					growthend={{
						value: userMyProfile.filters.growthend,
						onChange: (e) =>
							onChangeValueProfileFilter(e, "growthend"),
					}}
					weight={{
						value: userMyProfile.filters.weight,
						onChange: (e) =>
							onChangeValueProfileFilter(e, "weight"),
					}}
					signzodiac={{
						value: userMyProfile.filters.signzodiac,
						onChange: (e) =>
							onChangeValueProfileFilter(e, "signzodiac"),
					}}
					gendervapor={{
						value: userMyProfile.filters.gendervapor,
						onChange: (e) =>
							onChangeValueProfileFilter(e, "gendervapor"),
					}}
					education={{
						value: userMyProfile.filters.education,
						onChange: (e) =>
							onChangeValueProfileFilter(e, "education"),
					}}
					fieldofactivity={{
						value: userMyProfile.filters.fieldofactivity,
						onChange: (e) =>
							onChangeValueProfileFilter(e, "fieldofactivity"),
					}}
					maritalstatus={{
						value: userMyProfile.filters.maritalstatus,
						onChange: (e) =>
							onChangeValueProfileFilter(e, "maritalstatus"),
					}}
					children={{
						value: userMyProfile.filters.children,
						onChange: (e) =>
							onChangeValueProfileFilter(e, "children"),
					}}
					religion={{
						value: userMyProfile.filters.religion,
						onChange: (e) =>
							onChangeValueProfileFilter(e, "religion"),
					}}
					smoke={{
						value: userMyProfile.filters.smoke,
						onChange: (e) => onChangeValueProfileFilter(e, "smoke"),
					}}
					alcohol={{
						value: userMyProfile.filters.alcohol,
						onChange: (e) =>
							onChangeValueProfileFilter(e, "alcohol"),
					}}
					profit={{
						value: userMyProfile.filters.profit,
						onChange: (e) =>
							onChangeValueProfileFilter(e, "profit"),
					}}
					interests={[]}
				/>
			</WidgetWrapper>
		</WidgetWrapper>
	);
}
