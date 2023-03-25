import * as React from "react";
import { useEffect } from "react";
import { store } from "../../store/store";
import { IRate } from "../../interfaces/ishop";
import {
	initialStateModalBuyRating,
	modalBuyRatingAction,
} from "../../store/redusers/modal";
import { userMyProfileAction } from "../../store/redusers/profile";
import { modalMessageOpen } from "./ModalMessage";
import { useQueryBuyRating } from "../../api/rating/rating.api.hook";
import { ModalYesCancelWrapper } from "../wrappers/ModalYesCancelWrapper";
import { ButtonsYesCancelWidget } from "../widgets/utils/Buttons";
import { Label } from "../utils/Labels";

export function modalBuyRatingOpen(rate: IRate) {
	store.dispatch(modalBuyRatingAction(true, rate));
}

export function ModalBuyRating() {
	const { modalBuyRating } = store.getState();
	const { dataBuyRating, errorBuyRating, querySendBuyRating } =
		useQueryBuyRating();

	useEffect(() => {
		return () => {
			modalBuyRatingCloseHandler();
		};
	}, []);

	useEffect(() => {
		if (!dataBuyRating) return;

		store.dispatch(userMyProfileAction(dataBuyRating));
		modalMessageOpen("Покупка прошла успешно!");
		modalBuyRatingCloseHandler();
	}, [dataBuyRating]);

	useEffect(() => {
		if (!errorBuyRating) return;

		modalMessageOpen(errorBuyRating.response.data.message);
		modalBuyRatingCloseHandler();
	}, [errorBuyRating]);

	const modalBuyRatingCloseHandler = () => {
		store.dispatch(
			modalBuyRatingAction(false, initialStateModalBuyRating.rate)
		);
	};

	const yesModalBuyRatingHandler = () => {
		if (!modalBuyRating.rate.idTariff) return;

		querySendBuyRating(modalBuyRating.rate.idTariff);
	};

	return (
		<ModalYesCancelWrapper enabled={modalBuyRating.enabled}>
			<Label
				value={`Вы действительно хотите купить ${modalBuyRating.rate.amountRate} баллов рейтинга за ${modalBuyRating.rate.price} MY-баллов?`}
			/>
			<ButtonsYesCancelWidget
				onClickYes={yesModalBuyRatingHandler}
				onClickCancel={modalBuyRatingCloseHandler}
			/>
		</ModalYesCancelWrapper>
	);
}
