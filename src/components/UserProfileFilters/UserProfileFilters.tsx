import * as React from "react";
import { useEffect } from "react";
import { useQueryGetProfiles } from "../../hooks/api.hook";
import { IFilterUsers } from "../../interfaces/iprofiles";
import { IQueryGetProfiles } from "../../interfaces/iquery";
import { filtersUserAction, usersProfilesAction } from "../../utils/reducers";
import { store } from "../../utils/store";
import { Filters } from "../Filters/Filters";
import { openModalMessage } from "../ModalMessage/ModalMessage";

export function UserProfileFilters() {
	const { filtersUser } = store.getState();
	const myfiltersUser: IFilterUsers = filtersUser;
	const { data, error, querySendGetProfiles } = useQueryGetProfiles();

	useEffect(() => {
		const data: IQueryGetProfiles = {
			startCount: 0,
			amount: 0,
			filters: {
				location: myfiltersUser.location,
				agestart: Number(myfiltersUser.agestart),
				ageend: Number(myfiltersUser.ageend),
				growthstart: Number(myfiltersUser.growthstart),
				growthend: Number(myfiltersUser.growthend),
				weightstart: Number(myfiltersUser.weightstart),
				weightend: Number(myfiltersUser.weightend),
				signzodiac: Number(myfiltersUser.signzodiac),
				gendervapor: Number(myfiltersUser.gendervapor),
				religion: Number(myfiltersUser.religion),
				smoke: Number(myfiltersUser.smoke),
				alcohol: Number(myfiltersUser.alcohol),
				interests: [],
			},
		};

		querySendGetProfiles(data);
	}, [myfiltersUser]);

	useEffect(() => {
		if (data) {
			store.dispatch(usersProfilesAction(data));
		} else if (error) {
			openModalMessage(error.response.data.message);
		}
	}, [data, error]);

	const onChangeValueProfileFilter = (e, key) => {
		const newFilters = { ...myfiltersUser };
		newFilters[key] = e.target.value;
		store.dispatch(filtersUserAction(newFilters));
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

	return (
		<div className="flex flex-wrap shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl relative w-full items-center justify-center p-1 my-2">
			<Filters
				location={{
					value: myfiltersUser.location,
					onChange: filtersLocationOnChangeHandler,
				}}
				ageStart={{
					value: myfiltersUser.agestart,
					onChange: filtersAgeStartOnChangeHandler,
				}}
				ageEnd={{
					value: myfiltersUser.ageend,
					onChange: filtersAgeEndOnChangeHandler,
				}}
				growthStart={{
					value: myfiltersUser.growthstart,
					onChange: filtersGrowthStartOnChangeHandler,
				}}
				growthEnd={{
					value: myfiltersUser.growthend,
					onChange: filtersGrowthEndOnChangeHandler,
				}}
				weightStart={{
					value: myfiltersUser.weightstart,
					onChange: filtersWeightStartOnChangeHandler,
				}}
				weightEnd={{
					value: myfiltersUser.weightend,
					onChange: filtersWeightEndOnChangeHandler,
				}}
				signZodiac={{
					value: myfiltersUser.signzodiac,
					onChange: filtersSignZodiacOnChangeHandler,
				}}
				genderVapor={{
					value: myfiltersUser.gendervapor,
					onChange: filtersGenderVaporOnChangeHandler,
				}}
				religion={{
					value: myfiltersUser.religion,
					onChange: filtersReligionOnChangeHandler,
				}}
				smoke={{
					value: myfiltersUser.smoke,
					onChange: filtersSmokeOnChangeHandler,
				}}
				alcohol={{
					value: myfiltersUser.alcohol,
					onChange: filtersAlcoholOnChangeHandler,
				}}
			/>
		</div>
	);
}
