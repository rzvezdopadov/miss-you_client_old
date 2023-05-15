import React from "react";
import { LabelWidget } from "../../../../../role_all/components/utils/Labels";
import { Button } from "../../../../../role_all/components/utils/Buttons";
import { Paid } from "./Paid";
import { PAID_PROPERTY } from "../../../../../role_all/interfaces/ishop";
import {
	PAID_API_TARIFFS,
	PAID_API_TARIFFS_BUY,
} from "../../../../../role_user/api/shop/paid/ipaid.api";

enum Pages {
	messageswrite,
	messagesread,
}

export function Messages() {
	const [page, setPage] = React.useState<Pages>(Pages.messageswrite);

	return (
		<div className="flex flex-col items-center w-full h-full">
			<LabelWidget value={"Сообщения"} />

			<div className="flex justify-center items-start flex-wrap">
				<Button
					value={"Написать"}
					onClick={() => setPage(Pages.messageswrite)}
					checked={page === Pages.messageswrite}
				/>
			</div>
			{page === Pages.messageswrite ? (
				<Paid
					key={PAID_PROPERTY.messageswrite}
					paidProperty={PAID_PROPERTY.messageswrite}
					linkAPITariffs={PAID_API_TARIFFS.messageswritetariffs}
					linkAPITariffsBuy={PAID_API_TARIFFS_BUY.buymessageswrite}
					header={"Писать сообщения"}
					discriptions={
						"Позволяет безлимитно, в рамках срока действия писать сообщения любым пользователя"
					}
				/>
			) : (
				<></>
			)}
		</div>
	);
}
