import { useEffect, useState } from "react";
import { IStickerpack } from "../../../../../role_all/interfaces/istickers";
import { LabelWidget } from "../../../../../role_all/components/utils/Labels";
import { convertTextToSign } from "../../../../../role_all/helpers/convert";
import { StickerpackCard } from "./StickerpackCard";
import { storeAll } from "../../../../../role_all/store/storeAll";

export function StickersMy() {
	const { userMyProfile, stickerpacks } = storeAll.getState();
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
			<LabelWidget value={"Мои"} />
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
