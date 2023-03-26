import React from "react";
import { LabelWidget } from "../../../utils/Labels";
import { Button } from "../../../utils/Buttons";
import { Paid } from "./Paid";
import { PAID_PROPERTY } from "../../../../interfaces/ishop";
import {
	PAID_API_TARIFFS,
	PAID_API_TARIFFS_BUY,
} from "../../../../api/shop/paid/ipaid.api";

enum Page {
	historymessages20,
	historymessages40,
	historymessages60,
	historymessages80,
	historymessages100,
	historymessages200,
	historymessages300,
}

export function HistoryMessages() {
	const [page, setPage] = React.useState<Page>(Page.historymessages20);

	function getDiscripHM(num: number): string {
		return `Позволяет хранить в истории сообщений до ${num} сообщений (без опций максимум 10)`;
	}

	return (
		<div className="flex flex-col items-center w-full h-full">
			<LabelWidget value={"История сообщений"} />

			<div className="flex justify-center items-start flex-wrap">
				<Button
					value={"До 20"}
					onClick={() => setPage(Page.historymessages20)}
				/>
				<Button
					value={"До 40"}
					onClick={() => setPage(Page.historymessages40)}
				/>
				<Button
					value={"До 60"}
					onClick={() => setPage(Page.historymessages60)}
				/>
				<Button
					value={"До 80"}
					onClick={() => setPage(Page.historymessages80)}
				/>
				<Button
					value={"До 100"}
					onClick={() => setPage(Page.historymessages100)}
				/>
				<Button
					value={"До 200"}
					onClick={() => setPage(Page.historymessages200)}
				/>
				<Button
					value={"До 300"}
					onClick={() => setPage(Page.historymessages300)}
				/>
			</div>

			{page === Page.historymessages20 ? (
				<Paid
					key={PAID_PROPERTY.historymessages20}
					paidProperty={PAID_PROPERTY.historymessages20}
					linkAPITariffs={PAID_API_TARIFFS.historymessages20tariffs}
					linkAPITariffsBuy={
						PAID_API_TARIFFS_BUY.buyhistorymessages20
					}
					header={"До 20"}
					discriptions={getDiscripHM(20)}
				/>
			) : page === Page.historymessages40 ? (
				<Paid
					key={PAID_PROPERTY.historymessages40}
					paidProperty={PAID_PROPERTY.historymessages40}
					linkAPITariffs={PAID_API_TARIFFS.historymessages40tariffs}
					linkAPITariffsBuy={
						PAID_API_TARIFFS_BUY.buyhistorymessages40
					}
					header={"До 40"}
					discriptions={getDiscripHM(40)}
				/>
			) : page === Page.historymessages60 ? (
				<Paid
					key={PAID_PROPERTY.historymessages60}
					paidProperty={PAID_PROPERTY.historymessages60}
					linkAPITariffs={PAID_API_TARIFFS.historymessages60tariffs}
					linkAPITariffsBuy={
						PAID_API_TARIFFS_BUY.buyhistorymessages60
					}
					header={"До 60"}
					discriptions={getDiscripHM(60)}
				/>
			) : page === Page.historymessages80 ? (
				<Paid
					key={PAID_PROPERTY.historymessages80}
					paidProperty={PAID_PROPERTY.historymessages80}
					linkAPITariffs={PAID_API_TARIFFS.historymessages80tariffs}
					linkAPITariffsBuy={
						PAID_API_TARIFFS_BUY.buyhistorymessages80
					}
					header={"До 80"}
					discriptions={getDiscripHM(80)}
				/>
			) : page === Page.historymessages100 ? (
				<Paid
					key={PAID_PROPERTY.historymessages100}
					paidProperty={PAID_PROPERTY.historymessages100}
					linkAPITariffs={PAID_API_TARIFFS.historymessages100tariffs}
					linkAPITariffsBuy={
						PAID_API_TARIFFS_BUY.buyhistorymessages100
					}
					header={"До 100"}
					discriptions={getDiscripHM(100)}
				/>
			) : page === Page.historymessages200 ? (
				<Paid
					key={PAID_PROPERTY.historymessages200}
					paidProperty={PAID_PROPERTY.historymessages200}
					linkAPITariffs={PAID_API_TARIFFS.historymessages200tariffs}
					linkAPITariffsBuy={
						PAID_API_TARIFFS_BUY.buyhistorymessages200
					}
					header={"До 200"}
					discriptions={getDiscripHM(200)}
				/>
			) : page === Page.historymessages300 ? (
				<Paid
					key={PAID_PROPERTY.historymessages300}
					paidProperty={PAID_PROPERTY.historymessages300}
					linkAPITariffs={PAID_API_TARIFFS.historymessages300tariffs}
					linkAPITariffsBuy={
						PAID_API_TARIFFS_BUY.buyhistorymessages300
					}
					header={"До 300"}
					discriptions={getDiscripHM(300)}
				/>
			) : (
				<></>
			)}
		</div>
	);
}
