import { ChangeEventHandler } from "react";
import { IFilterParamInput } from "../../interfaces/iprofiles";

export function Input(payload: {
	value: string | number;
	onChange: ChangeEventHandler<HTMLInputElement>;
	type: string;
	placeholder: string;
}) {
	return (
		<div
			key={payload.placeholder}
			className="flex relative flex-col my-1 p-1"
		>
			<input
				value={payload.value}
				onChange={payload.onChange}
				title={payload.placeholder}
				className="flex text-center rounded-md border-2 border-lime-300 bg-inherit text-white m-0.5 py-1 px-3"
				type={payload.type}
				placeholder={payload.placeholder}
			/>
			<label
				className={`flex justify-center items-center absolute transition-opacity ease-linear delay-500 text-center text-[10px] h-0 bg-gray-900 text-white -translate-y-2 translate-x-2 py-2 px-3${
					!payload.value ? " opacity-0" : " opacity-100"
				}`}
			>
				{payload.placeholder}
			</label>
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
				className="flex text-center resize-none rounded-md border-2 border-lime-300 bg-inherit text-white w-full py-1"
				placeholder={payload.placeholder}
			></textarea>
			<label
				className={`flex justify-center items-center absolute transition-opacity ease-linear delay-500 text-center text-[10px] h-0 bg-gray-900 text-white -translate-y-2 translate-x-2 py-2 px-3${
					!payload.value ? " opacity-0" : " opacity-100"
				}`}
			>
				{payload.placeholder}
			</label>
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
			className="flex flex-row flex-wrap bg-gray-900 p-0.5 px-1 m-1.5 border-2 border-lime-300 rounded-xl justify-center overflow-hidden"
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
