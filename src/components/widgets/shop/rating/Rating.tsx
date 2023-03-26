import { useEffect, useState } from "react";
import { RatingRate } from "./RatingRate";
import stars from "../../../../assets/img/stars.png";
import { IRate, IRateModal } from "../../../../interfaces/ishop";
import { store } from "../../../../store/store";
import { LabelWidget, LabelRating, Label } from "../../../utils/Labels";

import {
	useQueryBuyRating,
	useQueryGetRatingTariffs,
} from "../../../../api/shop/rating/rating.api.hook";
import { ModalYesCancelWrapper } from "../../../wrappers/ModalYesCancelWrapper";
import { ButtonsYesCancelWidget } from "../../utils/Buttons";
import { userMyProfileAction } from "../../../../store/redusers/profile";
import { modalMessageOpen } from "../../../modal/ModalMessage";

export function Rating() {
	const { userMyProfile } = store.getState();
	const [ratingTariffs, setRatingTariffs] = useState<IRate[]>([]);
	const { dataRatingTariffs, errorRatingTariffs, querySendGetRatingTariffs } =
		useQueryGetRatingTariffs();

	const initRate = { idTariff: "", amountRate: 0, discount: 0, price: 0 };
	const { dataBuyRating, errorBuyRating, querySendBuyRating } =
		useQueryBuyRating();
	const [modalRatingTariff, setModalRatingTariff] = useState<IRateModal>({
		enabled: false,
		rate: initRate,
	});

	useEffect(() => {
		querySendGetRatingTariffs();
	}, []);

	useEffect(() => {
		if (!dataRatingTariffs) return;

		setRatingTariffs(dataRatingTariffs);
	}, [dataRatingTariffs]);

	useEffect(() => {
		if (dataRatingTariffs) {
			setRatingTariffs(dataRatingTariffs);
		} else if (errorRatingTariffs) {
			modalMessageOpen(errorRatingTariffs.response.data.message);
		}
	}, [dataRatingTariffs, errorRatingTariffs]);

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

	const modalBuyRatingCloseHandler = () =>
		setModalRatingTariff({ enabled: false, rate: initRate });

	return (
		<div
			className={`flex flex-col justify-start items-center w-full h-full`}
		>
			<LabelWidget value={"Приобрести рейтинг"} />
			<Label value={"Чем выше рейтинг, тем вы выше в выдаче"} />
			<div className="w-48">
				<LabelRating value={userMyProfile?.rating} />
			</div>
			<div className="flex justify-center flex-wrap m-4 w-full">
				{ratingTariffs.length ? (
					ratingTariffs.map((rate, i) => {
						return (
							<RatingRate
								key={rate.idTariff}
								rate={ratingTariffs[i]}
								openModalClbk={() =>
									setModalRatingTariff({
										enabled: true,
										rate: rate,
									})
								}
							/>
						);
					})
				) : (
					<div className="flex">Тарифы пока отсутствуют ^..^</div>
				)}
			</div>
			<div className="flex w-full max-w-4xl h-full">
				<div
					style={{
						backgroundImage: `URL(${stars})`,
					}}
					className="flex bg-contain bg-bottom bg-no-repeat w-full h-full"
				></div>
			</div>

			<ModalYesCancelWrapper enabled={modalRatingTariff.enabled}>
				<Label
					value={`Вы действительно хотите купить ${modalRatingTariff.rate.amountRate} баллов рейтинга за ${modalRatingTariff.rate.price} MY-баллов?`}
				/>
				<ButtonsYesCancelWidget
					onClickYes={() => {
						querySendBuyRating(modalRatingTariff.rate.idTariff);
					}}
					onClickCancel={modalBuyRatingCloseHandler}
				/>
			</ModalYesCancelWrapper>
		</div>
	);
}
