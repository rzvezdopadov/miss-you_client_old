import { useEffect, useRef } from "react";
import { IStickerpack } from "../../../role_all/interfaces/istickers";
import { userMyProfileAction } from "../../../role_all/store/redusers/profile";
import { modalMessageOpen } from "../../../role_all/components/modal/ModalMessage";
import {
	useQueryAddStickerpack,
	useQueryDeleteStickerpack,
} from "../../api/shop/sticker/sticker.api.hook";
import { Label } from "../../../role_all/components/utils/Labels";
import { ButtonsYesCancelWidget } from "../../../role_all/components/widgets/utils/Buttons";
import {
	initialStateModalAddDeleteStickerpack,
	modalAddDeleteStickerpackAction,
} from "../../store/redusers/modal";
import { store } from "../../store/store";
import { storeAll } from "../../../role_all/store/storeAll";

export function modalAddDeleteStickerpackOpen(stickerpack: IStickerpack) {
	store.dispatch(
		modalAddDeleteStickerpackAction({ enabled: true, stickerpack })
	);
}

export function ModalAddDeleteStickerpack() {
	const { userMyProfile } = storeAll.getState();
	const { modalAddDeleteStickerpack } = store.getState();
	const refAddDeleteStickerpack = useRef<HTMLDivElement>(null);
	const { dataAddStickerpack, errorAddStickerpack, querySendAddStickerpack } =
		useQueryAddStickerpack();
	const {
		dataDeleteStickerpack,
		errorDeleteStickerpack,
		querySendDeleteStickerpack,
	} = useQueryDeleteStickerpack();

	useEffect(() => {
		if (!refAddDeleteStickerpack.current) return;

		if (modalAddDeleteStickerpack.enabled) {
			refAddDeleteStickerpack.current.classList.remove("invisible");
		} else {
			refAddDeleteStickerpack.current.classList.add("invisible");
		}
	}, [modalAddDeleteStickerpack.enabled]);

	useEffect(() => {
		if (!dataAddStickerpack) return;

		storeAll.dispatch(userMyProfileAction(dataAddStickerpack));
		modalMessageOpen("Выполнено успешно!");
		closeModalAddDeleteStickerpackHandler();
	}, [dataAddStickerpack]);

	useEffect(() => {
		if (!errorAddStickerpack) return;

		modalMessageOpen(errorAddStickerpack.response.data.message);
		closeModalAddDeleteStickerpackHandler();
	}, [errorAddStickerpack]);

	useEffect(() => {
		if (!dataDeleteStickerpack) return;

		storeAll.dispatch(userMyProfileAction(dataDeleteStickerpack));
		modalMessageOpen("Выполнено успешно!");
		closeModalAddDeleteStickerpackHandler();
	}, [dataDeleteStickerpack]);

	useEffect(() => {
		if (!errorDeleteStickerpack) return;

		modalMessageOpen(errorDeleteStickerpack.response.data.message);
		closeModalAddDeleteStickerpackHandler();
	}, [errorDeleteStickerpack]);

	const closeModalAddDeleteStickerpackHandler = () => {
		store.dispatch(
			modalAddDeleteStickerpackAction({
				enabled: false,
				stickerpack: initialStateModalAddDeleteStickerpack.stickerpack,
			})
		);
	};

	const yesModalAddDeleteStickerpackHandler = () => {
		if (!modalAddDeleteStickerpack.stickerpack.idstickerpack) return;

		if (
			userMyProfile.stickerpacks.includes(
				modalAddDeleteStickerpack.stickerpack.idstickerpack
			)
		) {
			querySendDeleteStickerpack(
				modalAddDeleteStickerpack.stickerpack.idstickerpack
			);
		} else {
			querySendAddStickerpack(
				modalAddDeleteStickerpack.stickerpack.idstickerpack
			);
		}
	};

	return (
		<div
			ref={refAddDeleteStickerpack}
			className="flex flex-col fixed justify-center items-center bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-30 pb-2 h-36 w-80"
		>
			{userMyProfile.stickerpacks.includes(
				modalAddDeleteStickerpack.stickerpack.idstickerpack
			) ? (
				<Label
					value={`Вы действительно хотите удалить стикерпак "${modalAddDeleteStickerpack.stickerpack.name}" из своих стикеров?`}
				/>
			) : modalAddDeleteStickerpack.stickerpack.price ? (
				<Label
					value={`Вы действительно хотите купить стикерпак "${modalAddDeleteStickerpack.stickerpack.name}" за ${modalAddDeleteStickerpack.stickerpack.price} MY-баллов?`}
				/>
			) : (
				<Label
					value={`Вы действительно хотите добавить стикерпак "${modalAddDeleteStickerpack.stickerpack.name}"?`}
				/>
			)}
			<ButtonsYesCancelWidget
				onClickYes={yesModalAddDeleteStickerpackHandler}
				onClickCancel={closeModalAddDeleteStickerpackHandler}
			/>
		</div>
	);
}
