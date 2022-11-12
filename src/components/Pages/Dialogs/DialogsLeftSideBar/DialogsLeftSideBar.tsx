import * as React from "react";
import { useEffect } from "react";
import { useQueryGetDialogs } from "../../../../hooks/api.hook";
import { IDialog } from "../../../../interfaces/iprofiles";
import {
	dialogAction,
	dialogIdAction,
	dialogsAction,
} from "../../../../utils/reducers";
import { store } from "../../../../utils/store";
import { openDialogModal } from "../../../Modal/ModalDialog/ModalDialog";
import { DialogShort } from "../DialogShort/DialogShort";
import { openModalMessage } from "../../../Modal/ModalMessage/ModalMessage";

export function DialogsLeftSideBar() {
	const { userMyProfile, dialogs } = store.getState();

	const { data, error, querySendGetDialogs } = useQueryGetDialogs();

	useEffect(() => {
		querySendGetDialogs();
	}, [userMyProfile]);

	useEffect(() => {
		if (data) {
			data as Array<IDialog>;

			if (data) {
				store.dispatch(dialogsAction(data));
			}
		} else if (error) {
			openModalMessage(error.response.data.message);
		}
	}, [data, error]);

	const setDialogOnClick = (idUser: number) => {
		const outDialog = dialogs.filter(
			(value: IDialog) => value.idUser === idUser
		);

		store.dispatch(dialogAction(outDialog[0]));
		store.dispatch(dialogIdAction(idUser));
		openDialogModal();
	};

	return (
		<>
			<div className="flex justify-center items-center w-full my-1 select-none">
				Диалоги
			</div>

			{dialogs.length ? (
				dialogs.map((dialog: IDialog, index) => {
					return (
						<DialogShort
							key={dialog.timecode + index}
							dialog={dialog}
							onClickHandler={() => {
								setDialogOnClick(dialog.idUser);
							}}
						/>
					);
				})
			) : (
				<div className="flex justify-center text-lime-400">
					Пока нет диалогов =(
				</div>
			)}
		</>
	);
}
