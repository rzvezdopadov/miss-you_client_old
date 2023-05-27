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
import { useRefDivVisible } from "../../../role_all/hooks/form.hook";
import { ModalUserDataWrapper } from "../../../role_all/components/wrappers/modal/ModalUserDataWrapper";

export function modalAddDeleteStickerpackOpen(stickerpack: IStickerpack) {
	store.dispatch(
		modalAddDeleteStickerpackAction({ enabled: true, stickerpack })
	);
}

export function ModalAddDeleteStickerpack() {
	const { userMyProfile } = storeAll.getState();
	const { modalAddDeleteStickerpack } = store.getState();

	const { dataAddStickerpack, errorAddStickerpack, querySendAddStickerpack } =
		useQueryAddStickerpack();
	const {
		dataDeleteStickerpack,
		errorDeleteStickerpack,
		querySendDeleteStickerpack,
	} = useQueryDeleteStickerpack();

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
		<ModalUserDataWrapper enabled={modalAddDeleteStickerpack.enabled}>
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
		</ModalUserDataWrapper>
	);
}
