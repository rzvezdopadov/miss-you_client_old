import React from "react";
import { LabelWidget } from "../../../utils/Labels";
import { Button } from "../../../utils/Buttons";
import { Messages } from "./Messages";
import { Photos } from "./Photos";
import { Filters } from "./Filters";
import { HistoryMessages } from "./HistoryMessages";

enum Page {
	message,
	filter,
	photo,
	history,
}

export function Options() {
	const [page, setPage] = React.useState<Page>(Page.message);

	return (
		<div className="flex flex-col items-center w-full h-full">
			<LabelWidget value={"Опции"} />

			<div className="flex justify-center items-start flex-wrap">
				<Button
					value={"Сообщения"}
					onClick={() => setPage(Page.message)}
				/>
				{/* <Button
					value={"Фильтры"}
					onClick={() => setPage(Page.filter)}
				/> */}
				<Button
					value={"Фотографии"}
					onClick={() => setPage(Page.photo)}
				/>
				<Button
					value={"Истории сообщений"}
					onClick={() => setPage(Page.history)}
				/>
			</div>
			{page === Page.message ? (
				<Messages />
			) : page === Page.filter ? (
				<></> // <Filters />
			) : page === Page.photo ? (
				<Photos />
			) : page === Page.history ? (
				<HistoryMessages />
			) : (
				<></>
			)}
		</div>
	);
}
