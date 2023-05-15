import { useEffect, useState } from "react";
import { IStickerpack } from "../../../../../role_all/interfaces/istickers";
import { LabelWidget } from "../../../../../role_all/components/utils/Labels";
import { StickerpackCard } from "./StickerpackCard";
import { storeAll } from "../../../../../role_all/store/storeAll";

export function StickersBuy() {
	const { userMyProfile, stickerpacks } = storeAll.getState();
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
			<LabelWidget value={"Платные"} />
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
