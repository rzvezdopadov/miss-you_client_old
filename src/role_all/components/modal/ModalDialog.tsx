import { initialStateDialog } from "../../store/redusers/dialog";
import { ButtonClose } from "../utils/Buttons";
import { useRefDivVisible } from "../../hooks/form.hook";
import { IDialog } from "../../interfaces/iprofiles";
import { storeAll } from "../../store/storeAll";
import { modalDialogAction } from "../../store/redusers/modal";
import { DialogContent } from "../widgets/dialogs/dialog/DialogContent";

export function modalDialogOpen(dialog: IDialog) {
	storeAll.dispatch(
		modalDialogAction({
			enabled: true,
			dialog,
		})
	);
}

export function modalDialogClose() {
	storeAll.dispatch(
		modalDialogAction({
			enabled: false,
			dialog: initialStateDialog,
		})
	);
}

export function ModalDialog() {
	const { modalDialog } = storeAll.getState();
	const refModalDialog = useRefDivVisible(modalDialog.enabled);

	return (
		<div
			ref={refModalDialog}
			className="flex flex-col invisible fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-30 pb-2 h-full lg:h-3/5 lg:max-w-xl"
		>
			<ButtonClose onClick={modalDialogClose} />
			<DialogContent dialog={modalDialog.dialog} />
		</div>
	);
}
