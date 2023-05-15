export function DialogsLeftSideBarWrapper(payload: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-shrink-0 overflow-y-scroll overflow-hidden justify-start shadow-[0px_0px_1px_1px] shadow-lime-300 flex-col bg-gray-900 text-neutral-50 rounded-xl p-2 h-auto w-full md:w-64">
			{payload.children}
		</div>
	);
}
