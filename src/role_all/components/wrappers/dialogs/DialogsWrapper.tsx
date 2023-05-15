export function DialogsWrapper(payload: { children: React.ReactNode }) {
	return (
		<div className="flex bg-gray-700 text-neutral-50 flex-row shadow-md rounded-3xl p-1 w-full h-full">
			{payload.children}
		</div>
	);
}
