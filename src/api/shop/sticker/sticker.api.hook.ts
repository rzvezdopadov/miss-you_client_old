import { IProfile } from "../../../interfaces/iprofiles";
import { IStickerpack } from "../../../interfaces/istickers";
import { IQueryAnswerError } from "../../iquerys.api";
import {
	useQueryDelete,
	useQueryGet,
	useQueryPost,
} from "../../querys.api.hook";
import {
	IQueryAnswerAddStickerpack,
	IQueryAnswerDeleteStickerpack,
	IQueryAnswerStickerpacks,
} from "./isticker.api";

/* API Query to server */

/* Get all stickerpacks
 */
export function useQueryGetStickerpacks() {
	const { data, error, loaded, querySend } = useQueryGet();

	const querySendGetStickerpacks = async () => {
		querySend("/api/shop/stickerpacks", {}, true);
	};

	const dataNew = data as IStickerpack[];
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerStickerpacks = {
		dataStickerpacks: dataNew,
		errorStickerpacks: errorNew,
		loadedStickerpacks: loaded,
		querySendGetStickerpacks,
	};

	return queryAnswer;
}

/* Add stickerpack
 */
export function useQueryAddStickerpack() {
	const { data, error, loaded, querySend } = useQueryPost();

	const querySendAddStickerpack = async (idstickerpack: string) => {
		querySend("/api/shop/stickerpack", { idstickerpack }, true);
	};

	const dataNew = data as IProfile;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerAddStickerpack = {
		dataAddStickerpack: dataNew,
		errorAddStickerpack: errorNew,
		loadedAddStickerpack: loaded,
		querySendAddStickerpack,
	};

	return queryAnswer;
}

/* Delete stickerpack
 */
export function useQueryDeleteStickerpack() {
	const { data, error, loaded, querySend } = useQueryDelete();

	const querySendDeleteStickerpack = async (idstickerpack: string) => {
		querySend("/api/shop/stickerpack", { idstickerpack }, true);
	};

	const dataNew = data as IProfile;
	const errorNew = error as IQueryAnswerError;

	const queryAnswer: IQueryAnswerDeleteStickerpack = {
		dataDeleteStickerpack: dataNew,
		errorDeleteStickerpack: errorNew,
		loadedDeleteStickerpack: loaded,
		querySendDeleteStickerpack,
	};

	return queryAnswer;
}
