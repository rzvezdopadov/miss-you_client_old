import * as React from "react";
import { useEffect, useRef } from "react";
import { modalMessageAction } from "../../utils/reducers";
import { store } from "../../utils/store";

export function openModalMessage(text: string) {
	store.dispatch(modalMessageAction(true, text));
}

function closeModalMessage() {
	store.dispatch(modalMessageAction(false, ""));
}

export function ModalMessage() {
	const { modalMessage } = store.getState();
	const refModalMessage = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!refModalMessage.current) return;

		if (modalMessage.enabled) {
			refModalMessage.current.classList.remove("bottom-[-250px]");
			refModalMessage.current.classList.add("bottom-0");

			setTimeout(() => {
				store.dispatch(modalMessageAction(false, ""));
			}, 3000);
		} else {
			refModalMessage.current.classList.remove("bottom-0");
			refModalMessage.current.classList.add("bottom-[-250px]");
		}
	}, [modalMessage.enabled]);

	return (
		<div
			ref={refModalMessage}
			id="modal-message"
			onClick={closeModalMessage}
			className="fixed shadow-[0px_0px_2px_2px] shadow-lime-300 left-0 right-0 m-auto bottom-[-250px] rounded-t-xl h-auto w-80 z-40 bg-gray-700 p-2 flex flex-col space-y-5 text-white duration-1000 delay-300"
		>
			{modalMessage.text}
		</div>
	);
}
