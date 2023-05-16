import * as React from "react";
import { IFilterParamSelect } from "../../interfaces/iprofiles";

export function SelectFromArr(params: {
	value: string | number | readonly string[];
	keyOpt: any;
	onChangeHandler: React.ChangeEventHandler<HTMLSelectElement>;
	arr: any[];
	title: string;
}) {
	return (
		<div className="flex justify-around flex-wrap bg-gray-900 shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-0.5 px-1 m-1.5 relative items-center w-full min-[480px]:w-auto">
			<div className="flex mr-0.5">
				<span className="select-none text-white"> {params.title} </span>
			</div>
			<div className="flex ml-0.5">
				<select
					value={params.value}
					onChange={params.onChangeHandler}
					className="flex bg-gray-300  text-center w-full text-black cursor-pointer m-1 rounded-lg"
					title={params.title}
				>
					{params.arr.map((value, index) => {
						return (
							<option key={params.keyOpt + index} value={index}>
								{` ${value}`}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
}

export function SelectFromArrValue(params: {
	value: string | number | readonly string[];
	keyOpt: any;
	onChangeHandler: React.ChangeEventHandler<HTMLSelectElement>;
	arr: any[];
	title: string;
}) {
	return (
		<div className="flex justify-around flex-wrap bg-gray-900 shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-0.5 px-1 m-1.5 relative items-center w-full min-[480px]:w-auto">
			<div className="flex mr-0.5">
				<span className="select-none text-white"> {params.title} </span>
			</div>
			<div className="flex ml-0.5">
				<select
					value={params.value}
					onChange={params.onChangeHandler}
					className="flex bg-gray-300  text-center w-full text-black cursor-pointer m-1 rounded-lg"
					title={params.title}
				>
					{params.arr.map((value, index) => {
						return (
							<option key={params.keyOpt + index} value={value}>
								{` ${value}`}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
}

export function FiltersOptionAtArr(payload: {
	headName: string;
	arrArgs: Array<{
		data: Array<number | string>;
		filterParam: IFilterParamSelect;
		valen?: boolean;
	}>;
}) {
	return (
		<div className="flex justify-around flex-wrap bg-gray-900 shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-0.5 px-1 m-1.5 relative items-center w-full min-[480px]:w-auto">
			<div className="flex mr-0.5">
				<span className="select-none text-white">
					{payload.headName}
				</span>
			</div>
			<div className="flex ml-0.5">
				{payload.arrArgs.map((arg, i: number) => {
					return (
						<select
							className="flex bg-gray-300  text-center w-full text-black cursor-pointer m-1 rounded-lg"
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
									<option
										key={String(i) + value}
										value={value}
									>
										{value}
									</option>
								);
							})}
						</select>
					);
				})}
			</div>
		</div>
	);
}
