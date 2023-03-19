import { MouseEventHandler } from "react";
import { LabelWrapper } from "../wrappers/LabelWrapper";
import { FONT_SIZE } from "../styles/enum";

export function Label(payload: {
	value: string;
	fontsize?: FONT_SIZE;
	bold?: boolean;
}) {
	return (
		<LabelWrapper>
			<label
				className={`flex text-white${
					payload.bold ? " font-bold" : ""
				} m-1${payload.fontsize}`}
			>
				{payload.value}
			</label>
		</LabelWrapper>
	);
}

export function LabelPageName(payload: { value: string }) {
	return (
		<Label
			value={payload.value}
			fontsize={FONT_SIZE.lg}
			bold={true}
		></Label>
	);
}

export function LabelWidget(payload: { value: string }) {
	return (
		<Label
			value={payload.value}
			fontsize={FONT_SIZE.base}
			bold={true}
		></Label>
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
