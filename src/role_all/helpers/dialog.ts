import { IDialog } from "../interfaces/iprofiles";

export function dialogsSort(dialogs: IDialog[]) {
	// dialogs.sort((a, b) => b.msgs[0].timecode - a.msgs[0].timecode);
	// dialogs.forEach((dialog) =>
	// 	dialog.msgs.sort((a, b) => a.timecode - b.timecode)
	// );

	return dialogs;
}
