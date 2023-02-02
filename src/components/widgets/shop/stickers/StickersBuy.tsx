import { useEffect, useState } from "react";
import { IStickerpack } from "../../../../interfaces/istickers";
import { store } from "../../../../store/store";
import { LabelHeaderLG } from "../../../utils/Labels";
import { StickerpackCard } from "./StickerpackCard";

export function StickersBuy() {
	const { userMyProfile, stickerpacks } = store.getState();
	const [buyStickerPacks, setBuyStickerPacks] = useState<IStickerpack[]>([]);

	useEffect(() => {
		setBuyStickerPacks(
			stickerpacks.filter(
				(stickerpack) =>
					stickerpack.price !== 0 &&
					!userMyProfile.stickerpacks.includes(
						stickerpack.idstickerpack
					)
			)
		);
	}, [userMyProfile.stickerpacks]);

	return (
		<div className="flex flex-col justify-start items-center w-full">
			<LabelHeaderLG value={"Платные"} />
			<div className="flex flex-wrap justify-center w-full">
				{buyStickerPacks.map((stickerpack) => (
					<StickerpackCard
						key={stickerpack.idstickerpack}
						{...stickerpack}
					/>
				))}
			</div>
		</div>
	);
}
