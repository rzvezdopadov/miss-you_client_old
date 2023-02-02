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
	argsArr: Array<{
		data: Array<number | string>;
		filterParam: IFilterParam;
		valen?: boolean;
	}>;
}) {
	return (
		<div className="flex flex-row bg-gray-900 p-0.5 px-1 m-1.5 shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl justify-center">
			<span className="flex m-1">{payload.headName}</span>

			{payload.argsArr.map((data, i: number) => {
				return (
					<select
						className="flex bg-gray-300 text-black text-center cursor-pointer m-1 rounded-lg"
						key={i + payload.headName}
						value={data.filterParam.value}
						onChange={data.filterParam.onChange}
					>
						{data.data.map((value, i: number) => {
							return payload.argsArr.length < 2 ? (
								<option
									key={String(i) + value}
									value={data.valen ? value : i}
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
				argsArr={[
					{
						data: data_location,
						filterParam: { ...payload.location },
						valen: true,
					},
				]}
			/>

			<FiltersOptionAtArr
				headName={"Возраст:"}
				argsArr={[
					{ data: data_age, filterParam: { ...payload.ageStart } },
					{ data: data_age, filterParam: { ...payload.ageEnd } },
				]}
			/>
			<FiltersOptionAtArr
				headName={"Рост:"}
				argsArr={[
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
				argsArr={[
					{
						data: data_weight,
						filterParam: { ...payload.weight },
					},
				]}
			/>
			<FiltersOptionAtArr
				headName={"Знак зодиака:"}
				argsArr={[
					{
						data: data_signZodiac,
						filterParam: { ...payload.signZodiac },
					},
				]}
			/>
			<FiltersOptionAtArr
				headName={"Ищу:"}
				argsArr={[
					{
						data: data_genderVapor,
						filterParam: { ...payload.genderVapor },
					},
				]}
			/>
			<FiltersOptionAtArr
				headName={"Религия:"}
				argsArr={[
					{
						data: data_religion,
						filterParam: { ...payload.religion },
					},
				]}
			/>
			<FiltersOptionAtArr
				headName={"Курение:"}
				argsArr={[
					{ data: data_smoke, filterParam: { ...payload.smoke } },
				]}
			/>
			<FiltersOptionAtArr
				headName={"Алкоголь:"}
				argsArr={[
					{ data: data_alcohol, filterParam: { ...payload.alcohol } },
				]}
			/>
		</>
	);
}
