import * as React from "react";
import { IProfile, IProfileShort } from "../../interfaces/iprofiles";
import { getColorRoundUserLate } from "../../helpers/color";

export function DateTimeVisitShort(payload: {
	profile: IProfile | IProfileShort;
}) {
	const date = new Date(Number(payload.profile.timecode));
	const dateNow = new Date();
	const timecodeNow = dateNow.getTime();
	const timecodeSub = timecodeNow - payload.profile.timecode;
	const colorRound = getColorRoundUserLate(timecodeSub);

	let dateStr = "";

	if (timecodeSub < 1 * 60 * 1000) {
		dateStr += "Онлайн";
	} else {
		dateStr += payload.profile.gender ? "Была " : "Был ";

		if (timecodeSub < 24 * 60 * 60 * 1000) {
			dateStr += "в " + date.toLocaleTimeString().slice(0, -3);
		} else {
			dateStr += date.toLocaleDateString();
		}
	}

	return (
		<div className="flex justify-center items-center select-none">
			<span
				className={
					"flex justify-center rounded-full text-sm shadow-[0px_0px_2px_2px] shadow-zinc-400  h-3 w-3 mx-1" +
					colorRound
				}
			></span>
			<span className="flex justify-center text-sm text-zinc-400">
				{dateStr}
			</span>
		</div>
	);
}

export function DateTimeVisit(payload: { profile: IProfile | IProfileShort }) {
	const date = new Date(Number(payload.profile.timecode));
	const dateNow = new Date();
	const timecodeNow = dateNow.getTime();
	const timecodeSub = timecodeNow - payload.profile.timecode;
	const colorRound = getColorRoundUserLate(timecodeSub);

	let dateStr = "";

	if (timecodeSub < 1 * 60 * 1000) {
		dateStr += "Онлайн";
	} else {
		dateStr += payload.profile.gender ? "Была " : "Был ";

		dateStr += `${date.toLocaleDateString()} в ${date
			.toLocaleTimeString()
			.slice(0, -3)}`;
	}

	return (
		<div className="flex justify-center items-center select-none">
			<span
				className={
					"flex justify-center rounded-full text-sm shadow-[0px_0px_2px_2px] shadow-zinc-400 h-3 w-3 mx-1" +
					colorRound
				}
			></span>
			<span className="flex justify-center text-sm text-zinc-400">
				{dateStr}
			</span>
		</div>
	);
}
