import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { IMessage } from "../../../interfaces/iprofiles";
import { store } from "../../../store/store";
import { DialogMessage } from "./DialogMessage";
import { scrollToBottom } from "../../../helpers/pagescroll";
import { sendMessage } from "../../utils/Socket";
import { getAgeFromYear, getStrYearFromAge } from "../../../helpers/age";
import {
	dialogAction,
	initialStateDialog,
	messageForUserAction,
} from "../../../store/redusers/dialog";
import { modalMessageOpen } from "../../modal/ModalMessage";
import { DialogSmiles } from "./DialogSmiles";

export function Dialog() {
	const { userMyProfile, dialog, dialogUserId, messageForUser } =
		store.getState();
	const [smilesOpen, setSmilesOpen] = useState(false);

	const bottomRef = useRef<HTMLDivElement>(null);

	const setMessageForUser = (str: string) => {
		store.dispatch(messageForUserAction(str));
	};

	useEffect(() => {
		return () => {
			store.dispatch(dialogAction(initialStateDialog));
		};
	}, []);

	useEffect(() => {
		scrollToBottom(bottomRef);
	}, [dialog]);

	const sendMessageHandler = () => {
		if (!messageForUser) {
			modalMessageOpen("Сообщение не может быть пустым!");

			return;
		}

		if (!dialogUserId) {
			modalMessageOpen(
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
				dialog.yearofbirth &&
				dialogUserId &&
				Object.keys(dialog).length ? (
					`${dialog.name}, ${getAgeFromYear(
						dialog.yearofbirth
					)} ${getStrYearFromAge(getAgeFromYear(dialog.yearofbirth))}`
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

						if (userMyProfile.userid !== value.userid) {
							name = dialog.name;
							photolink = dialog.photolink;
						}

						return (
							<DialogMessage
								key={`DialogMessage${dialog.timecode}${value.timecode}`}
								keyopt={`${dialog.timecode}${value.timecode}`}
								name={name}
								timecode={value.timecode}
								messageType={value.type}
								message={value.message}
								photolink={photolink}
								stickerpackid={value.stickerpackid}
								stikerpos={value.stickerpos}
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
		</>
	);
}
