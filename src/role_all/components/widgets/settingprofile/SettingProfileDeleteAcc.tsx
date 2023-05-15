import React from "react";
import { getDateTimeFromTimeCode } from "../../../helpers/datetime";
import { Button } from "../../utils/Buttons";
import { Label } from "../../utils/Labels";
import { WidgetWrapper } from "../../wrappers/WidgetWrapper";
import { modalMessageOpen } from "../../modal/ModalMessage";
import { userMyProfileAction } from "../../../store/redusers/profile";
import { storeAll } from "../../../store/storeAll";
import {
	useQuerySetDeleteAcc,
	useQuerySetDeleteAccCancel,
} from "../../../api/profile/profile.api.hook";

export function SettingProfileDeleteAcc() {
	const { userMyProfile } = storeAll.getState();
	const { dataDeleteAcc, errorDeleteAcc, querySendDeleteAcc } =
		useQuerySetDeleteAcc();
	const {
		dataDeleteAccCancel,
		errorDeleteAccCancel,
		querySendDeleteAccCancel,
	} = useQuerySetDeleteAccCancel();

	React.useEffect(() => {
		if (!dataDeleteAcc) return;

		storeAll.dispatch(userMyProfileAction(dataDeleteAcc));
	}, [dataDeleteAcc]);

	React.useEffect(() => {
		if (!errorDeleteAcc) return;

		modalMessageOpen(errorDeleteAcc.response.data.message);
	}, [errorDeleteAcc]);

	React.useEffect(() => {
		if (!dataDeleteAccCancel) return;

		storeAll.dispatch(userMyProfileAction(dataDeleteAccCancel));
	}, [dataDeleteAccCancel]);

	React.useEffect(() => {
		if (!errorDeleteAccCancel) return;

		modalMessageOpen(errorDeleteAccCancel.response.data.message);
	}, [errorDeleteAccCancel]);

	return (
		<WidgetWrapper col={true}>
			{!userMyProfile.deleteacc ||
			String(userMyProfile.deleteacc) !== "0" ? (
				<>
					<Label
						value={`Аккаунт будет удален автоматически: ${getDateTimeFromTimeCode(
							userMyProfile.deleteacc
						)}`}
					/>
					<Button
						value={"Отменить удаление аккаунта"}
						onClick={querySendDeleteAccCancel}
					/>
				</>
			) : (
				<Button
					value={"Удалить аккаунт"}
					onClick={querySendDeleteAcc}
				/>
			)}
		</WidgetWrapper>
	);
}
