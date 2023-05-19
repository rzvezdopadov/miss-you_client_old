import { MouseEventHandler } from "react";
import { LabelWrapper } from "../wrappers/LabelWrapper";
import { BG_COLOR, FONT_SIZE } from "../../../assets/styles/enum";

export function Label(payload: {
	value?: string;
	fontsize?: FONT_SIZE;
	bold?: boolean;
	title?: string;
	bgcolor?: BG_COLOR;
	shadow?: boolean;
	selectauto?: boolean;
	children?: React.ReactNode;
}) {
	return (
		<label
			className={`flex justify-center my-2 rounded-md text-white ${
				payload.bold ? " font-bold" : ""
			}${payload.fontsize ? ` ${payload.fontsize}` : ""}${
				payload.bgcolor ? ` ${payload.bgcolor}` : ""
			}${
				payload.shadow
					? " shadow-[0px_0px_3px_3px] shadow-lime-300"
					: ""
			}${payload.selectauto ? ` select-auto` : ` select-none`}`}
			title={payload.title ? payload.title : ""}
		>
			{payload.value ? (
				payload.value
			) : payload.children ? (
				payload.children
			) : (
				<></>
			)}
		</label>
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
			className="flex select-none shadow-[0px_0px_3px_3px] shadow-lime-300 bg-orange-700 justify-center my-2 rounded-md"
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
			className="flex select-none shadow-[0px_0px_3px_3px] shadow-lime-300 bg-orange-700 justify-center my-2 rounded-md"
			title="MY-Баллы платежная валюта сайта"
			key={`Cash${payload.value}`}
			onClick={payload.onClick ? payload.onClick : () => {}}
		>
			{`MY-Баллы: ${payload.value}`}
		</div>
	);
}
