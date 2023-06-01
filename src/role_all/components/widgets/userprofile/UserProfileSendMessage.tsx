import { useEffect } from "react";
import { Button } from "../../utils/Buttons";
import { modalDialogClose, modalDialogOpen } from "../../modal/ModalDialog";
import { useQueryGetDialog } from "../../../api/dialog/dialog.api.hook";
import { modalMessageOpen } from "../../modal/ModalMessage";
import { IQueryDialog } from "../../../api/dialog/idialog.api";
import { storeAll } from "../../../store/storeAll";
import { store } from "../../../../role_user/store/store";
import { lazyloadingusercount } from "../../../../config";

export function UserProfileSendMessage() {
	const { userMyProfile } = storeAll.getState();
	const { userProfile } = store.getState();
	const { dataGetDialog, errorGetDialog, querySendGetDialog } =
		useQueryGetDialog();

	useEffect(() => {
		return () => {
			modalDialogClose();
		};
	}, []);

	useEffect(() => {
		if (!dataGetDialog) return;

		dataGetDialog.msgs.sort((a, b) => a.timecode - b.timecode);

		modalDialogOpen(dataGetDialog);
	}, [dataGetDialog]);

	useEffect(() => {
		if (!errorGetDialog) return;

		modalMessageOpen(errorGetDialog.response.data.message);
	}, [errorGetDialog]);

	const openDialogModalHandler = () => {
		const data: IQueryDialog = {
			userid: userProfile.profile.userid,
			startcount: 0,
			amount: lazyloadingusercount,
		};

		querySendGetDialog(data);
	};

	return userProfile.profile.bannedusers.includes(userMyProfile.userid) ? (
		<></>
	) : (
		<Button value={"Написать сообщение"} onClick={openDialogModalHandler} />
	);
}
