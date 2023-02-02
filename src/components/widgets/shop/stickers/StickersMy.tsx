import { useEffect, useState } from "react";
import { IStickerpack } from "../../../../interfaces/istickers";
import { store } from "../../../../store/store";
import { LabelHeaderLG } from "../../../utils/Labels";
import { convertTextToSign } from "../../../../helpers/convert";
import { StickerpackCard } from "./StickerpackCard";

export function StickersMy() {
	const { userMyProfile, stickerpacks } = store.getState();
	const [myStickerPacks, setMyStickerPacks] = useState<IStickerpack[]>([]);

	useEffect(() => {
		setMyStickerPacks(
			stickerpacks.filter((stickerpack) =>
				userMyProfile.stickerpacks.includes(stickerpack.idstickerpack)
			)
		);
	}, [userMyProfile.stickerpacks]);

	return (
		<div className="flex flex-col justify-start items-center w-full">
			<LabelHeaderLG value={"Мои"} />
			<div className="flex flex-wrap justify-center w-full">
				{myStickerPacks.length ? (
					myStickerPacks.map((stickerpack) => (
						<StickerpackCard
							key={stickerpack.idstickerpack}
							{...stickerpack}
						/>
					))
				) : (
					<label className="text-lg text-lime-500">
						{`Стикеров пока не добавлено ${convertTextToSign(
							"&#128524;"
						)}`}
					</label>
				)}
			</div>
		</div>
	);
}
