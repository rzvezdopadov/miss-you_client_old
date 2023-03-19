export function LabelWrapper(payload: { children: React.ReactNode }) {
	return (
		<div className="flex justify-center items-center select-none">
			{payload.children}
		</div>
	);
}
