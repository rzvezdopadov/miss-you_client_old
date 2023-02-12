import * as React from "react";
import { useEffect, useRef } from "react";
import { store } from "../../store/store";
import {
	initialStateModalBuyRating,
	modalBuyRatingAction,
} from "../../store/redusers/modal";
import { userMyProfileAction } from "../../store/redusers/profile";
import { modalMessageOpen } from "./ModalMessage";
import { ButtonCancel, ButtonYes } from "../utils/Buttons";
import { IAdminChangeRating } from "../../interfaces/iadmin";
import { modalAdminRatingAction } from "../../store/redusers/admin";
import { useQueryBuyRating } from "../../api/rating/rating.api.hook";

export function openModalAdminRating(rate: IAdminChangeRating) {
	store.dispatch(modalAdminRatingAction(true, rate));
}

export function ModalAdminChangeRating() {
	const { modalBuyRating } = store.getState();
	const refModalBuyRating = useRef<HTMLDivElement>(null);
	const { dataBuyRating, errorBuyRating, querySendBuyRating } =
		useQueryBuyRating();

	useEffect(() => {
		return () => {
			closeModalBuyRatingHandler();
		};
	}, []);

	useEffect(() => {
		if (!refModalBuyRating.current) return;

		if (modalBuyRating.enabled) {
			refModalBuyRating.current.classList.remove("invisible");
		} else {
			refModalBuyRating.current.classList.add("invisible");
		}
	}, [modalBuyRating.enabled]);

	useEffect(() => {
		if (dataBuyRating) {
			store.dispatch(userMyProfileAction(dataBuyRating));
			modalMessageOpen("Покупка прошла успешно!");
		} else if (errorBuyRating) {
			modalMessageOpen(errorBuyRating.response.data.message);
		}

		store.dispatch(
			modalBuyRatingAction(false, initialStateModalBuyRating.rate)
		);
	}, [dataBuyRating, errorBuyRating]);

	const closeModalBuyRatingHandler = () => {
		store.dispatch(
			modalBuyRatingAction(false, initialStateModalBuyRating.rate)
		);
	};

	const yesModalBuyRatingHandler = () => {
		if (!modalBuyRating.rate.idRate) return;

		querySendBuyRating(modalBuyRating.rate.idRate);
	};

	return (
		<div
			ref={refModalBuyRating}
			className="flex flex-col invisible fixed justify-center items-center bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-30 pb-2 h-36 w-80"
		>
			<div className="flex">{`Вы действительно хотите купить ${modalBuyRating.rate.amountRate} баллов рейтинга за ${modalBuyRating.rate.price} MY-баллов?`}</div>
			<div className="flex justify-center h-6 w-full">
				<ButtonYes onClick={yesModalBuyRatingHandler} />
				<ButtonCancel onClick={closeModalBuyRatingHandler} />
			</div>
		</div>
	);
}
