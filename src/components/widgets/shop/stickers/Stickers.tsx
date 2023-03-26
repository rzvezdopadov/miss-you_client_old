import { useState } from "react";
import { LabelWidget } from "../../../utils/Labels";
import { Button } from "../../../utils/Buttons";
import { ModalReviewStickerpack } from "../../../modal/ModalReviewStickerpack";
import { StickersMy } from "./StickersMy";
import { StickersFree } from "./StickersFree";
import { StickersBuy } from "./StickersBuy";

enum shopStickersPages {
	my,
	free,
	buy,
}

export function Stickers() {
	const [shopStickersPage, setShopStickersPage] = useState<shopStickersPages>(
		shopStickersPages.my
	);

	return (
		<div className="flex flex-col items-center w-full h-full">
			<LabelWidget value={"Cтикеры"} />
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
