import { useEffect } from "react";
import {
	ModalDialog,
	modalDialogClose,
} from "../../../role_all/components/modal/ModalDialog";
import {
	dialogAction,
	initialStateDialog,
} from "../../../role_all/store/redusers/dialog";
import { MainScrollWrapper } from "../../../role_all/components/wrappers/MainScrollWrapper";
import { storeAll } from "../../../role_all/store/storeAll";
import { DialogsLeftSideBar } from "../../../role_all/components/widgets/dialogs/DialogsLeftSideBar";
import { Dialog } from "../../../role_all/components/widgets/dialogs/dialog/Dialog";
import { DialogsRightSideBarAd } from "../../../role_all/components/widgets/dialogs/DialogsRightSideBarAd";
import { DialogsDialogWrapper } from "../../../role_all/components/wrappers/dialogs/DialogsDialogWrapper";
import { DialogsLeftSideBarWrapper } from "../../../role_all/components/wrappers/dialogs/DialogsLeftSideBarWrapper";
import { DialogsRightSideBarAdWrapper } from "../../../role_all/components/wrappers/dialogs/DialogsRightSideBarAdWrapper";
import { DialogsWrapper } from "../../../role_all/components/wrappers/dialogs/DialogsWrapper";
import { ModalUserProfile } from "../modal/ModalUserProfile";

export function Dialogs() {
	useEffect(() => {
		return () => {
			modalDialogClose();
			storeAll.dispatch(dialogAction(initialStateDialog));
		};
	}, []);

	return (
		<MainScrollWrapper shadow={true} color={true}>
			<DialogsWrapper>
				<DialogsLeftSideBarWrapper>
					<DialogsLeftSideBar />
				</DialogsLeftSideBarWrapper>
				<DialogsDialogWrapper>
					<Dialog />
				</DialogsDialogWrapper>
				<DialogsRightSideBarAdWrapper>
					<DialogsRightSideBarAd />
				</DialogsRightSideBarAdWrapper>
			</DialogsWrapper>
			<div className="visibility md:hidden">
				<ModalDialog />
			</div>
			<ModalUserProfile />
		</MainScrollWrapper>
	);
}
