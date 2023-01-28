import { useEffect, useState } from "react";
import { store } from "../../../../../utils/store";
import { getLinkSticker } from "../../../../../utils/stickers";
import { convertTextToSign } from "../../../../../utils/convert";
import { IStickerpack } from "../../../../../interfaces/istickers";
import { sendSticker } from "../../../../Utils/Socket/Socket";

export function Stickers(payload: {
	onAddStrInMsgClbk: React.MouseEventHandler<HTMLDivElement>;
}) {
	const { stickerpacks, userMyProfile } = store.getState();
	const [myStickerpacks, setMyStickerpacks] = useState<IStickerpack[]>([]);

	useEffect(() => {
		const newStickerpacks: IStickerpack[] = [];

		userMyProfile.stickerpacks.forEach((value) => {
			const stickerpackIndex = stickerpacks.findIndex(
				(stickerpack) => stickerpack.idstickerpack === value
			);

			if (stickerpackIndex !== -1)
				newStickerpacks.push(stickerpacks[stickerpackIndex]);
		});

		setMyStickerpacks(newStickerpacks);
	}, [userMyProfile.stickerpacks]);

	const [stikersBookMark, setStickersBookMark] = useState(0);
	return (
		<div className="flex flex-col justify-center items-start text-sm absolute cursor-auto bottom-12 right-0 z-40 rounded-md shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-700 h-72 w-72">
			<div className="flex flex-wrap overflow-y-scroll h-60 w-72">
				{userMyProfile.stickerpacks &&
				userMyProfile.stickerpacks.length ? (
					myStickerpacks[stikersBookMark]?.stickers.map((value) => {
						return (
							<div
								style={{
									backgroundImage: `URL(${getLinkSticker(
										value.link
									)})`,
								}}
								key={`stickers${value.position}`}
								className="flex bg-center bg-cover bg-no-repeat justify-center items-center text-3xl h-24 w-24 cursor-pointer"
								onClick={(e) => {
									sendSticker(
										myStickerpacks[stikersBookMark]
											.idstickerpack,
										value.position
									);
									payload.onAddStrInMsgClbk(e);
								}}
							></div>
						);
					})
				) : (
					<div className="h-60 w-72 text-lg">
						{`Добавьте или приобретите требуемые стикеры в магазине ${convertTextToSign(
							"&#128522;"
						)}`}
					</div>
				)}
			</div>

			<div className="flex bg-slate-800 h-12 w-72">
				{userMyProfile.stickerpacks &&
				userMyProfile.stickerpacks.length ? (
					myStickerpacks?.map((value, index) => {
						return (
							<div
								style={{
									backgroundImage: `URL(${getLinkSticker(
										value.stickers[0].link
									)})`,
								}}
								className="flex bg-center bg-cover bg-no-repeat hover:bg-slate-500 justify-center items-center text-3xl h-10 w-10 cursor-pointer"
								key={`stickerpack${value.idstickerpack}`}
								onClick={() => {
									setStickersBookMark(index);
								}}
							></div>
						);
					})
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
