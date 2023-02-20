import * as React from "react";
import { useEffect } from "react";
import { store } from "../../store/store";
import { userProfileAction } from "../../store/redusers/profile";
import { modalMessageOpen } from "./ModalMessage";
import { ModalYesCancelWrapper } from "../wrappers/ModalYesCancelWrapper";
import { useQuerySetAdminRating } from "../../api/admin/admin.api.hook";
import {
	initialStateModalAdminChangeRating,
	modalAdminChangeRatingAction,
} from "../../store/redusers/admin";
import { Input } from "../utils/Inputs";
import { ButtonsYesCancelWidget } from "../widgets/utils/Buttons";

export function modalAdminChangeRatingOpen(userid: string) {
	store.dispatch(
		modalAdminChangeRatingAction(true, {
			userid: userid,
			addrating: 0,
		})
	);
}

export function modalAdminChangeRatingClose() {
	store.dispatch(
		modalAdminChangeRatingAction(
			false,
			initialStateModalAdminChangeRating.rate
		)
	);
}

export function ModalAdminChangeRating() {
	const { modalAdminChangeRating } = store.getState();
	const { dataSetAdminRating, errorSetAdminRating, querySendSetAdminRating } =
		useQuerySetAdminRating();

	useEffect(() => {
		return () => {
			modalAdminChangeRatingClose();
		};
	}, []);

	useEffect(() => {
		if (!dataSetAdminRating) return;

		store.dispatch(userProfileAction(true, dataSetAdminRating));
		modalMessageOpen("Успешно выполненно!");
		modalAdminChangeRatingClose();
	}, [dataSetAdminRating]);

	useEffect(() => {
		if (!errorSetAdminRating) return;

		modalMessageOpen(errorSetAdminRating.response.data.message);
		modalAdminChangeRatingClose();
	}, [errorSetAdminRating]);

	const yesModalAdminChangeRatingHandler = () => {
		if (!modalAdminChangeRating.rate.userid) return;

		querySendSetAdminRating(modalAdminChangeRating.rate);
	};

	return (
		<ModalYesCancelWrapper enabled={modalAdminChangeRating.enabled}>
			<>
				<div className="flex">{`На сколько баллов изменить рейтинг пользователя c userid = "${modalAdminChangeRating.rate.userid}"?`}</div>
				<Input
					value={modalAdminChangeRating.rate.addrating}
					onChange={(e) => {
						store.dispatch(
							modalAdminChangeRatingAction(true, {
								userid: modalAdminChangeRating.rate.userid,
								addrating: Number(e.target.value),
							})
						);
					}}
					type={""}
					placeholder={""}
				/>
				<ButtonsYesCancelWidget
					onClickYes={yesModalAdminChangeRatingHandler}
					onClickCancel={modalAdminChangeRatingClose}
				/>
			</>
		</ModalYesCancelWrapper>
	);
}
