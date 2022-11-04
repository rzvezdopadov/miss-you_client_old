import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { useQuerySendMessage } from "../../hooks/api.hook";
import { IDialog, IMessage } from "../../interfaces/iprofiles";
import { IQuerySendMessage } from "../../interfaces/iquery";
import { dialogAction } from "../../utils/reducers";
import { store } from "../../utils/store";
import { DialogMessage } from "../DialogMessage/DialogMessage";
import { openModalMessage } from "../ModalMessage/ModalMessage";

export function Dialog() {
	const { userMyProfile, dialog, dialogId } = store.getState();
	const { data, error, querySendMessage } = useQuerySendMessage();
	const [message, setMessage] = useState("");

	const bottomRef = useRef(null);

	dialog as IDialog;

	useEffect(() => {
		if (data) {
			setMessage("");
			store.dispatch(dialogAction(data));
		} else if (error) {
			openModalMessage(error.response.data.message);
		}
	}, [data, error]);

	useEffect(() => {
		scrollToBottom();
	}, [dialog]);

	const scrollToBottom = () => {
		if (bottomRef) {
			bottomRef.current.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	const sendMessageHandler = () => {
		const data: IQuerySendMessage = {
			id: dialogId,
			message: message,
		};

		if (!message) {
			openModalMessage("Сообщение не может быть пустым!");

			return;
		}

		querySendMessage(data);
	};

	const sendMessageOnKeyDownHandler = (e) => {
		if (e.ctrlKey && e.code === "Enter") sendMessageHandler();
	};

	return (
		<>
			<div className="flex flex-shrink-0 justify-center items-center w-full my-1 text-lime-400 select-none">
				{dialog && Object.keys(dialog).length ? (
					`${dialog.name}, ${dialog.age} год`
				) : (
					<div className="flex justify-center text-lime-400">
						Диалог с пользователем
					</div>
				)}
			</div>

			<div className="hover:overflow-y-scroll overflow-hidden justify-end shadow-[0px_0px_1px_1px] shadow-lime-300 flex-col bg-gray-900 text-neutral-50 rounded-xl px-2 pt-2 pb-2 h-full w-full">
				{dialog &&
				Object.keys(dialog).length &&
				dialog.messages.length ? (
					dialog.messages.map((value: IMessage, index) => {
						let name = userMyProfile.name;
						let photolink =
							userMyProfile.photolink[userMyProfile.photomain];

						if (userMyProfile.id !== value.idUser) {
							name = dialog.name;
							photolink = dialog.photolink[dialog.photomain];
						}

						return (
							<DialogMessage
								key={dialog.timecode + value.timecode + index}
								name={name}
								timecode={value.timecode}
								message={value.message}
								photolink={photolink}
							/>
						);
					})
				) : (
					<div>Диалога нет</div>
				)}
				<div ref={bottomRef} className="list-bottom"></div>
			</div>
			<div className="flex flex-shrink-0 justify-center items-end shadow-[0px_0px_1px_1px] shadow-lime-300 w-full mt-2 rounded-xl text-lime-400 select-none">
				<div className="flex w-full flex-col my-1">
					<textarea
						onChange={(e) => {
							setMessage(e.target.value);
						}}
						onKeyDown={(e) => {
							sendMessageOnKeyDownHandler(e);
						}}
						title="Напишите сообщение..."
						className="flex text-center resize-none h-10 rounded-md shadow-[0px_0px_3px_3px] shadow-lime-300 bg-zinc-600 text-white m-2 p-2"
						placeholder="Напишите сообщение..."
						value={message}
					></textarea>
				</div>
				<div className="flex justify-center items-center flex-shrink-0 h-10 w-10 m-1 mb-4 text-3xl rounded-full cursor-pointer">
					&#9786;
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
		</>
	);
}
