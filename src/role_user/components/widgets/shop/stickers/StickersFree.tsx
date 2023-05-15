import { useEffect, useState } from "react";
import { IStickerpack } from "../../../../../role_all/interfaces/istickers";
import { StickerpackCard } from "./StickerpackCard";
import { LabelWidget } from "../../../../../role_all/components/utils/Labels";
import { storeAll } from "../../../../../role_all/store/storeAll";

export function StickersFree() {
	const { userMyProfile, stickerpacks } = storeAll.getState();
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
			<LabelWidget value={"Бесплатные"} />
			<div className="flex flex-wrap justify-center w-full">
				{freeStickerPacks.map((stickerpack) => (
					<StickerpackCard
						key={stickerpack.idstickerpack}
						{...stickerpack}
					/>
				))}
			</div>
		</div>
	);
}
