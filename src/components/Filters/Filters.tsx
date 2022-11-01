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

function FiltersOptionAtArr({ headName, argsArr }) {
	return (
		<div className="flex flex-row bg-gray-900 p-1 m-2 shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl justify-center">
			<span className="flex m-1">{headName}</span>

			{argsArr.map((arr, i) => {
				return (
					<select
						className="flex bg-gray-300 text-black text-center m-1 rounded-lg"
						key={i + headName}
						value={arr.value}
						onChange={arr.onChange}
					>
						{arr.arr.map((value, i) => {
							return argsArr.length < 2 ? (
								<option key={i + value} value={i}>
									{value}
								</option>
							) : (
								<option key={i + value} value={value}>
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

export function Filters({
	location,
	ageStart,
	ageEnd,
	growthStart,
	growthEnd,
	weightStart,
	weightEnd,
	signZodiac,
	genderVapor,
	religion,
	smoke,
	alcohol,
}) {
	return (
		<>
			<div className="flex flex-row bg-gray-900 p-1 m-2 shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl justify-center">
				<span className="flex m-1">Город:</span>

				<select
					{...location}
					className="flex bg-gray-300 text-black text-center m-1 rounded-lg"
				>
					{arr_location.map((arr) => {
						const [key, value] = arr;

						return (
							<option key={key + value} value={key}>
								{value}
							</option>
						);
					})}
				</select>
			</div>

			<FiltersOptionAtArr
				headName={"Возраст:"}
				argsArr={[
					{ arr: arr_age, ...ageStart },
					{ arr: arr_age, ...ageEnd },
				]}
			/>
			<FiltersOptionAtArr
				headName={"Рост:"}
				argsArr={[
					{ arr: arr_growth, ...growthStart },
					{ arr: arr_growth, ...growthEnd },
				]}
			/>
			<FiltersOptionAtArr
				headName={"Вес:"}
				argsArr={[
					{ arr: arr_weight, ...weightStart },
					{ arr: arr_weight, ...weightEnd },
				]}
			/>
			<FiltersOptionAtArr
				headName={"Знак зодиака:"}
				argsArr={[{ arr: arr_signZodiac, ...signZodiac }]}
			/>
			<FiltersOptionAtArr
				headName={"Ищу:"}
				argsArr={[{ arr: arr_genderVapor, ...genderVapor }]}
			/>
			<FiltersOptionAtArr
				headName={"Религия:"}
				argsArr={[{ arr: arr_religion, ...religion }]}
			/>
			<FiltersOptionAtArr
				headName={"Курение:"}
				argsArr={[{ arr: arr_smoke, ...smoke }]}
			/>
			<FiltersOptionAtArr
				headName={"Алкоголь:"}
				argsArr={[{ arr: arr_alcohol, ...alcohol }]}
			/>
		</>
	);
}
