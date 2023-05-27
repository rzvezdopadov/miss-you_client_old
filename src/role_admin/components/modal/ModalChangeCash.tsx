import { useEffect } from "react";
import { Input } from "../../../role_all/components/utils/Inputs";
import { ButtonsYesCancelWidget } from "../../../role_all/components/widgets/utils/Buttons";
import { Label } from "../../../role_all/components/utils/Labels";
import { modalMessageOpen } from "../../../role_all/components/modal/ModalMessage";
import { store } from "../../store/store";
import {
	initialStateModalChangeCash,
	modalChangeCashAction,
} from "../../store/redusers/modal";
import { useQuerySetCash } from "../../api/cash/cash.api.hook";
import { ModalYesCancelWrapper } from "../../../role_all/components/wrappers/modal/ModalYesCancelWrapper";
import { userProfileAction } from "../../store/redusers/profile";

export function modalChangeCashOpen(userid: string) {
	store.dispatch(
		modalChangeCashAction({
			enabled: true,
			cash: {
				userid: userid,
				addcash: 0,
			},
		})
	);
}

export function modalChangeCashClose() {
	store.dispatch(
		modalChangeCashAction({
			enabled: false,
			cash: initialStateModalChangeCash.cash,
		})
	);
}

export function ModalChangeCash() {
	const { modalChangeCash } = store.getState();
	const { dataSetCash, errorSetCash, querySendSetCash } = useQuerySetCash();

	useEffect(() => {
		return () => {
			modalChangeCashClose();
		};
	}, []);

	useEffect(() => {
		if (!dataSetCash) return;

		store.dispatch(
			userProfileAction({ enabled: true, profile: dataSetCash })
		);
		modalMessageOpen("Успешно выполненно!");
		modalChangeCashClose();
	}, [dataSetCash]);

	useEffect(() => {
		if (!errorSetCash) return;

		modalMessageOpen(errorSetCash.response.data.message);
		modalChangeCashClose();
	}, [errorSetCash]);

	const yesModalChangeCashHandler = () => {
		if (!modalChangeCash.cash.userid) return;

		querySendSetCash(modalChangeCash.cash);
	};

	return (
		<ModalYesCancelWrapper enabled={modalChangeCash.enabled}>
			<Label
				value={`На сколько баллов изменить MY-баллы пользователя c userid = "${modalChangeCash.cash.userid}"?`}
			/>
			<Input
				value={modalChangeCash.cash.addcash}
				onChange={(e) => {
					store.dispatch(
						modalChangeCashAction({
							enabled: true,
							cash: {
								userid: modalChangeCash.cash.userid,
								addcash: Number(e.target.value),
							},
						})
					);
				}}
				type={""}
				placeholder={""}
			/>
			<ButtonsYesCancelWidget
				onClickYes={yesModalChangeCashHandler}
				onClickCancel={modalChangeCashClose}
			/>
		</ModalYesCancelWrapper>
	);
}
