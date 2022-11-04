import * as React from "react";
import { IDialog } from "../../interfaces/iprofiles";

export function DialogShort(payload: {
	dialog: IDialog;
	onClickHandler: React.MouseEventHandler<HTMLDivElement>;
}) {
	const { dialog, onClickHandler } = payload;

	return (
		<div
			key={payload.dialog.timecode + dialog.age}
			className="flex items-center my-1 w-auto h-16 bg-gray-700 rounded-xl shadow-[0px_0px_1px_1px] shadow-lime-300 cursor-pointer"
			onClick={onClickHandler}
		>
			<div
				style={{
					backgroundImage: `URL(${
						dialog.photolink[dialog.photomain]
					})`,
				}}
				className="flex flex-shrink-0 bg-center bg-cover bg-no-repeat justify-center shadow-[0px_0px_2px_2px] shadow-lime-300 text-neutral-50 rounded-full m-1 h-14 w-14"
			></div>
			<div className="flex flex-col md:w-40 h-full m-1 overflow-hidden">
				<div className="flex flex-shrink-0 justify-center w-max overflow-hidden select-none">
					{`${dialog.name}, ${dialog.age}`}
				</div>
				<div className="flex justify-start md:justify-center text-zinc-400 text-sm overflow-hidden select-none">
					{dialog.messages[dialog.messages.length - 1].message}
				</div>
			</div>
		</div>
	);
}
