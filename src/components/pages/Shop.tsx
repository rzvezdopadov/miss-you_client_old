import { useState } from "react";
import { LabelCash, LabelPageName } from "../utils/Labels";
import { Button } from "../utils/Buttons";
import { Rating } from "../widgets/shop/rating/Rating";
import { store } from "../../store/store";
import { BuyMYPoints } from "../widgets/shop/bymypoint/BuyMYPoints";
import { MainScrollWrapper } from "../wrappers/MainScrollWrapper";
import { Stickers } from "../widgets/shop/stickers/Stickers";
import { Options } from "../widgets/shop/paid/Options";

enum Page {
	rating,
	stickers,
	options,
	buyballs,
}

export function Shop() {
	const { userMyProfile } = store.getState();
	const [page, setPage] = useState<Page>(Page.rating);

	return (
		<MainScrollWrapper shadow={true} color={true}>
			<LabelPageName value={`Магазин`} />
			<div className="w-48">
				<LabelCash value={userMyProfile.cash} />
			</div>

			<div className="flex justify-center flex-wrap">
				<Button
					value={"Рейтинг"}
					onClick={() => setPage(Page.rating)}
				/>
				<Button
					value={"Стикеры"}
					onClick={() => setPage(Page.stickers)}
				/>
				<Button value={"Опции"} onClick={() => setPage(Page.options)} />
				<Button
					value={"Пополнить MY-баллы"}
					onClick={() => setPage(Page.buyballs)}
				/>
			</div>
			{page === Page.rating ? (
				<Rating />
			) : page === Page.stickers ? (
				<Stickers />
			) : page === Page.options ? (
				<Options />
			) : (
				<BuyMYPoints />
			)}
		</MainScrollWrapper>
	);
}
