export function getColorRoundUserLate(timecodeSub: number) {
	let colorRound = " bg-white";

	const timecodeDay = (day: number): number => day * 24 * 60 * 60 * 1000;

	if (timecodeSub < timecodeDay(1)) {
		colorRound = " bg-lime-500";
	} else if (timecodeSub < timecodeDay(3)) {
		colorRound = " bg-lime-400";
	} else if (timecodeSub < timecodeDay(6)) {
		colorRound = " bg-yellow-500";
	} else if (timecodeSub < timecodeDay(9)) {
		colorRound = " bg-yellow-400";
	} else if (timecodeSub < timecodeDay(12)) {
		colorRound = " bg-red-500";
	} else if (timecodeSub < timecodeDay(15)) {
		colorRound = " bg-red-400";
	} else if (timecodeSub < timecodeDay(18)) {
		colorRound = " bg-red-300";
	} else if (timecodeSub < timecodeDay(21)) {
		colorRound = " bg-red-200";
	} else if (timecodeSub < timecodeDay(24)) {
		colorRound = " bg-red-100";
	}

	return colorRound;
}
