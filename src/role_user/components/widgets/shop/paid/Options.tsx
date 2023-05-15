import React from "react";
import { LabelWidget } from "../../../../../role_all/components/utils/Labels";
import { Button } from "../../../../../role_all/components/utils/Buttons";
import { Messages } from "./Messages";
import { Photos } from "./Photos";
import { Filters } from "./Filters";
import { HistoryMessages } from "./HistoryMessages";

enum Pages {
	message,
	filter,
	photo,
	history,
}

export function Options() {
	const [page, setPage] = React.useState<Pages>(Pages.message);

	return (
		<div className="flex flex-col items-center w-full h-full">
			<LabelWidget value={"Опции"} />

			<div className="flex justify-center items-start flex-wrap">
				<Button
					value={"Сообщения"}
					onClick={() => setPage(Pages.message)}
					checked={page === Pages.message}
				/>
				<Button
					value={"Фильтры"}
					onClick={() => setPage(Pages.filter)}
					checked={page === Pages.filter}
				/>
				<Button
					value={"Фотографии"}
					onClick={() => setPage(Pages.photo)}
					checked={page === Pages.photo}
				/>
				<Button
					value={"Истории сообщений"}
					onClick={() => setPage(Pages.history)}
					checked={page === Pages.history}
				/>
			</div>
			{page === Pages.message ? (
				<Messages />
			) : page === Pages.filter ? (
				<Filters />
			) : page === Pages.photo ? (
				<Photos />
			) : page === Pages.history ? (
				<HistoryMessages />
			) : (
				<></>
			)}
		</div>
	);
}
