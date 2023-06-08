import { useRef, useEffect, useState } from "react";
import stickerimg from "../../../../../assets/img/sticker.webp";
import { DialogEmojis } from "./DialogEmojis";
import { DialogStickers } from "./DialogStickers";
import { convertTextToSign } from "../../../../helpers/convert";
import { data_emojis } from "../../../../data/emojis";
import { useRefDivVisible } from "../../../../hooks/form.hook";

enum stickers {
	emojis,
	smiles,
}

export function DialogSmiles(payload: {
	onAddStrInMsgClbk: React.MouseEventHandler<HTMLDivElement>;
	smilesOpen: boolean;
}) {
	const refSmiles = useRefDivVisible(payload.smilesOpen);
	const [typeStickers, setTypeStickers] = useState(stickers.emojis);

	return (
		<div
			className="flex invisible flex-col justify-center items-start text-sm absolute cursor-auto bottom-12 right-0 z-40 rounded-md h-72 w-72"
			ref={refSmiles}
		>
			{typeStickers === stickers.emojis ? (
				<DialogEmojis onAddStrInMsgClbk={payload.onAddStrInMsgClbk} />
			) : (
				<DialogStickers onAddStrInMsgClbk={payload.onAddStrInMsgClbk} />
			)}

			<div className="flex absolute bottom-0 bg-slate-800 rounded-b-md border-2 border-lime-300 h-12 w-72">
				<div
					className="flex hover:bg-slate-500 justify-center items-center text-3xl h-10 w-10 cursor-pointer"
					onClick={() => {
						setTypeStickers(stickers.emojis);
					}}
					title="Эмоции"
				>
					{convertTextToSign(data_emojis[0][0])}
				</div>
				<div
					style={{
						backgroundImage: `URL(${stickerimg})`,
					}}
					className="flex hover:bg-slate-500 justify-center bg-cover bg-no-repeat items-center text-3xl h-10 w-10 cursor-pointer"
					onClick={() => {
						setTypeStickers(stickers.smiles);
					}}
					title="Стикеры"
				></div>
			</div>
		</div>
	);
}
