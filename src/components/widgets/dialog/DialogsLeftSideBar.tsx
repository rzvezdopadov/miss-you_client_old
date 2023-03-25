import * as React from "react";
import { useEffect } from "react";
import { IDialog } from "../../../interfaces/iprofiles";
import { store } from "../../../store/store";
import { DialogShort } from "./DialogShort";
import { dialogAction, dialogsAction } from "../../../store/redusers/dialog";
import { modalMessageOpen } from "../../modal/ModalMessage";
import { useQueryGetDialogs } from "../../../api/dialog/dialog.api.hook";
import { modalDialogOpen } from "../../modal/ModalDialog";

export function DialogsLeftSideBar() {
	const { userMyProfile, dialogs, userProfile } = store.getState();

	const { dataGetDialogs, errorGetDialogs, querySendGetDialogs } =
		useQueryGetDialogs();

	useEffect(() => {
		if (userMyProfile.userid) querySendGetDialogs();
	}, [userMyProfile.userid]);

	useEffect(() => {
		if (dataGetDialogs) {
			if (dataGetDialogs) {
				dataGetDialogs.forEach((dialog) =>
					dialog.messages.sort((a, b) => a.timecode - b.timecode)
				);
				store.dispatch(dialogsAction(dataGetDialogs));
			}
		} else if (errorGetDialogs) {
			modalMessageOpen(errorGetDialogs.response.data.message);
		}
	}, [dataGetDialogs, errorGetDialogs]);

	const setDialogOnClick = (userId: string) => {
		const outDialog = dialogs.filter(
			(value: IDialog) => value.userid === userId
		);

		store.dispatch(dialogAction(outDialog[0]));
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
