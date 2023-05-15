import { useState } from "react";
import { LabelWidget } from "../../../../../role_all/components/utils/Labels";
import { Button } from "../../../../../role_all/components/utils/Buttons";
import { ModalReviewStickerpack } from "../../../../../role_user/components/modal/ModalReviewStickerpack";
import { StickersMy } from "./StickersMy";
import { StickersFree } from "./StickersFree";
import { StickersBuy } from "./StickersBuy";

enum Pages {
	my,
	free,
	buy,
}

export function Stickers() {
	const [page, setPage] = useState<Pages>(Pages.my);

	return (
		<div className="flex flex-col items-center w-full h-full">
			<LabelWidget value={"Cтикеры"} />
			<div className="flex justify-center flex-row flex-wrap w-full">
				<div className="flex">
					<Button
						value={"Мои"}
						onClick={() => setPage(Pages.my)}
						checked={page === Pages.my}
					/>
					<Button
						value={"Бесплатные"}
						onClick={() => setPage(Pages.free)}
						checked={page === Pages.free}
					/>
					<Button
						value={"Платные"}
						onClick={() => setPage(Pages.buy)}
						checked={page === Pages.buy}
					/>
				</div>
				<div className="flex justify-center w-full h-full">
					{page === Pages.my ? (
						<StickersMy />
					) : page === Pages.free ? (
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
