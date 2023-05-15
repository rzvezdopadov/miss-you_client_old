import { useRefDivVisible } from "../../hooks/form.hook";
import { storeAll } from "../../store/storeAll";
import { modalLoadingAction } from "../../store/redusers/modal";

export function modalLoadingOnShow(text: string = "Загрузка...") {
	storeAll.dispatch(modalLoadingAction({ enabled: true, text }));
}

export function modalLoadingOnHide() {
	storeAll.dispatch(modalLoadingAction({ enabled: false, text: "" }));
}

export function ModalLoading() {
	const { modalLoading } = storeAll.getState();
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
