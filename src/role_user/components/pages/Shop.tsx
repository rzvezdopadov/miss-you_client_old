import { useState } from "react";
import {
	LabelCash,
	LabelPageName,
} from "../../../role_all/components/utils/Labels";
import { Button } from "../../../role_all/components/utils/Buttons";
import { MainScrollWrapper } from "../../../role_all/components/wrappers/MainScrollWrapper";
import { storeAll } from "../../../role_all/store/storeAll";
import { Rating } from "../widgets/shop/rating/Rating";
import { Stickers } from "../widgets/shop/stickers/Stickers";
import { Options } from "../widgets/shop/paid/Options";
import { BuyMYPoints } from "../widgets/shop/bymypoint/BuyMYPoints";

enum Pages {
	rating,
	stickers,
	options,
	buyballs,
}

export function Shop() {
	const { userMyProfile } = storeAll.getState();
	const [page, setPage] = useState<Pages>(Pages.rating);

	return (
		<MainScrollWrapper shadow={true} color={true}>
			<LabelPageName value={`Магазин`} />
			<div className="w-48">
				<LabelCash value={userMyProfile.cash} />
			</div>

			<div className="flex justify-center flex-wrap">
				<Button
					value={"Рейтинг"}
					onClick={() => setPage(Pages.rating)}
					checked={page === Pages.rating}
				/>
				<Button
					value={"Стикеры"}
					onClick={() => setPage(Pages.stickers)}
					checked={page === Pages.stickers}
				/>
				<Button
					value={"Опции"}
					onClick={() => setPage(Pages.options)}
					checked={page === Pages.options}
				/>
				<Button
					value={"Пополнить MY-баллы"}
					onClick={() => setPage(Pages.buyballs)}
					checked={page === Pages.buyballs}
				/>
			</div>
			{page === Pages.rating ? (
				<Rating />
			) : page === Pages.stickers ? (
				<Stickers />
			) : page === Pages.options ? (
				<Options />
			) : (
				<BuyMYPoints />
			)}
		</MainScrollWrapper>
	);
}
