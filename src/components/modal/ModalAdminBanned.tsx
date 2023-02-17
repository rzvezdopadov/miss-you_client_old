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
import { data_hour, data_month } from "../../data/admin";

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
					arr={data_hour}
					title={"Минут"}
				/>

				<ButtonsYesCancelWidget
					onClickYes={yesModalAdminBannedHandler}
					onClickCancel={closeModalAdminBannedHandler}
				/>
			</>
		</ModalYesCancelWrapper>
	);
}
