export function DialogsRightSideBarAdWrapper(payload: {
	children: React.ReactNode;
}) {
	return (
		<div className="hidden lg:flex flex-shrink-0 items-center shadow-[0px_0px_1px_1px] shadow-lime-300 flex-col bg-gray-900 text-neutral-50 rounded-xl h-auto w-60">
			{payload.children}
		</div>
	);
}
