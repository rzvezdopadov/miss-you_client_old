import React from "react";
import { LabelWidget } from "../../../utils/Labels";
import { Button } from "../../../utils/Buttons";
import { PAID_PROPERTY } from "../../../../interfaces/ishop";
import {
	PAID_API_TARIFFS,
	PAID_API_TARIFFS_BUY,
} from "../../../../api/shop/paid/ipaid.api";
import { Paid } from "./Paid";

enum Page {
	photofull,
	photoload10,
	photoload15,
	photoload20,
	photoload25,
	photoload30,
}

export function Photos() {
	const [page, setPage] = React.useState<Page>(Page.photoload10);

	function getDiscripPhoto(num: number): string {
		return `Позволяет загружать в профиль до ${num} фото (без опций максимум 5)`;
	}

	return (
		<div className="flex flex-col items-center w-full h-full">
			<LabelWidget value={"Фотографии"} />

			<div className="flex justify-center items-start flex-wrap">
				<Button
					value={"До 10"}
					onClick={() => setPage(Page.photoload10)}
				/>
				<Button
					value={"До 15"}
					onClick={() => setPage(Page.photoload15)}
				/>
				<Button
					value={"До 20"}
					onClick={() => setPage(Page.photoload20)}
				/>
				<Button
					value={"До 25"}
					onClick={() => setPage(Page.photoload25)}
				/>
				<Button
					value={"До 30"}
					onClick={() => setPage(Page.photoload30)}
				/>
			</div>

			{page === Page.photofull ? (
				<Paid
					key={PAID_PROPERTY.photofull}
					paidProperty={PAID_PROPERTY.photofull}
					linkAPITariffs={PAID_API_TARIFFS.photofulltariffs}
					linkAPITariffsBuy={PAID_API_TARIFFS_BUY.buyphotofull}
					header={"Большие фото"}
					discriptions={
						"Позволяет просматривать фото на всю страницу"
					}
				/>
			) : page === Page.photoload10 ? (
				<Paid
					key={PAID_PROPERTY.photoload10}
					paidProperty={PAID_PROPERTY.photoload10}
					linkAPITariffs={PAID_API_TARIFFS.photoload10tariffs}
					linkAPITariffsBuy={PAID_API_TARIFFS_BUY.buyphotoload10}
					header={"До 10"}
					discriptions={getDiscripPhoto(10)}
				/>
			) : page === Page.photoload15 ? (
				<Paid
					key={PAID_PROPERTY.photoload15}
					paidProperty={PAID_PROPERTY.photoload15}
					linkAPITariffs={PAID_API_TARIFFS.photoload15tariffs}
					linkAPITariffsBuy={PAID_API_TARIFFS_BUY.buyphotoload15}
					header={"До 15"}
					discriptions={getDiscripPhoto(15)}
				/>
			) : page === Page.photoload20 ? (
				<Paid
					key={PAID_PROPERTY.photoload20}
					paidProperty={PAID_PROPERTY.photoload20}
					linkAPITariffs={PAID_API_TARIFFS.photoload20tariffs}
					linkAPITariffsBuy={PAID_API_TARIFFS_BUY.buyphotoload20}
					header={"До 20"}
					discriptions={getDiscripPhoto(20)}
				/>
			) : page === Page.photoload25 ? (
				<Paid
					key={PAID_PROPERTY.photoload25}
					paidProperty={PAID_PROPERTY.photoload25}
					linkAPITariffs={PAID_API_TARIFFS.photoload25tariffs}
					linkAPITariffsBuy={PAID_API_TARIFFS_BUY.buyphotoload25}
					header={"До 25"}
					discriptions={getDiscripPhoto(25)}
				/>
			) : page === Page.photoload30 ? (
				<Paid
					key={PAID_PROPERTY.photoload30}
					paidProperty={PAID_PROPERTY.photoload30}
					linkAPITariffs={PAID_API_TARIFFS.photoload30tariffs}
					linkAPITariffsBuy={PAID_API_TARIFFS_BUY.buyphotoload30}
					header={"До 30"}
					discriptions={getDiscripPhoto(30)}
				/>
			) : (
				<></>
			)}
		</div>
	);
}
