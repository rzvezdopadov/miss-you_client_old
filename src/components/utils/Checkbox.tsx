import { useState } from "react";

export function Checkbox(payload: { value: string | number; onChange: any }) {
	const [checked, setChecked] = useState(false);

	return (
		<div
			key={payload.value}
			className="flex justify-center items-center rounded-xl shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-800 text-white m-0.5 mx-0.5 px-2"
		>
			<input
				checked={checked}
				value={payload.value}
				onChange={() => {
					setChecked(!checked);

					if (payload.onChange) {
						payload.onChange(checked);
					}
				}}
				className="flex mx-0.5 cursor-pointer"
				type="checkbox"
			/>
			<label className="flex mx-0.5">{payload.value}</label>
		</div>
	);
}
