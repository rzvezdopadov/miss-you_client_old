import * as React from "react";
import { useEffect } from "react";
import { Dialog } from "./Dialog/Dialog";
import {
	closeDialogModal,
	ModalDialog,
} from "../../Modal/ModalDialog/ModalDialog";
import { DialogsLeftSideBar } from "./DialogsLeftSideBar/DialogsLeftSideBar";
import { DialogsRightSideBarAd } from "./DialogsRightSideBarAd/DialogsRightSideBarAd";
import { store } from "../../../utils/store";
import {
	dialogAction,
	initialStateDialog,
	initialStateUserProfile,
} from "../../../utils/reducers";

export function Dialogs() {
	useEffect(() => {
		return () => {
			closeDialogModal();
			store.dispatch(dialogAction(initialStateDialog));
		};
	}, []);

	return (
		<div className="flex h-full w-full justify-center">
			<div className="flex relative bg-gray-700 text-neutral-50 flex-row shadow-md rounded-3xl p-3 w-full">
				<div className="flex flex-shrink-0 overflow-y-scroll overflow-hidden justify-start shadow-[0px_0px_1px_1px] shadow-lime-300 flex-col bg-gray-900 text-neutral-50 rounded-xl p-2 h-auto w-full md:w-64">
					<DialogsLeftSideBar />
				</div>

				<div className="hidden md:flex justify-center shadow-[0px_0px_1px_1px] shadow-lime-300 flex-col bg-gray-900 text-neutral-50 rounded-xl p-2 h-auto w-full">
					<Dialog />
				</div>
				<div className="hidden lg:flex flex-shrink-0 items-center shadow-[0px_0px_1px_1px] shadow-lime-300 flex-col bg-gray-900 text-neutral-50 rounded-xl h-auto w-60">
					<DialogsRightSideBarAd />
				</div>
			</div>
			<div className="visibility md:hidden">
				<ModalDialog />
			</div>
		</div>
	);
}
