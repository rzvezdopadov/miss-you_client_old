export function FormWrapper(payload: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col bg-gray-700 shadow-[0px_0px_5px_5px] shadow-lime-300 rounded-xl px-2 pt-2 pb-2 w-80 overflow-scroll">
			{payload.children}
		</div>
	);
}
