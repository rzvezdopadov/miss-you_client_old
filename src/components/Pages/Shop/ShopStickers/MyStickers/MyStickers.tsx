import { useEffect, useState } from "react";
import { IStickerpack } from "../../../../../interfaces/istickers";
import { store } from "../../../../../utils/store";
import { LabelHeaderLG } from "../../../../Utils/Labels/Labels";
import { ShopSticker } from "../ShopSticker/ShopSticker";
import { convertTextToSign } from "../../../../../utils/convert";

export function MyStickers() {
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
						<ShopSticker
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
