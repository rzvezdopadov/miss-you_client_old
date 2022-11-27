import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { IMessage } from "../../../../interfaces/iprofiles";
import { messageForUserAction } from "../../../../utils/reducers";
import { store } from "../../../../utils/store";
import { DialogMessage } from "../DialogMessage/DialogMessage";
import { openModalMessage } from "../../../Modal/ModalMessage/ModalMessage";
import { scrollToBottom } from "../../../../utils/pagescroll";
import { Emojis } from "../Emojis/Emojis";
import { sendMessage } from "../../../Utils/Socket/Socket";

export function Dialog() {
	const { userMyProfile, dialog, dialogUserId, messageForUser } =
		store.getState();
	const [emojisOpen, setEmojisOpen] = useState(false);

	const bottomRef = useRef<HTMLDivElement>(null);

	const setMessageForUser = (str: string) => {
		store.dispatch(messageForUserAction(str));
	};

	useEffect(() => {
		scrollToBottom(bottomRef);
	}, [dialog]);

	const sendMessageHandler = () => {
		if (!messageForUser) {
			openModalMessage("Сообщение не может быть пустым!");

			return;
		}

		if (!dialogUserId) {
			openModalMessage(
				"Чтобы отправить сообщение, выберите пользователя!"
			);

			return;
		}

		sendMessage(messageForUser);

		store.dispatch(messageForUserAction(""));
	};

	const sendMessageOnKeyDownHandler = (
		e: React.KeyboardEvent<HTMLTextAreaElement>
	) => {
		if (e.ctrlKey && e.code === "Enter") sendMessageHandler();
	};

	return (
		<>
			<div className="flex flex-shrink-0 justify-center items-center w-full my-1 text-lime-400 select-none">
				{dialog &&
				dialog.age &&
				dialogUserId &&
				Object.keys(dialog).length ? (
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

						if (userMyProfile.id !== value.userId) {
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
				<div ref={bottomRef}></div>
			</div>
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
							setEmojisOpen(false);
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
							emojisOpen
								? setEmojisOpen(false)
								: setEmojisOpen(true);
						}}
					>
						&#9786;
					</div>

					<Emojis
						onSetEmojiClbk={(e) => {
							setEmojisOpen(false);
							setMessageForUser(
								messageForUser + e.currentTarget.innerHTML
							);
						}}
						emojisOpen={emojisOpen}
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
		</>
	);
}
