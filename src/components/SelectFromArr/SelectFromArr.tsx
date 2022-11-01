import * as React from "react";

export function SelectFromArr(params: {
	value: string | number | readonly string[];
	keyOpt: any;
	onChangeHandler: React.ChangeEventHandler<HTMLSelectElement>;
	arr: any[];
	title: string;
}) {
	return (
		<div className="flex shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-1 m-2 relative items-center">
			<div className="flex mr-2">
				<span className="select-none"> {params.title} </span>
			</div>
			<div className="flex ml-2">
				<select
					value={params.value}
					onChange={params.onChangeHandler}
					className="flex bg-gray-300  text-center w-full text-black m-1 rounded-lg"
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
		<div className="flex shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-1 m-2 relative items-center">
			<div className="flex mr-2">
				<span className="select-none"> {params.title} </span>
			</div>
			<div className="flex ml-2">
				<select
					value={params.value}
					onChange={params.onChangeHandler}
					className="flex bg-gray-300  text-center w-full text-black m-1 rounded-lg"
					title={params.title}
				>
					{params.arr.map((value, index) => {
						return (
							<option key={params.keyOpt + index} value={value}>
								{" "}
								{value}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
}
