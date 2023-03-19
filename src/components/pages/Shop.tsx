import { useState } from "react";
import { LabelCash, LabelPageName } from "../utils/Labels";
import { Button } from "../utils/Buttons";
import { ShopRating } from "../widgets/shop/ShopRating";
import { ShopStickers } from "../widgets/shop/ShopStickers";
import { store } from "../../store/store";
import { ShopBuyMYPoints } from "../widgets/shop/ShopBuyMYPoints";
import { MainScrollWrapper } from "../wrappers/MainScrollWrapper";

enum shopPage {
	rating,
	stickers,
	buyballs,
}

export function Shop() {
	const { userMyProfile } = store.getState();
	const [shop, setShop] = useState<shopPage>(shopPage.rating);

	return (
		<MainScrollWrapper shadow={true} color={true}>
			<LabelPageName value={`Магазин`} />
			<div className="w-48">
				<LabelCash value={userMyProfile.cash} />
			</div>

			<div className="flex justify-center flex-wrap">
				<Button
					value={"Рейтинг"}
					onClick={() => setShop(shopPage.rating)}
				/>
				<Button
					value={"Стикеры"}
					onClick={() => setShop(shopPage.stickers)}
				/>
				<Button
					value={"Пополнить MY-баллы"}
					onClick={() => setShop(shopPage.buyballs)}
				/>
			</div>
			{shop === shopPage.rating ? (
				<ShopRating />
			) : shop === shopPage.stickers ? (
				<ShopStickers />
			) : (
				<ShopBuyMYPoints />
			)}
		</MainScrollWrapper>
	);
}
