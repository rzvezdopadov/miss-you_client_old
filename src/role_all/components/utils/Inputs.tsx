import { ChangeEventHandler } from "react";
import { IFilterParamInput } from "../../interfaces/iprofiles";

export function Input(payload: {
	value: string | number;
	onChange: ChangeEventHandler<HTMLInputElement>;
	type: string;
	placeholder: string;
}) {
	return (
		<div key={payload.placeholder} className="flex flex-col my-1">
			<input
				value={payload.value}
				onChange={payload.onChange}
				title={payload.placeholder}
				className="flex text-center rounded-md shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-300 text-black m-0.5 py-1 px-3"
				type={payload.type}
				placeholder={payload.placeholder}
			/>
		</div>
	);
}

export function TextArea(payload: {
	value: string | number;
	onChange: ChangeEventHandler<HTMLTextAreaElement>;
	placeholder: string;
}) {
	return (
		<div key={payload.placeholder} className="flex m-1">
			<textarea
				value={payload.value}
				onChange={payload.onChange}
				title={payload.placeholder}
				maxLength={50}
				className="flex text-center resize-none rounded-xl shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-300 text-black w-full"
				placeholder={payload.placeholder}
			></textarea>
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
				className="flex bg-gray-300 text-black text-center m-1 rounded-md"
				value={payload.filterParam.value}
				onChange={payload.filterParam.onChange}
			></input>
		</div>
	);
}
