export function LabelHeader(payload: { value: string }) {
	return (
		<div className="flex justify-center items-center select-none">
			<label className="flex text-white text-xl font-bold mb-4">
				{payload.value}
			</label>
		</div>
	);
}

export function Rating(payload: { value: number }) {
	return (
		<div
			className="flex select-none shadow-[0px_0px_3px_3px] shadow-lime-300 bg-orange-700 justify-center m-1 rounded-md"
			title="Рейтинг пользователя"
			key={`Rating${payload.value}`}
		>
			{`Рейтинг: ${payload.value}`}
		</div>
	);
}
