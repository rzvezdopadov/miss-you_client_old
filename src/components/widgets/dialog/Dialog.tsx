import * as React from "react";
import { store } from "../../../store/store";
import { DialogContent } from "./DialogContent";

export function Dialog() {
	const { dialog } = store.getState();

	return <DialogContent dialog={dialog} />;
}
