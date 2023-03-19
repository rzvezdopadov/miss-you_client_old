import * as React from "react";
import { useEffect } from "react";
import { store } from "../../store/store";
import { modalMessageOpen } from "./ModalMessage";
import { ModalYesCancelWrapper } from "../wrappers/ModalYesCancelWrapper";
import { useQuerySetAdminBanned } from "../../api/admin/admin.api.hook";
import {
	initialStateModalAdminBanned,
	modalAdminBannedAction,
} from "../../store/redusers/admin";
import { ButtonsYesCancelWidget } from "../widgets/utils/Buttons";
import { Input } from "../utils/Inputs";
import { SelectFromArr } from "../utils/Selects";
import { data_hour, data_minute, data_month } from "../../data/admin";
import { Label } from "../utils/Labels";

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

export function modalAdminBannedClose() {
	store.dispatch(
		modalAdminBannedAction(false, initialStateModalAdminBanned.banned)
	);
}

export function ModalAdminBanned() {
	const { modalAdminBanned } = store.getState();
	const { dataSetAdminBanned, errorSetAdminBanned, querySendSetAdminBanned } =
		useQuerySetAdminBanned();

	useEffect(() => {
		return () => {
			modalAdminBannedClose();
		};
	}, []);

	useEffect(() => {
		if (!dataSetAdminBanned) return;

		modalMessageOpen(dataSetAdminBanned.message);
		modalAdminBannedClose();
	}, [dataSetAdminBanned]);

	useEffect(() => {
		if (!errorSetAdminBanned) return;

		modalMessageOpen(errorSetAdminBanned.response.data.message);
		modalAdminBannedClose();
	}, [errorSetAdminBanned]);

	const yesModalAdminBannedHandler = () => {
		if (!modalAdminBanned.banned.userid) return;

		querySendSetAdminBanned(modalAdminBanned.banned);
	};

	return (
		<ModalYesCancelWrapper enabled={modalAdminBanned.enabled}>
			<Label
				value={`На сколько забанить пользователя c userid = "${modalAdminBanned.banned.userid}"?`}
			/>
			<Input
				value={modalAdminBanned.banned.discription}
				onChange={(e) => {
					const banned = { ...modalAdminBanned.banned };
					banned.discription = e.target.value;
					store.dispatch(modalAdminBannedAction(true, banned));
				}}
				type={"text"}
				placeholder={"За что банить?"}
			></Input>

			<SelectFromArr
				value={modalAdminBanned.banned.month}
				keyOpt={"banned.month"}
				onChangeHandler={(e) => {
					const banned = { ...modalAdminBanned.banned };
					banned.month = Number(e.target.value);
					store.dispatch(modalAdminBannedAction(true, banned));
				}}
				arr={data_month}
				title={"Месяцев"}
			/>

			<SelectFromArr
				value={modalAdminBanned.banned.hour}
				keyOpt={"banned.hour"}
				onChangeHandler={(e) => {
					const banned = { ...modalAdminBanned.banned };
					banned.hour = Number(e.target.value);
					store.dispatch(modalAdminBannedAction(true, banned));
				}}
				arr={data_hour}
				title={"Часов"}
			/>

			<SelectFromArr
				value={modalAdminBanned.banned.minute}
				keyOpt={"banned.minute"}
				onChangeHandler={(e) => {
					const banned = { ...modalAdminBanned.banned };
					banned.minute = Number(e.target.value);
					store.dispatch(modalAdminBannedAction(true, banned));
				}}
				arr={data_minute}
				title={"Минут"}
			/>

			<ButtonsYesCancelWidget
				onClickYes={yesModalAdminBannedHandler}
				onClickCancel={modalAdminBannedClose}
			/>
		</ModalYesCancelWrapper>
	);
}
