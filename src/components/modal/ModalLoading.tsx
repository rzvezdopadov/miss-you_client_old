import * as React from "react";
import { useEffect, useRef } from "react";
import { store } from "../../store/store";
import { modalLoadingAction } from "../../store/redusers/modal";
import { useRefDivVisible } from "../../hooks/form.hook";

export function modalLoadingOnShow(text: string = "Загрузка...") {
	store.dispatch(modalLoadingAction(true, text));
}

export function modalLoadingOnHide() {
	store.dispatch(modalLoadingAction(false));
}

export function ModalLoading() {
	const { modalLoading } = store.getState();
	const refModalLoading = useRefDivVisible(modalLoading.enabled);

	return (
		<div
			ref={refModalLoading}
			id="modalLoading"
			className="flex invisible w-full h-full justify-center items-center bg-black opacity-80 text-white absolute z-50"
		>
			<div className="flex animate-spin opacity-100 rounded-full bg-lime-500 h-20 w-20 mr-3">
				<div className="flex justify-center animate-pulse bg-black h-10 w-10"></div>
			</div>
			Загрузка...
		</div>
	);
}
