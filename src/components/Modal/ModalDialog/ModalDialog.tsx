import * as React from "react";
import { useEffect, useRef } from "react";
import {
	dialogUserIdAction,
	messageForUserAction,
	modalDialogAction,
} from "../../../utils/reducers";
import { store } from "../../../utils/store";
import { Dialog } from "../../Pages/Dialogs/Dialog/Dialog";

export function openDialogModal() {
	store.dispatch(modalDialogAction(true));
}

export function closeDialogModal() {
	store.dispatch(modalDialogAction(false));
	store.dispatch(dialogUserIdAction(0));
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

	const closeDialogModalHandler = () => {
		closeDialogModal();
		store.dispatch(dialogUserIdAction(0));
	};

	return (
		<div
			ref={refModalDialog}
			className="flex flex-col fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-30 pb-2 h-full lg:h-3/5 lg:max-w-xl"
		>
			<div className="flex absolute justify-center h-6 w-full">
				<div
					onClick={closeDialogModalHandler}
					className="flex justify-center absolute right-4 cursor-pointer rounded-full bg-red-400 h-6 w-6"
				>
					X
				</div>
			</div>

			<Dialog />
		</div>
	);
}
