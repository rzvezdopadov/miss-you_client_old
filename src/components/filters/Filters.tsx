import * as React from "react";
import {
	data_age,
	data_alcohol,
	data_genderVapor,
	data_growth,
	data_location,
	data_religion,
	data_signZodiac,
	data_smoke,
	data_weight,
} from "../../data/profiles";
import { IFilterParamSelect } from "../../interfaces/iprofiles";
import { FiltersOptionAtArr } from "../utils/Selects";

export function Filters(payload: {
	location: IFilterParamSelect;
	ageStart: IFilterParamSelect;
	ageEnd: IFilterParamSelect;
	growthStart: IFilterParamSelect;
	growthEnd: IFilterParamSelect;
	weight: IFilterParamSelect;
	signZodiac: IFilterParamSelect;
	genderVapor: IFilterParamSelect;
	religion: IFilterParamSelect;
	smoke: IFilterParamSelect;
	alcohol: IFilterParamSelect;
}) {
	return (
		<>
			<FiltersOptionAtArr
				headName={"Локация:"}
				arrArgs={[
					{
						data: data_location,
						filterParam: { ...payload.location },
						valen: true,
					},
				]}
			/>

			<FiltersOptionAtArr
				headName={"Возраст:"}
				arrArgs={[
					{ data: data_age, filterParam: { ...payload.ageStart } },
					{ data: data_age, filterParam: { ...payload.ageEnd } },
				]}
			/>
			<FiltersOptionAtArr
				headName={"Рост:"}
				arrArgs={[
					{
						data: data_growth,
						filterParam: { ...payload.growthStart },
					},
					{
						data: data_growth,
						filterParam: { ...payload.growthEnd },
					},
				]}
			/>
			<FiltersOptionAtArr
				headName={"Телосложение:"}
				arrArgs={[
					{
						data: data_weight,
						filterParam: { ...payload.weight },
					},
				]}
			/>
			<FiltersOptionAtArr
				headName={"Знак зодиака:"}
				arrArgs={[
					{
						data: data_signZodiac,
						filterParam: { ...payload.signZodiac },
					},
				]}
			/>
			<FiltersOptionAtArr
				headName={"Ищу:"}
				arrArgs={[
					{
						data: data_genderVapor,
						filterParam: { ...payload.genderVapor },
					},
				]}
			/>
			<FiltersOptionAtArr
				headName={"Религия:"}
				arrArgs={[
					{
						data: data_religion,
						filterParam: { ...payload.religion },
					},
				]}
			/>
			<FiltersOptionAtArr
				headName={"Курение:"}
				arrArgs={[
					{ data: data_smoke, filterParam: { ...payload.smoke } },
				]}
			/>
			<FiltersOptionAtArr
				headName={"Алкоголь:"}
				arrArgs={[
					{ data: data_alcohol, filterParam: { ...payload.alcohol } },
				]}
			/>
		</>
	);
}
