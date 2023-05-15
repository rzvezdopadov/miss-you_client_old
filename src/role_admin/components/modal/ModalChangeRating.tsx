import { useEffect } from "react";
import { userProfileAction } from "../../../role_all/store/redusers/profile";
import { Input } from "../../../role_all/components/utils/Inputs";
import { ButtonsYesCancelWidget } from "../../../role_all/components/widgets/utils/Buttons";
import { Label } from "../../../role_all/components/utils/Labels";
import { modalMessageOpen } from "../../../role_all/components/modal/ModalMessage";
import { store } from "../../store/store";
import {
	initialStateModalChangeRating,
	modalChangeRatingAction,
} from "../../store/redusers/modal";
import { useQuerySetRating } from "../../api/rating/rating.api.hook";
import { ModalYesCancelWrapper } from "../../../role_all/components/wrappers/modal/ModalYesCancelWrapper";

export function modalChangeRatingOpen(userid: string) {
	store.dispatch(
		modalChangeRatingAction({
			enabled: true,
			rate: {
				userid: userid,
				addrating: 0,
			},
		})
	);
}

export function modalChangeRatingClose() {
	store.dispatch(
		modalChangeRatingAction({
			enabled: false,
			rate: initialStateModalChangeRating.rate,
		})
	);
}

export function ModalChangeRating() {
	const { modalChangeRating } = store.getState();
	const { dataSetRating, errorSetRating, querySendSetRating } =
		useQuerySetRating();

	useEffect(() => {
		return () => {
			modalChangeRatingClose();
		};
	}, []);

	useEffect(() => {
		if (!dataSetRating) return;

		store.dispatch(
			userProfileAction({ enabled: true, profile: dataSetRating })
		);
		modalMessageOpen("Успешно выполненно!");
		modalChangeRatingClose();
	}, [dataSetRating]);

	useEffect(() => {
		if (!errorSetRating) return;

		modalMessageOpen(errorSetRating.response.data.message);
		modalChangeRatingClose();
	}, [errorSetRating]);

	const yesModalChangeRatingHandler = () => {
		if (!modalChangeRating.rate.userid) return;

		querySendSetRating(modalChangeRating.rate);
	};

	return (
		<ModalYesCancelWrapper enabled={modalChangeRating.enabled}>
			<Label
				value={`На сколько баллов изменить рейтинг пользователя c userid = "${modalChangeRating.rate.userid}"?`}
			></Label>
			<Input
				value={modalChangeRating.rate.addrating}
				onChange={(e) => {
					store.dispatch(
						modalChangeRatingAction({
							enabled: true,
							rate: {
								userid: modalChangeRating.rate.userid,
								addrating: Number(e.target.value),
							},
						})
					);
				}}
				type={""}
				placeholder={""}
			/>
			<ButtonsYesCancelWidget
				onClickYes={yesModalChangeRatingHandler}
				onClickCancel={modalChangeRatingClose}
			/>
		</ModalYesCancelWrapper>
	);
}
