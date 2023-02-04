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
import { IFilterParam } from "../../interfaces/iprofiles";

function FiltersOptionAtArr(payload: {
	headName: string;
	arrArgs: Array<{
		data: Array<number | string>;
		filterParam: IFilterParam;
		valen?: boolean;
	}>;
}) {
	return (
		<div className="flex flex-row flex-wrap bg-gray-900 p-0.5 px-1 m-1.5 shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl justify-center overflow-hidden">
			<span className="flex m-1">{payload.headName}</span>

			{payload.arrArgs.map((arg, i: number) => {
				return (
					<select
						className="flex bg-gray-300 text-black text-center cursor-pointer m-1 rounded-lg"
						key={i + payload.headName}
						value={arg.filterParam.value}
						onChange={arg.filterParam.onChange}
					>
						{arg.data.map((value, i: number) => {
							return payload.arrArgs.length < 2 ? (
								<option
									key={String(i) + value}
									value={arg.valen ? value : i}
								>
									{value}
								</option>
							) : (
								<option key={String(i) + value} value={value}>
									{value}
								</option>
							);
						})}
					</select>
				);
			})}
		</div>
	);
}

export function Filters(payload: {
	location: IFilterParam;
	ageStart: IFilterParam;
	ageEnd: IFilterParam;
	growthStart: IFilterParam;
	growthEnd: IFilterParam;
	weight: IFilterParam;
	signZodiac: IFilterParam;
	genderVapor: IFilterParam;
	religion: IFilterParam;
	smoke: IFilterParam;
	alcohol: IFilterParam;
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
