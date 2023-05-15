export function getDateTimeFromTimeCode(timecode: number) {
	const date = new Date(Number(timecode));

	return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
