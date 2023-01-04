import * as React from "react";
import {
	arr_age,
	arr_alcohol,
	arr_genderVapor,
	arr_growth,
	arr_location,
	arr_religion,
	arr_signZodiac,
	arr_smoke,
	arr_weight,
} from "../../arrdata/profiles";
import { IFilterParam } from "../../interfaces/iprofiles";

function FiltersOptionAtArr(payload: {
	headName: string;
	argsArr: Array<{
		arr: Array<number | string>;
		filterParam: IFilterParam;
	}>;
}) {
	return (
		<div className="flex flex-row bg-gray-900 p-1 m-2 shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl justify-center">
			<span className="flex m-1">{payload.headName}</span>

			{payload.argsArr.map((arr, i: number) => {
				return (
					<select
						className="flex bg-gray-300 text-black text-center m-1 rounded-lg"
						key={i + payload.headName}
						value={arr.filterParam.value}
						onChange={arr.filterParam.onChange}
					>
						{arr.arr.map((value, i: number) => {
							return payload.argsArr.length < 2 ? (
								<option key={String(i) + value} value={i}>
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
			<div className="flex flex-row flex-wrap bg-gray-900 p-1 m-2 shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl justify-center">
				<span className="flex m-1">Локация:</span>

				<select
					{...payload.location}
					className="flex bg-gray-300 text-black text-center m-1 rounded-lg"
				>
					{arr_location.map((value, index) => {
						return (
							<option
								key={`filterscountrytown${index}`}
								value={value}
							>
								{value}
							</option>
						);
					})}
				</select>
			</div>

			<FiltersOptionAtArr
				headName={"Возраст:"}
				argsArr={[
					{ arr: arr_age, filterParam: { ...payload.ageStart } },
					{ arr: arr_age, filterParam: { ...payload.ageEnd } },
				]}
			/>
			<FiltersOptionAtArr
				headName={"Рост:"}
				argsArr={[
					{
						arr: arr_growth,
						filterParam: { ...payload.growthStart },
					},
					{ arr: arr_growth, filterParam: { ...payload.growthEnd } },
				]}
			/>
			<FiltersOptionAtArr
				headName={"Телосложение:"}
				argsArr={[
					{
						arr: arr_weight,
						filterParam: { ...payload.weight },
					},
				]}
			/>
			<FiltersOptionAtArr
				headName={"Знак зодиака:"}
				argsArr={[
					{
						arr: arr_signZodiac,
						filterParam: { ...payload.signZodiac },
					},
				]}
			/>
			<FiltersOptionAtArr
				headName={"Ищу:"}
				argsArr={[
					{
						arr: arr_genderVapor,
						filterParam: { ...payload.genderVapor },
					},
				]}
			/>
			<FiltersOptionAtArr
				headName={"Религия:"}
				argsArr={[
					{ arr: arr_religion, filterParam: { ...payload.religion } },
				]}
			/>
			<FiltersOptionAtArr
				headName={"Курение:"}
				argsArr={[
					{ arr: arr_smoke, filterParam: { ...payload.smoke } },
				]}
			/>
			<FiltersOptionAtArr
				headName={"Алкоголь:"}
				argsArr={[
					{ arr: arr_alcohol, filterParam: { ...payload.alcohol } },
				]}
			/>
		</>
	);
}
