import { useState } from "react";
import { LabelHeaderLG } from "../../utils/Labels";
import { Button } from "../../utils/Buttons";
import { ModalReviewStickerpack } from "../../modal/ModalReviewStickerpack";
import { StickersMy } from "./stickers/StickersMy";
import { StickersFree } from "./stickers/StickersFree";
import { StickersBuy } from "./stickers/StickersBuy";

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
						<StickersMy />
					) : shopStickersPage === shopStickersPages.free ? (
						<StickersFree />
					) : (
						<StickersBuy />
					)}
				</div>
			</div>
			<ModalReviewStickerpack />
		</div>
	);
}
