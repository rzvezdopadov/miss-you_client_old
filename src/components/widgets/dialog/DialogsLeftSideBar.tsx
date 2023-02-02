import * as React from "react";
import { useEffect } from "react";
import { useQueryGetDialogs } from "../../../hooks/api.hook";
import { IDialog } from "../../../interfaces/iprofiles";
import { store } from "../../../store/store";
import { DialogShort } from "./DialogShort";
import {
	dialogAction,
	dialogUserIdAction,
	dialogsAction,
} from "../../../store/redusers/dialog";
import { modalMessageOpen } from "../../modal/ModalMessage";

export function DialogsLeftSideBar() {
	const { userMyProfile, dialogs } = store.getState();

	const { data, error, querySendGetDialogs } = useQueryGetDialogs();

	useEffect(() => {
		if (userMyProfile.userid) querySendGetDialogs();
	}, [userMyProfile.userid]);

	useEffect(() => {
		if (data) {
			data as Array<IDialog>;

			if (data) {
				store.dispatch(dialogsAction(data));
			}
		} else if (error) {
			modalMessageOpen(error.response.data.message);
		}
	}, [data, error]);

	const setDialogOnClick = (userId: string) => {
		const outDialog = dialogs.filter(
			(value: IDialog) => value.userid === userId
		);

		store.dispatch(dialogAction(outDialog[0]));
		store.dispatch(dialogUserIdAction(userId));
		openDialogModal();
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
function openDialogModal() {
	throw new Error("Function not implemented.");
}
