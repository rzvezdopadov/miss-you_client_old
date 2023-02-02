import * as React from "react";
import { useEffect, useRef } from "react";
import { store } from "../../store/store";
import { Dialog } from "../widgets/dialog/Dialog";
import { modalDialogAction } from "../../store/redusers/modal";
import {
	dialogUserIdAction,
	messageForUserAction,
} from "../../store/redusers/dialog";

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
	const refModalDialog = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!refModalDialog.current) return;

		if (modalDialog) {
			refModalDialog.current.classList.remove("invisible");
		} else {
			refModalDialog.current.classList.add("invisible");
		}
	}, [modalDialog]);

	return (
		<div
			ref={refModalDialog}
			className="flex flex-col invisible fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-30 pb-2 h-full lg:h-3/5 lg:max-w-xl"
		>
			<div className="flex absolute justify-center h-6 w-full">
				<div
					onClick={modalDialogClose}
					className="flex justify-center absolute right-4 cursor-pointer rounded-full bg-red-400 h-6 w-6"
				>
					X
				</div>
			</div>

			<Dialog />
		</div>
	);
}
