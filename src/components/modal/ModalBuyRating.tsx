import * as React from "react";
import { useEffect, useRef } from "react";
import { store } from "../../store/store";
import { IRate } from "../../interfaces/ishop";
import {
	initialStateModalBuyRating,
	modalBuyRatingAction,
} from "../../store/redusers/modal";
import { userMyProfileAction } from "../../store/redusers/profile";
import { modalMessageOpen } from "./ModalMessage";
import { ButtonCancel, ButtonYes } from "../utils/Buttons";
import { useQueryBuyRating } from "../../api/rating/rating.api.hook";
import { ModalYesCancelWrapper } from "../wrappers/ModalYesCancelWrapper";
import { ButtonsYesCancelWidget } from "../widgets/utils/Buttons";

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
		if (dataBuyRating) {
			store.dispatch(userMyProfileAction(dataBuyRating));
			modalMessageOpen("Покупка прошла успешно!");
		} else if (errorBuyRating) {
			modalMessageOpen(errorBuyRating.response.data.message);
		}

		modalBuyRatingCloseHandler();
	}, [dataBuyRating, errorBuyRating]);

	const modalBuyRatingCloseHandler = () => {
		store.dispatch(
			modalBuyRatingAction(false, initialStateModalBuyRating.rate)
		);
	};

	const yesModalBuyRatingHandler = () => {
		if (!modalBuyRating.rate.idRate) return;

		querySendBuyRating(modalBuyRating.rate.idRate);
	};

	return (
		<ModalYesCancelWrapper enabled={modalBuyRating.enabled}>
			<>
				<div className="flex">{`Вы действительно хотите купить ${modalBuyRating.rate.amountRate} баллов рейтинга за ${modalBuyRating.rate.price} MY-баллов?`}</div>
				<ButtonsYesCancelWidget
					onClickYes={yesModalBuyRatingHandler}
					onClickCancel={modalBuyRatingCloseHandler}
				/>
			</>
		</ModalYesCancelWrapper>
	);
}
