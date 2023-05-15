import React from "react";
import { modalMessageOpen } from "../../../modal/ModalMessage";
import { DialogSmiles } from "./DialogSmiles";
import { DialogHead } from "./DialogHead";
import { DialogMessages } from "./DialogMessages";
import { IDialog } from "../../../../interfaces/iprofiles";
import { storeAll } from "../../../../store/storeAll";
import {
	dialogAction,
	initialStateDialog,
} from "../../../../store/redusers/dialog";
import { socketSendMessage } from "../../../../socket/dialogs";
import { ModalComplaint } from "../../../../../role_user/components/modal/ModalComplaint";

export function DialogContent(payload: { dialog: IDialog }) {
	const [messageForUser, setMessageForUser] = React.useState("");
	const [smilesOpen, setSmilesOpen] = React.useState(false);

	React.useEffect(() => {
		return () => {
			storeAll.dispatch(dialogAction(initialStateDialog));
		};
	}, []);

	const sendMessageHandler = () => {
		if (!messageForUser) {
			modalMessageOpen("Сообщение не может быть пустым!");

			return;
		}

		socketSendMessage(messageForUser);
		setMessageForUser("");
	};

	const sendMessageOnKeyDownHandler = (
		e: React.KeyboardEvent<HTMLTextAreaElement>
	) => {
		if (e.ctrlKey && e.code === "Enter") sendMessageHandler();
	};

	return (
		<>
			<DialogHead {...payload.dialog} />
			<DialogMessages {...payload.dialog} />

			<div className="flex flex-shrink-0 justify-center items-end shadow-[0px_0px_1px_1px] shadow-lime-300 w-full mt-2 rounded-xl text-lime-400 select-none">
				<div className="flex w-full flex-col my-1">
					<textarea
						onChange={(e) => {
							setMessageForUser(e.target.value);
						}}
						onKeyDown={(e) => {
							sendMessageOnKeyDownHandler(e);
						}}
						onFocus={() => {
							setSmilesOpen(false);
						}}
						title="Напишите сообщение..."
						className="flex text-center resize-none h-10 rounded-md shadow-[0px_0px_3px_3px] shadow-lime-300 bg-zinc-600 text-white m-2 p-2"
						placeholder="Напишите сообщение..."
						value={messageForUser}
					></textarea>
				</div>

				<div className="flex relative justify-center items-center flex-shrink-0 h-10 w-10 m-1 mb-4 text-3xl rounded-full cursor-pointer">
					<div
						className="flex"
						onClick={() => {
							smilesOpen
								? setSmilesOpen(false)
								: setSmilesOpen(true);
						}}
					>
						&#9786;
					</div>

					<DialogSmiles
						onAddStrInMsgClbk={(e) => {
							setSmilesOpen(false);
							setMessageForUser(
								messageForUser + e.currentTarget.innerHTML
							);
						}}
						smilesOpen={smilesOpen}
					/>
				</div>
				<div
					onClick={sendMessageHandler}
					className="flex justify-center items-center flex-shrink-0 h-10 w-10 m-1 mb-3 text-3xl rounded-full cursor-pointer"
				>
					&#10148;
					<div className="flex justify-center items-center absolute text-gray-900 h-10 w-10 m-3 text-2xl rounded-full cursor-pointer">
						&#10148;
					</div>
				</div>
			</div>
			<ModalComplaint />
		</>
	);
}
