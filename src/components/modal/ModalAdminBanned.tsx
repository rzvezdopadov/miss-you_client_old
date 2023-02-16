import * as React from "react";
import { useEffect } from "react";
import { store } from "../../store/store";
import { userProfileAction } from "../../store/redusers/profile";
import { modalMessageOpen } from "./ModalMessage";
import { ModalYesCancelWrapper } from "../wrappers/ModalYesCancelWrapper";
import {
	useQuerySetAdminBanned,
	useQuerySetAdminCash,
} from "../../api/admin/admin.api.hook";
import {
	initialStateModalAdminBanned,
	modalAdminBannedAction,
} from "../../store/redusers/admin";
import { ButtonsYesCancelWidget } from "../widgets/utils/Buttons";
import { Input } from "../utils/Inputs";
import { FiltersOptionAtArr } from "../utils/Selects";
import { data_month } from "../../data/admin";

export function modalAdminBannedOpen(userid: string) {
	store.dispatch(
		modalAdminBannedAction(true, {
			userid,
			minute: 0,
			hour: 0,
			month: 0,
			discription: "",
		})
	);
}

export function ModalAdminBanned() {
	const { modalAdminBanned } = store.getState();
	const { dataSetAdminBanned, errorSetAdminBanned, querySendSetAdminBanned } =
		useQuerySetAdminBanned();

	useEffect(() => {
		return () => {
			closeModalAdminBannedHandler();
		};
	}, []);

	useEffect(() => {
		if (!dataSetAdminBanned) return;

		modalMessageOpen(dataSetAdminBanned.message);
		closeModalAdminBannedHandler();
	}, [dataSetAdminBanned]);

	useEffect(() => {
		if (!errorSetAdminBanned) return;

		modalMessageOpen(errorSetAdminBanned.response.data.message);
		closeModalAdminBannedHandler();
	}, [errorSetAdminBanned]);

	const closeModalAdminBannedHandler = () => {
		store.dispatch(
			modalAdminBannedAction(false, initialStateModalAdminBanned.banned)
		);
	};

	const yesModalAdminBannedHandler = () => {
		if (!modalAdminBanned.banned.userid) return;

		querySendSetAdminBanned(modalAdminBanned.banned);
	};

	return (
		<ModalYesCancelWrapper enabled={modalAdminBanned.enabled}>
			<>
				<div className="flex">{`На сколько забанить пользователя c userid = "${modalAdminBanned.banned.userid}"?`}</div>
				<Input
					value={""}
					onChange={() => {}}
					type={"text"}
					placeholder={"За что банить?"}
				></Input>

				<ButtonsYesCancelWidget
					onClickYes={yesModalAdminBannedHandler}
					onClickCancel={closeModalAdminBannedHandler}
				/>
			</>
		</ModalYesCancelWrapper>
	);
}
