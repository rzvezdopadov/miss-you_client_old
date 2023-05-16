import { useEffect } from "react";
import { DialogShort } from "./dialog/DialogShort";
import { storeAll } from "../../../store/storeAll";
import { useQueryGetDialogs } from "../../../api/dialog/dialog.api.hook";
import { dialogAction, dialogsAction } from "../../../store/redusers/dialog";
import { modalMessageOpen } from "../../modal/ModalMessage";
import { IDialog } from "../../../interfaces/iprofiles";
import { modalDialogOpen } from "../../modal/ModalDialog";

export function DialogsLeftSideBar() {
	const { userMyProfile, dialogs, userProfile } = storeAll.getState();
	const { dataGetDialogs, errorGetDialogs, querySendGetDialogs } =
		useQueryGetDialogs();

	useEffect(() => {
		if (userMyProfile.userid) querySendGetDialogs();
	}, [userMyProfile.userid]);

	useEffect(() => {
		if (!dataGetDialogs) return;

		dataGetDialogs.sort(
			(a, b) => b.messages[0].timecode - a.messages[0].timecode
		);
		dataGetDialogs.forEach((dialog) =>
			dialog.messages.sort((a, b) => a.timecode - b.timecode)
		);

		storeAll.dispatch(dialogsAction(dataGetDialogs));
	}, [dataGetDialogs]);

	useEffect(() => {
		if (!errorGetDialogs) return;

		modalMessageOpen(errorGetDialogs.response.data.message);
	}, [errorGetDialogs]);

	const setDialogOnClick = (userId: string) => {
		const outDialog = dialogs.filter(
			(value: IDialog) => value.userid === userId
		);

		storeAll.dispatch(dialogAction(outDialog[0]));

		if (userProfile.enabled || document.body.clientWidth < 768)
			modalDialogOpen(outDialog[0]);
	};

	return (
		<>
			<div className="flex justify-center items-center w-full my-1 select-none">
				Диалоги
			</div>

			{dialogs.length ? (
				dialogs.map((dialog: IDialog) => {
					return (
						<DialogShort
							key={`DialogShort${dialog.timecode}`}
							dialog={dialog}
							onClickHandler={() => {
								setDialogOnClick(dialog.userid);
							}}
						/>
					);
				})
			) : (
				<div className="flex justify-center text-lime-400">
					Пока нет диалогов &#128524;
				</div>
			)}
		</>
	);
}