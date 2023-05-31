import * as React from "react";
import { useEffect } from "react";
import { modalMessageOpen } from "../../../modal/ModalMessage";
import { IDialog, MESSAGETYPE } from "../../../../interfaces/iprofiles";
import { useQueryGetProfile } from "../../../../../role_user/api/profile/profile.api.hook";
import { IQueryGetProfile } from "../../../../../role_user/api/profile/iprofile.api";
import { modalUserProfileOpen } from "../../../../../role_user/components/modal/ModalUserProfile";
import { PhotoDialogShort } from "../../utils/Photo";
import { getAgeFromYear } from "../../../../helpers/age";

export function DialogShort(payload: {
	dialog: IDialog;
	onClickHandler: React.MouseEventHandler<HTMLDivElement>;
}) {
	const { dataGetProfile, errorGetProfile, querySendGetProfile } =
		useQueryGetProfile();

	const { dialog, onClickHandler } = payload;

	const openProfileHandler = () => {
		const data: IQueryGetProfile = {
			userid: String(dialog.userid),
		};

		querySendGetProfile(data);
	};

	useEffect(() => {
		if (dataGetProfile) {
			modalUserProfileOpen(dataGetProfile);
		}
	}, [dataGetProfile]);

	useEffect(() => {
		if (errorGetProfile) {
			modalMessageOpen(errorGetProfile.response.data.message);
		}
	}, [errorGetProfile]);

	return (
		<div className="flex items-center my-1 w-auto h-16 bg-gray-700 rounded-xl shadow-[0px_0px_1px_1px] shadow-lime-300 cursor-pointer">
			<PhotoDialogShort
				src={dialog.photolink}
				onClick={openProfileHandler}
			/>

			<div
				className="flex flex-col md:w-40 h-full w-full m-1 overflow-hidden"
				onClick={onClickHandler}
			>
				<div className="flex flex-shrink-0 justify-center w-max overflow-hidden select-none">
					{`${dialog.name}, ${getAgeFromYear(dialog.yearofbirth)}`}
				</div>
				<div className="flex justify-start md:justify-center text-zinc-400 text-sm overflow-hidden select-none">
					{dialog.msgs[dialog.msgs.length - 1].type ===
					MESSAGETYPE.sticker
						? "Cтикер"
						: dialog.msgs[dialog.msgs.length - 1].msg}
				</div>
			</div>
		</div>
	);
}
