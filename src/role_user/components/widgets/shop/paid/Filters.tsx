import React from "react";
import { LabelWidget } from "../../../../../role_all/components/utils/Labels";
import { Button } from "../../../../../role_all/components/utils/Buttons";
import { PAID_PROPERTY } from "../../../../../role_all/interfaces/ishop";
import {
	PAID_API_TARIFFS,
	PAID_API_TARIFFS_BUY,
} from "../../../../../role_user/api/shop/paid/ipaid.api";
import { Paid } from "./Paid";

enum Pages {
	filtersvapors,
	longfiltersvapors,
	filtersfavoriteusers,
	longfiltersfavoriteusers,
	longfilters,
}

export function Filters() {
	const [page, setPage] = React.useState<Pages>(Pages.filtersvapors);

	return (
		<div className="flex flex-col items-center w-full h-full">
			<LabelWidget value={"Фильтры"} />

			<div className="flex justify-center items-start flex-wrap">
				<Button
					value={"В лайках"}
					onClick={() => setPage(Pages.filtersvapors)}
					checked={page === Pages.filtersvapors}
				/>
				<Button
					value={"В лайках расширенные"}
					onClick={() => setPage(Pages.longfiltersvapors)}
					checked={page === Pages.longfiltersvapors}
				/>
				<Button
					value={"В избранных"}
					onClick={() => setPage(Pages.filtersfavoriteusers)}
					checked={page === Pages.filtersfavoriteusers}
				/>
				<Button
					value={"В избранных расширенные"}
					onClick={() => setPage(Pages.longfiltersfavoriteusers)}
					checked={page === Pages.longfiltersfavoriteusers}
				/>
				<Button
					value={"В поиске людей расширенные"}
					onClick={() => setPage(Pages.longfilters)}
					checked={page === Pages.longfilters}
				/>
			</div>
			{page === Pages.longfilters ? (
				<Paid
					key={PAID_PROPERTY.longfilters}
					paidProperty={PAID_PROPERTY.longfilters}
					linkAPITariffs={PAID_API_TARIFFS.longfilterstariffs}
					linkAPITariffsBuy={PAID_API_TARIFFS_BUY.buylongfilters}
					header={"В поиске людей расширенные"}
					discriptions={
						"Позволяет в разделе 'Поиск людей' использовать расширенные фильтры"
					}
				/>
			) : page === Pages.filtersvapors ? (
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
			) : page === Pages.longfiltersvapors ? (
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
			) : page === Pages.filtersfavoriteusers ? (
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
			) : page === Pages.longfiltersfavoriteusers ? (
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
