import React from "react";
import { DialogMessage } from "./DialogMessage";
import { IDialog, IMessage } from "../../../../interfaces/iprofiles";
import { scrollToBottom } from "../../../../helpers/pagescroll";
import { storeAll } from "../../../../store/storeAll";

export function DialogMessages(payload: IDialog) {
	const { userMyProfile } = storeAll.getState();
	const bottomRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		scrollToBottom(bottomRef);
	}, [payload]);

	return (
		<div
			ref={bottomRef}
			className="hover:overflow-y-scroll overflow-hidden justify-end shadow-[0px_0px_1px_1px] shadow-lime-300 flex-col bg-gray-900 text-neutral-50 rounded-xl px-2 pt-2 pb-2 h-full w-full"
		>
			{payload &&
			Object.keys(payload).length &&
			payload.messages.length ? (
				payload.messages.map((value: IMessage) => {
					let name = userMyProfile.name;
					let photolink =
						userMyProfile.photolink[userMyProfile.photomain];

					if (userMyProfile.userid !== value.userid) {
						name = payload.name;
						photolink = payload.photolink;
					}

					return (
						<DialogMessage
							key={`DialogMessage${payload.timecode}${value.timecode}`}
							keyopt={`${payload.timecode}${value.timecode}`}
							userid={value.userid}
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
		</div>
	);
}
