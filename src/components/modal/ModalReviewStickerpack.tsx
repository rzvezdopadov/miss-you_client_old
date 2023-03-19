import { useEffect, useRef } from "react";
import { IStickerpack } from "../../interfaces/istickers";
import { store } from "../../store/store";
import { LabelWidget } from "../utils/Labels";
import { getLinkSticker } from "../../helpers/stickers";
import { Button, ButtonClose } from "../utils/Buttons";
import {
	initialStateModalReviewStickerpack,
	modalReviewStickerpackAction,
} from "../../store/redusers/modal";
import {
	ModalAddDeleteStickerpack,
	modalAddDeleteStickerpackOpen,
} from "./ModalAddDeleteStickerpack";

export function modalReviewStickerpackOpen(stickerpack: IStickerpack) {
	store.dispatch(modalReviewStickerpackAction(true, stickerpack));
}

function modalReviewStickerpackClose() {
	store.dispatch(
		modalReviewStickerpackAction(
			false,
			initialStateModalReviewStickerpack.stickerpack
		)
	);
}

export function ModalReviewStickerpack() {
	const { modalReviewStickerpack, userMyProfile } = store.getState();

	const refModalReviewStickerpack = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!refModalReviewStickerpack.current) return;

		if (modalReviewStickerpack.enabled) {
			refModalReviewStickerpack.current.classList.remove("invisible");
		} else {
			refModalReviewStickerpack.current.classList.add("invisible");
		}
	}, [modalReviewStickerpack.enabled]);

	return (
		<div
			ref={refModalReviewStickerpack}
			className="flex flex-col invisible fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl overflow-y-scroll lg:overflow-auto top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-20 pb-2 h-full lg:h-2/3 lg:max-w-5xl"
		>
			<ButtonClose onClick={modalReviewStickerpackClose} />

			{modalReviewStickerpack.stickerpack.price ? (
				<LabelWidget value={"Купить стикерпак"} />
			) : (
				<LabelWidget value={"Добавить стикерпак"} />
			)}
			<div className="flex text-lg font-bold top-0 justify-center text-lime-500 select-none">
				{modalReviewStickerpack.stickerpack.name}
			</div>
			<div className="flex justify-center select-none">
				{modalReviewStickerpack.stickerpack.discription}
			</div>
			{modalReviewStickerpack.stickerpack.price ? (
				<div className="flex justify-center text-lime-500 select-none">{`${modalReviewStickerpack.stickerpack.price} MY-баллов`}</div>
			) : (
				<></>
			)}

			<Button
				value={
					modalReviewStickerpack.stickerpack.price &&
					!userMyProfile.stickerpacks.includes(
						modalReviewStickerpack.stickerpack.idstickerpack
					)
						? "Купить"
						: !modalReviewStickerpack.stickerpack.price &&
						  !userMyProfile.stickerpacks.includes(
								modalReviewStickerpack.stickerpack.idstickerpack
						  )
						? "Добавить"
						: "Удалить"
				}
				onClick={() => {
					modalAddDeleteStickerpackOpen(
						modalReviewStickerpack.stickerpack
					);
				}}
			/>

			<div className="flex justify-center items-start flex-wrap w-full">
				{modalReviewStickerpack.stickerpack.stickers.map((sticker) => {
					return (
						<div
							key={sticker.link}
							style={{
								backgroundImage: `URL(${getLinkSticker(
									sticker.link
								)})`,
							}}
							className="flex bg-center bg-cover bg-no-repeat m-1 p-10 h-20 w-20"
						></div>
					);
				})}
			</div>

			<ModalAddDeleteStickerpack />
		</div>
	);
}
