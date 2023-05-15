export function DialogsDialogWrapper(payload: { children: React.ReactNode }) {
	return (
		<div className="hidden md:flex justify-center shadow-[0px_0px_1px_1px] shadow-lime-300 flex-col bg-gray-900 text-neutral-50 rounded-xl p-2 h-auto w-full">
			{payload.children}
		</div>
	);
}
