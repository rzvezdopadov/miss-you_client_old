import { useEffect } from "react";
import { ButtonsYesCancelWidget } from "../../../role_all/components/widgets/utils/Buttons";
import { Input } from "../../../role_all/components/utils/Inputs";
import { SelectFromArr } from "../../../role_all/components/utils/Selects";
import { data_hour, data_minute, data_month } from "../../data/time";
import { Label } from "../../../role_all/components/utils/Labels";
import { modalMessageOpen } from "../../../role_all/components/modal/ModalMessage";
import {
	initialStateModalBanned,
	modalBannedAction,
} from "../../store/redusers/modal";
import { store } from "../../store/store";
import { useQuerySetBanned } from "../../api/banned/banned.api.hook";
import { ModalYesCancelWrapper } from "../../../role_all/components/wrappers/modal/ModalYesCancelWrapper";

export function modalBannedOpen(userid: string) {
	store.dispatch(
		modalBannedAction({
			enabled: true,
			banned: {
				userid,
				minute: 0,
				hour: 0,
				month: 0,
				discription: "",
			},
		})
	);
}

export function modalBannedClose() {
	store.dispatch(
		modalBannedAction({
			enabled: false,
			banned: initialStateModalBanned.banned,
		})
	);
}

export function ModalBanned() {
	const { modalBanned } = store.getState();
	const { dataSetBanned, errorSetBanned, querySendSetBanned } =
		useQuerySetBanned();

	useEffect(() => {
		return () => {
			modalBannedClose();
		};
	}, []);

	useEffect(() => {
		if (!dataSetBanned) return;

		modalMessageOpen(dataSetBanned.message);
		modalBannedClose();
	}, [dataSetBanned]);

	useEffect(() => {
		if (!errorSetBanned) return;

		modalMessageOpen(errorSetBanned.response.data.message);
		modalBannedClose();
	}, [errorSetBanned]);

	const yesModalBannedHandler = () => {
		if (!modalBanned.banned.userid) return;

		querySendSetBanned(modalBanned.banned);
	};

	return (
		<ModalYesCancelWrapper enabled={modalBanned.enabled}>
			<Label
				value={`На сколько забанить пользователя c userid = "${modalBanned.banned.userid}"?`}
			/>
			<Input
				value={modalBanned.banned.discription}
				onChange={(e) => {
					const banned = { ...modalBanned.banned };
					banned.discription = e.target.value;
					store.dispatch(
						modalBannedAction({ enabled: true, banned })
					);
				}}
				type={"text"}
				placeholder={"За что банить?"}
			></Input>

			<SelectFromArr
				value={modalBanned.banned.month}
				keyOpt={"banned.month"}
				onChangeHandler={(e) => {
					const banned = { ...modalBanned.banned };
					banned.month = Number(e.target.value);
					store.dispatch(
						modalBannedAction({ enabled: true, banned })
					);
				}}
				arr={data_month}
				title={"Месяцев"}
			/>

			<SelectFromArr
				value={modalBanned.banned.hour}
				keyOpt={"banned.hour"}
				onChangeHandler={(e) => {
					const banned = { ...modalBanned.banned };
					banned.hour = Number(e.target.value);
					store.dispatch(
						modalBannedAction({ enabled: true, banned })
					);
				}}
				arr={data_hour}
				title={"Часов"}
			/>

			<SelectFromArr
				value={modalBanned.banned.minute}
				keyOpt={"banned.minute"}
				onChangeHandler={(e) => {
					const banned = { ...modalBanned.banned };
					banned.minute = Number(e.target.value);
					store.dispatch(
						modalBannedAction({ enabled: true, banned })
					);
				}}
				arr={data_minute}
				title={"Минут"}
			/>

			<ButtonsYesCancelWidget
				onClickYes={yesModalBannedHandler}
				onClickCancel={modalBannedClose}
			/>
		</ModalYesCancelWrapper>
	);
}
