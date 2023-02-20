import * as React from "react";
import { useEffect } from "react";
import { store } from "../../store/store";
import { userProfileAction } from "../../store/redusers/profile";
import { modalMessageOpen } from "./ModalMessage";
import { ModalYesCancelWrapper } from "../wrappers/ModalYesCancelWrapper";
import { useQuerySetAdminCash } from "../../api/admin/admin.api.hook";
import {
	initialStateModalAdminChangeCash,
	modalAdminChangeCashAction,
} from "../../store/redusers/admin";
import { Input } from "../utils/Inputs";
import { ButtonsYesCancelWidget } from "../widgets/utils/Buttons";

export function modalAdminChangeCashOpen(userid: string) {
	store.dispatch(
		modalAdminChangeCashAction(true, {
			userid: userid,
			addcash: 0,
		})
	);
}

export function modalAdminChangeCashClose() {
	store.dispatch(
		modalAdminChangeCashAction(false, initialStateModalAdminChangeCash.cash)
	);
}

export function ModalAdminChangeCash() {
	const { modalAdminChangeCash } = store.getState();
	const { dataSetAdminCash, errorSetAdminCash, querySendSetAdminCash } =
		useQuerySetAdminCash();

	useEffect(() => {
		return () => {
			modalAdminChangeCashClose();
		};
	}, []);

	useEffect(() => {
		if (!dataSetAdminCash) return;

		store.dispatch(userProfileAction(true, dataSetAdminCash));
		modalMessageOpen("Успешно выполненно!");
		modalAdminChangeCashClose();
	}, [dataSetAdminCash]);

	useEffect(() => {
		if (!errorSetAdminCash) return;

		modalMessageOpen(errorSetAdminCash.response.data.message);
		modalAdminChangeCashClose();
	}, [errorSetAdminCash]);

	const yesModalAdminChangeCashHandler = () => {
		if (!modalAdminChangeCash.cash.userid) return;

		querySendSetAdminCash(modalAdminChangeCash.cash);
	};

	return (
		<ModalYesCancelWrapper enabled={modalAdminChangeCash.enabled}>
			<>
				<div className="flex">{`На сколько баллов изменить MY-баллы пользователя c userid = "${modalAdminChangeCash.cash.userid}"?`}</div>
				<Input
					value={modalAdminChangeCash.cash.addcash}
					onChange={(e) => {
						store.dispatch(
							modalAdminChangeCashAction(true, {
								userid: modalAdminChangeCash.cash.userid,
								addcash: Number(e.target.value),
							})
						);
					}}
					type={""}
					placeholder={""}
				/>
				<ButtonsYesCancelWidget
					onClickYes={yesModalAdminChangeCashHandler}
					onClickCancel={modalAdminChangeCashClose}
				/>
			</>
		</ModalYesCancelWrapper>
	);
}
