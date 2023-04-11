import * as React from "react";
import { store } from "../../../../store/store";
import { useEffect, useState } from "react";
import { getDateTimeFromTimeCode } from "../../../../helpers/datetime";
import { PhotoMessage } from "../../utils/Photo";
import { getWaySticker } from "../../../../helpers/server";
import {
	COMPLAINTSTATUS,
	COMPLAINTTYPE,
	MESSAGETYPE,
} from "../../../../interfaces/iprofiles";
import { modalComplaintOpen } from "../../../modal/ModalComplaint";

export function DialogMessage(payload: {
	keyopt: string;
	userid: string;
	name: string;
	timecode: number;
	messageType: MESSAGETYPE;
	message: string;
	stickerpackid: string;
	stikerpos: number;
	photolink: string;
}) {
	const { stickerpacks, userMyProfile } = store.getState();
	const [linkSticker, setLinkSticker] = useState("");

	useEffect(() => {
		if (payload.messageType === MESSAGETYPE.sticker) {
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

			setLinkSticker(getWaySticker(stickerLink));
		}
	}, []);

	return (
		<div
			key={payload.keyopt}
			className="flex items-start my-1 w-auto h-fit"
		>
			<div className="flex m-1">
				<PhotoMessage src={payload.photolink} />
			</div>
			<div className="flex flex-col m-1">
				<div className="flex justify-start text-lime-400 items-center w-full select-none">
					{`${payload.name}, ${getDateTimeFromTimeCode(
						payload.timecode
					)}`}
				</div>
				<div className="flex text-left overflow-hidden justify-start items-center w-80 select-none">
					{payload.messageType === MESSAGETYPE.sticker ? (
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
			{userMyProfile.userid === payload.userid ? (
				<></>
			) : (
				<div
					className="flex opacity-20 cursor-pointer hover:opacity-100 text-xl"
					title="Пожаловаться на спам"
					onClick={() =>
						modalComplaintOpen({
							userfrom: userMyProfile.userid,
							userto: payload.userid,
							timecode: 0,
							type: COMPLAINTTYPE.message,
							subject: "",
							discription: "",
							dck: "",
							cash: 0,
							status: COMPLAINTSTATUS.open,
							complmessage: {
								timecode: payload.timecode,
								type: payload.messageType,
								userid: payload.userid,
								message: payload.message,
								stickerpackid: payload.stickerpackid,
								stickerpos: payload.stikerpos,
							},
						})
					}
				>
					&#128711;
				</div>
			)}
		</div>
	);
}
