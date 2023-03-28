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
	longfilters,
	filtersvapors,
	longfiltersvapors,
	filtersfavoriteusers,
	longfiltersfavoriteusers,
}

export function Filters() {
	const [page, setPage] = React.useState<Page>(Page.longfilters);

	return (
		<div className="flex flex-col items-center w-full h-full">
			<LabelWidget value={"Фильтры"} />

			<div className="flex justify-center items-start flex-wrap">
				<Button
					value={"В поиске пар"}
					onClick={() => setPage(Page.longfilters)}
				/>
				<Button
					value={"В лайках"}
					onClick={() => setPage(Page.filtersvapors)}
				/>
				<Button
					value={"В лайках расширенные"}
					onClick={() => setPage(Page.longfiltersvapors)}
				/>
				<Button
					value={"В избранных"}
					onClick={() => setPage(Page.filtersfavoriteusers)}
				/>
				<Button
					value={"В избранных расширенные"}
					onClick={() => setPage(Page.longfiltersfavoriteusers)}
				/>
			</div>
			{page === Page.longfilters ? (
				<Paid
					key={PAID_PROPERTY.longfilters}
					paidProperty={PAID_PROPERTY.longfilters}
					linkAPITariffs={PAID_API_TARIFFS.longfilterstariffs}
					linkAPITariffsBuy={PAID_API_TARIFFS_BUY.buylongfilters}
					header={"В поиске пар"}
					discriptions={
						"Позволяет в разделе 'Поиск пары' использовать расширенные фильтры"
					}
				/>
			) : page === Page.filtersvapors ? (
				<Paid
					key={PAID_PROPERTY.filtersvapors}
					paidProperty={PAID_PROPERTY.filtersvapors}
					linkAPITariffs={PAID_API_TARIFFS.filtersvaporstariffs}
					linkAPITariffsBuy={PAID_API_TARIFFS_BUY.buyfiltersvapors}
					header={"В лайках"}
					discriptions={
						"Позволяет в разделе 'Лайки' использовать обычные фильтры"
					}
				/>
			) : page === Page.longfiltersvapors ? (
				<Paid
					key={PAID_PROPERTY.longfiltersvapors}
					paidProperty={PAID_PROPERTY.longfiltersvapors}
					linkAPITariffs={PAID_API_TARIFFS.longfiltersvaporstariffs}
					linkAPITariffsBuy={
						PAID_API_TARIFFS_BUY.buylongfiltersvapors
					}
					header={"В лайках расширенные"}
					discriptions={
						"Позволяет в разделе 'Лайки' использовать расширенные фильтры"
					}
				/>
			) : page === Page.filtersfavoriteusers ? (
				<Paid
					key={PAID_PROPERTY.filtersfavoriteusers}
					paidProperty={PAID_PROPERTY.filtersfavoriteusers}
					linkAPITariffs={
						PAID_API_TARIFFS.filtersfavoriteuserstariffs
					}
					linkAPITariffsBuy={
						PAID_API_TARIFFS_BUY.buyfiltersfavoriteusers
					}
					header={"В избранных"}
					discriptions={
						"Позволяет в разделе 'Избранные' использовать обычные фильтры"
					}
				/>
			) : page === Page.longfiltersfavoriteusers ? (
				<Paid
					key={PAID_PROPERTY.longfiltersfavoriteusers}
					paidProperty={PAID_PROPERTY.longfiltersfavoriteusers}
					linkAPITariffs={
						PAID_API_TARIFFS.longfiltersfavoriteuserstariffs
					}
					linkAPITariffsBuy={
						PAID_API_TARIFFS_BUY.buylongfiltersfavoriteusers
					}
					header={"В избранных"}
					discriptions={
						"Позволяет в разделе 'Избранные' использовать расширенные фильтры"
					}
				/>
			) : (
				<></>
			)}
		</div>
	);
}
