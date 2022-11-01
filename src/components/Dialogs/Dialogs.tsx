import * as React from "react";
import { Dialog } from "../Dialog/Dialog";
import { DialogsLeftSideBar } from "../DialogsLeftSideBar/DialogsLeftSideBar";
import { DialogsRightSideBarAd } from "../DialogsRightSideBarAd/DialogsRightSideBarAd";

export function Dialogs() {
	return (
		<div className="flex relative h-full w-full justify-center">
			<div className="flex justify-center relative bg-gray-700 text-neutral-50 flex-row shadow-md rounded-3xl px-2 pt-2 pb-2 w-full">
				<div className="flex flex-shrink-0 justify-start shadow-[0px_0px_1px_1px] shadow-lime-300 flex-col bg-gray-900 text-neutral-50 rounded-xl m-2 px-2 pt-2 pb-2 h-full w-64">
					<DialogsLeftSideBar />
				</div>
				<div className="flex justify-center shadow-[0px_0px_1px_1px] shadow-lime-300 flex-col bg-gray-900 text-neutral-50 rounded-xl m-2 px-2 py-2 h-full w-full">
					<Dialog />
				</div>
				<div className="hidden lg:flex flex-shrink-0 items-center shadow-[0px_0px_1px_1px] shadow-lime-300 flex-col bg-gray-900 text-neutral-50 rounded-xl m-2 h-full w-60">
					<DialogsRightSideBarAd />
				</div>
			</div>
		</div>
	);
}
