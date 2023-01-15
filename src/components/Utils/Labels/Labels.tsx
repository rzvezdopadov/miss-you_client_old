export function LabelHeader(payload: { value: string }) {
	return (
		<div className="flex justify-center items-center">
			<label className="flex text-white text-xl font-bold mb-4">
				{payload.value}
			</label>
		</div>
	);
}

export function Rating(payload: { value: number }) {
	return (
		<div
			className="flex select-none bg-orange-700 justify-center m-1 rounded-md"
			title="Рейтинг пользователя"
			key={`Rating${payload.value}`}
		>
			{`Рейтинг: ${payload.value}`}
		</div>
	);
}
