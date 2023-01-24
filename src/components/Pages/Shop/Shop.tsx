import { useState } from "react";
import { Cash, LabelHeader } from "../../Utils/Labels/Labels";
import { Button } from "../../Utils/Buttons/Buttons";
import { ShopRating } from "./ShopRating/ShopRating";
import { ShopStickers } from "./ShopStickers/ShopStickers";
import { store } from "../../../utils/store";
import { ShopBuyMYPoints } from "./ShopBuyMYPoints/ShopBuyMYPoints";

enum shopPage {
	rating,
	stickers,
	buyballs,
}

export function Shop() {
	const { userMyProfile } = store.getState();
	const [shop, setShop] = useState<shopPage>(shopPage.rating);

	return (
		<div className="flex h-full w-full justify-center">
			<div className="flex overflow-y-scroll justify-start items-center relative bg-gray-700 text-neutral-50 flex-col shadow-md rounded-3xl px-8 pt-2 pb-2 w-full">
				<LabelHeader value={`Магазин`} />
				<div className="w-48">
					<Cash value={userMyProfile.cash} />
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
			</div>
		</div>
	);
}
