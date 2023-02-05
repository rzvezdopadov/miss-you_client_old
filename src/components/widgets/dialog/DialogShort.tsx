import * as React from "react";
import { IDialog } from "../../../interfaces/iprofiles";
import { messageType } from "../../../interfaces/ishop";
import { getAgeFromYear } from "../../../helpers/age";
import { useQueryGetProfile } from "../../../hooks/api.hook";
import { IQueryGetProfile } from "../../../interfaces/iquery";
import { useEffect } from "react";
import { userProfileOpen } from "../../modal/ModalUserProfile";
import { modalMessageOpen } from "../../modal/ModalMessage";

export function DialogShort(payload: {
	dialog: IDialog;
	onClickHandler: React.MouseEventHandler<HTMLDivElement>;
}) {
	const { data, error, querySendGetProfile } = useQueryGetProfile();

	const { dialog, onClickHandler } = payload;

	const openProfileHandler = () => {
		const data: IQueryGetProfile = {
			userid: String(dialog.userid),
		};

		querySendGetProfile(data);
	};

	useEffect(() => {
		if (data) {
			userProfileOpen(data);
		} else if (error) {
			modalMessageOpen(error.response.data.message);
		}
	}, [data, error]);

	return (
		<div className="flex items-center my-1 w-auto h-16 bg-gray-700 rounded-xl shadow-[0px_0px_1px_1px] shadow-lime-300 cursor-pointer">
			<div
				style={{
					backgroundImage: `URL(${
						dialog.photolink[dialog.photomain]
					})`,
				}}
				className="flex flex-shrink-0 bg-center bg-cover bg-no-repeat justify-center shadow-[0px_0px_2px_2px] shadow-lime-300 text-neutral-50 rounded-full m-1 h-14 w-14"
				onClick={openProfileHandler}
			></div>
			<div
				className="flex flex-col md:w-40 h-full m-1 overflow-hidden"
				onClick={onClickHandler}
			>
				<div className="flex flex-shrink-0 justify-center w-max overflow-hidden select-none">
					{`${dialog.name}, ${getAgeFromYear(dialog.yearofbirth)}`}
				</div>
				<div className="flex justify-start md:justify-center text-zinc-400 text-sm overflow-hidden select-none">
					{dialog.messages[dialog.messages.length - 1].type ===
					messageType.sticker
						? "Cтикер"
						: dialog.messages[dialog.messages.length - 1].message}
				</div>
			</div>
		</div>
	);
}
