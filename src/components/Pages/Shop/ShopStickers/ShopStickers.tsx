import { useState } from "react";
import { LabelHeaderLG } from "../../../Utils/Labels/Labels";
import { Button } from "../../../Utils/Buttons/Buttons";
import { MyStickers } from "./MyStickers/MyStickers";
import { FreeStickers } from "./FreeStickers/FreeStickers";
import { BuyStickers } from "./BuyStickers/BuyStickers";
import { ModalReviewStickerpack } from "../../../Modal/ModalReviewStickerpack/ModalReviewStickerpack";

enum shopStickersPages {
	my,
	free,
	buy,
}

export function ShopStickers() {
	const [shopStickersPage, setShopStickersPage] = useState<shopStickersPages>(
		shopStickersPages.my
	);

	return (
		<div className="flex flex-col items-center w-full h-full">
			<LabelHeaderLG value={"Cтикеры"} />
			<div className="flex justify-center flex-row flex-wrap w-full">
				<div className="flex">
					<Button
						value={"Мои"}
						onClick={() =>
							setShopStickersPage(shopStickersPages.my)
						}
					/>
					<Button
						value={"Бесплатные"}
						onClick={() =>
							setShopStickersPage(shopStickersPages.free)
						}
					/>
					<Button
						value={"Платные"}
						onClick={() =>
							setShopStickersPage(shopStickersPages.buy)
						}
					/>
				</div>
				<div className="flex justify-center w-full h-full">
					{shopStickersPage === shopStickersPages.my ? (
						<MyStickers />
					) : shopStickersPage === shopStickersPages.free ? (
						<FreeStickers />
					) : (
						<BuyStickers />
					)}
				</div>
			</div>
			<ModalReviewStickerpack />
		</div>
	);
}
