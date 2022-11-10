import * as React from "react";
import { useEffect, useRef } from "react";
import { dialogModalAction } from "../../utils/reducers";
import { store } from "../../utils/store";
import { Dialog } from "../Dialog/Dialog";

export function openDialogModal() {
	store.dispatch(dialogModalAction(true));
}

export function closeDialogModal() {
	store.dispatch(dialogModalAction(false));
}

export function DialogModal() {
	const { dialogModal } = store.getState();
	const refDialogModal = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!refDialogModal.current) return;

		if (dialogModal) {
			refDialogModal.current.classList.remove("invisible");
		} else {
			refDialogModal.current.classList.add("invisible");
		}
	}, [dialogModal]);

	const closeDialogModalHandler = () => {
		closeDialogModal();
	};

	return (
		<div
			ref={refDialogModal}
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
