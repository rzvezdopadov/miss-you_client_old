import * as React from "react";
import { messageType } from "../../../interfaces/ishop";
import { getLinkSticker } from "../../../helpers/stickers";
import { store } from "../../../store/store";
import { useEffect, useState } from "react";
import { getDateTimeFromTimeCode } from "../../../helpers/datetime";
import { getWayPhoto } from "../../../helpers/server";

export function DialogMessage(payload: {
	keyopt: string;
	name: string;
	timecode: number;
	messageType: messageType;
	message: string;
	stickerpackid: string;
	stikerpos: number;
	photolink: string;
}) {
	const { stickerpacks } = store.getState();
	const [linkSticker, setLinkSticker] = useState("");

	useEffect(() => {
		if (payload.messageType === messageType.sticker) {
			const stickerpackIndex = stickerpacks.findIndex(
				(stickerpack) =>
					stickerpack.idstickerpack === payload.stickerpackid
			);

			if (stickerpackIndex === -1) return;

			const stickerIndex = stickerpacks[
				stickerpackIndex
			].stickers.findIndex(
				(value) => value.position === payload.stikerpos
			);

			if (stickerIndex === -1) return;

			const stickerLink =
				stickerpacks[stickerpackIndex].stickers[stickerIndex].link;

			setLinkSticker(getLinkSticker(stickerLink));
		}
	}, []);

	return (
		<div
			key={payload.keyopt}
			className="flex items-start my-1 w-auto h-fit"
		>
			<div className="flex m-1">
				<div
					style={{
						backgroundImage: `URL(${getWayPhoto(
							payload.photolink
						)})`,
					}}
					className="flex bg-center bg-cover bg-no-repeat justify-center shadow-[0px_0px_2px_2px] shadow-lime-300 text-neutral-50 rounded-full m-1 h-10 w-10"
				></div>
			</div>
			<div className="flex flex-col m-1">
				<div className="flex justify-start text-lime-400 items-center w-full select-none">
					{`${payload.name}, ${getDateTimeFromTimeCode(
						payload.timecode
					)}`}
				</div>
				<div className="flex text-left overflow-hidden justify-start items-center w-80 select-none">
					{payload.messageType === messageType.sticker ? (
						<div
							style={{
								backgroundImage: `URL(${linkSticker})`,
							}}
							className="break-words bg-center bg-cover bg-no-repeat h-24 w-24"
						></div>
					) : (
						<div className="break-words">{payload.message}</div>
					)}
				</div>
			</div>
		</div>
	);
}
