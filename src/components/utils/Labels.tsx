import { MouseEventHandler } from "react";

export function LabelHeader(payload: { value: string }) {
	return (
		<div className="flex justify-center items-center select-none">
			<label className="flex text-white text-xl font-bold m-1">
				{payload.value}
			</label>
		</div>
	);
}

export function LabelHeaderLG(payload: { value: string }) {
	return (
		<div className="flex justify-center items-center select-none">
			<label className="flex text-white text-lg font-bold m-1">
				{payload.value}
			</label>
		</div>
	);
}

export function LabelRating(payload: {
	value: number;
	onClick?: MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<div
			className="flex select-none shadow-[0px_0px_3px_3px] shadow-lime-300 bg-orange-700 justify-center my-2 mx-1 rounded-md"
			title="Рейтинг пользователя"
			key={`Rating${payload.value}`}
			onClick={payload.onClick ? payload.onClick : () => {}}
		>
			{`Рейтинг: ${payload.value}`}
		</div>
	);
}

export function LabelCash(payload: {
	value: number;
	onClick?: MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<div
			className="flex select-none shadow-[0px_0px_3px_3px] shadow-lime-300 bg-orange-700 justify-center my-2 mx-1 rounded-md"
			title="MY-Баллы платежная валюта сайта"
			key={`Cash${payload.value}`}
			onClick={payload.onClick ? payload.onClick : () => {}}
		>
			{`MY-Баллы: ${payload.value}`}
		</div>
	);
}
