import { useEffect, useState } from "react";
import { IStickerpack } from "../../../../../interfaces/istickers";
import { store } from "../../../../../utils/store";
import { LabelHeaderLG } from "../../../../Utils/Labels/Labels";
import { ShopSticker } from "../ShopSticker/ShopSticker";

export function FreeStickers() {
	const { userMyProfile, stickerpacks } = store.getState();
	const [freeStickerPacks, setFreeStickerPacks] = useState<IStickerpack[]>(
		[]
	);

	useEffect(() => {
		setFreeStickerPacks(
			stickerpacks.filter(
				(stickerpack) =>
					stickerpack.price === 0 &&
					!userMyProfile.stickerpacks.includes(
						stickerpack.idstickerpack
					)
			)
		);
	}, [userMyProfile.stickerpacks]);

	return (
		<div className="flex flex-col justify-start items-center w-full">
			<LabelHeaderLG value={"Бесплатные"} />
			<div className="flex flex-wrap justify-center w-full">
				{freeStickerPacks.map((stickerpack) => (
					<ShopSticker
						key={stickerpack.idstickerpack}
						{...stickerpack}
					/>
				))}
			</div>
		</div>
	);
}
