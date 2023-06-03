import { IDialog } from "../interfaces/iprofiles";

export function dialogsSort(dialogs: IDialog[]) {
	if (!dialogs) return [];

	const newDialogs = dialogs
		.map((dialog) => {
			const newDialog = { ...dialog };
			const newMessages = [...newDialog.msgs];
			newDialog.msgs = newMessages.sort(
				(a, b) => a.timecode - b.timecode
			);
			return newDialog;
		})
		.sort(
			(a, b) =>
				b.msgs[b.msgs.length - 1].timecode -
				a.msgs[a.msgs.length - 1].timecode
		);

	return newDialogs;
}
