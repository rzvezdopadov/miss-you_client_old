import { DialogShort } from "./dialog/DialogShort";
import { storeAll } from "../../../store/storeAll";
import { dialogAction } from "../../../store/redusers/dialog";
import { IDialog } from "../../../interfaces/iprofiles";
import { modalDialogOpen } from "../../modal/ModalDialog";
import { store } from "../../../../role_user/store/store";

export function DialogsLeftSideBar() {
	const { dialogs } = storeAll.getState();
	const { userProfile } = store.getState();

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
							key={`DialogShort${dialog.userid}`}
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
