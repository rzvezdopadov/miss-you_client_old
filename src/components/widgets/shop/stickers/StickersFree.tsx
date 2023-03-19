import { useEffect, useState } from "react";
import { IStickerpack } from "../../../../interfaces/istickers";
import { store } from "../../../../store/store";
import { StickerpackCard } from "./StickerpackCard";
import { LabelWidget } from "../../../utils/Labels";

export function StickersFree() {
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
