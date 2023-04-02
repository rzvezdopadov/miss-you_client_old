import { useEffect } from "react";
import { store } from "../../../store/store";
import { Button } from "../../utils/Buttons";
import { modalDialogClose, modalDialogOpen } from "../../modal/ModalDialog";
import { useQueryGetDialog } from "../../../api/dialog/dialog.api.hook";
import { modalMessageOpen } from "../../modal/ModalMessage";
import { IQueryDialog } from "../../../api/dialog/idialog.api";

export function UserProfileSendMessage() {
	const { userMyProfile, userProfile } = store.getState();
	const { dataGetDialog, errorGetDialog, querySendGetDialog } =
		useQueryGetDialog();

	useEffect(() => {
		return () => {
			modalDialogClose();
		};
	}, []);

	useEffect(() => {
		if (!dataGetDialog) return;

		modalDialogOpen(dataGetDialog);
	}, [dataGetDialog]);

	useEffect(() => {
		if (!errorGetDialog) return;

		modalMessageOpen(errorGetDialog.response.data.message);
	}, [errorGetDialog]);

	const openDialogModalHandler = () => {
		const data: IQueryDialog = {
			userid: userProfile.profile.userid,
		};

		querySendGetDialog(data);
	};

	return userProfile.profile.bannedusers.includes(userMyProfile.userid) ? (
		<></>
	) : (
		<Button value={"Написать сообщение"} onClick={openDialogModalHandler} />
	);
}