export function LabelHeader(payload: { value: string }) {
	return (
		<div className="flex justify-center items-center">
			<label className="flex text-white text-xl font-bold mb-4">
				{payload.value}
			</label>
		</div>
	);
}
