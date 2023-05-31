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
			{payload && Object.keys(payload).length && payload.msgs.length ? (
				payload.msgs.map((value: IMessage) => {
					let name = userMyProfile.name;
					let photolink =
						userMyProfile.photolink[userMyProfile.photomain];

					if (userMyProfile.userid !== value.id1) {
						name = payload.name;
						photolink = payload.photolink;
					}

					return (
						<DialogMessage
							key={`DialogMessage${value.timecode}${value.timecode}`}
							keyopt={`${value.id1}${value.timecode}`}
							userid={value.id1}
							name={name}
							timecode={value.timecode}
							messageType={value.type}
							message={value.msg}
							photolink={photolink}
							stickerpackid={value.stpid}
							stikerpos={value.spos}
						/>
					);
				})
			) : (
				<div>Диалога нет</div>
			)}
		</div>
	);
}
