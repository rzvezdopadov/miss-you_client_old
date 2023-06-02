import { useEffect, useState } from "react";
import {
	COMPLAINTSTATUS,
	COMPLAINTTYPE,
	MESSAGETYPE,
} from "../../../../interfaces/iprofiles";
import { storeAll } from "../../../../store/storeAll";
import { getWaySticker } from "../../../../helpers/server";
import { PhotoMessage } from "../../utils/Photo";
import { getDateTimeFromTimeCode } from "../../../../helpers/datetime";
import { modalComplaintOpen } from "../../../../../role_user/components/modal/ModalComplaint";

export function DialogMessage(payload: {
	userid: string;
	name: string;
	timecode: number;
	messageType: MESSAGETYPE;
	message: string;
	stickerpackid: string;
	stikerpos: number;
	photolink: string;
}) {
	const { stickerpacks, userMyProfile } = storeAll.getState();
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
		<div className="flex items-start my-1 w-auto h-fit">
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
								stpid: payload.stickerpackid,
								spos: payload.stikerpos,
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
