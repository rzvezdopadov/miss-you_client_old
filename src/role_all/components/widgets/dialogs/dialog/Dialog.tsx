import { DialogContent } from "./DialogContent";
import { storeAll } from "../../../../store/storeAll";

export function Dialog() {
	const { dialog } = storeAll.getState();

	return <DialogContent dialog={dialog} />;
}
