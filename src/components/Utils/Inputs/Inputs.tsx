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
