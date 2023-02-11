import { IFilterParamInput } from "../../interfaces/iprofiles";

export function Input(payload: {
	value: string | number;
	onChange: any;
	type: string;
	placeholder: string;
}) {
	return (
		<div key={payload.placeholder} className="flex flex-col my-1">
			<input
				value={payload.value}
				onChange={payload.onChange}
				title={payload.placeholder}
				className="flex text-center rounded-xl shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-300 text-black m-0.5 mx-1.5 py-1 px-3"
				type={payload.type}
				placeholder={payload.placeholder}
			/>
		</div>
	);
}

export function FiltersInput(payload: {
	headName: string;
	filterParam: IFilterParamInput;
}) {
	return (
		<div
			key={payload.headName}
			className="flex flex-row flex-wrap bg-gray-900 p-0.5 px-1 m-1.5 shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl justify-center overflow-hidden"
		>
			<span className="flex m-1">{payload.headName}</span>

			<input
				className="flex bg-gray-300 text-black text-center m-1 rounded-lg"
				value={payload.filterParam.value}
				onChange={payload.filterParam.onChange}
			></input>
		</div>
	);
}
