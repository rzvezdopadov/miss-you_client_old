export function getColorRoundUserLate(timecodeSub: number) {
	let colorRound = " bg-white";

	if (timecodeSub < 24 * 60 * 60 * 1000) {
		colorRound = " bg-lime-500";
	} else if (timecodeSub < 48 * 60 * 60 * 1000) {
		colorRound = " bg-yellow-500";
	} else if (timecodeSub < 72 * 60 * 60 * 1000) {
		colorRound = " bg-red-500";
	}

	return colorRound;
}
