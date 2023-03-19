import * as React from "react";
import { useEffect, useRef } from "react";
import { store } from "../../store/store";
import { Dialog } from "../widgets/dialog/Dialog";
import { modalDialogAction } from "../../store/redusers/modal";
import {
	dialogUserIdAction,
	messageForUserAction,
} from "../../store/redusers/dialog";
import { ButtonClose } from "../utils/Buttons";
import { useRefDivVisible } from "../../hooks/form.hook";

export function modalDialogOpen() {
	store.dispatch(modalDialogAction(true));
}

export function modalDialogClose() {
	store.dispatch(modalDialogAction(false));
	store.dispatch(dialogUserIdAction(""));
	store.dispatch(messageForUserAction(""));
}

export function ModalDialog() {
	const { modalDialog } = store.getState();
	const refModalDialog = useRefDivVisible(modalDialog);

	return (
		<div
			ref={refModalDialog}
			className="flex flex-col invisible fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-30 pb-2 h-full lg:h-3/5 lg:max-w-xl"
		>
			<ButtonClose onClick={modalDialogClose} />
			<Dialog />
		</div>
	);
}
