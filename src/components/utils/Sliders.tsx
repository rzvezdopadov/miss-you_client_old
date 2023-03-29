import { MouseEventHandler } from "react";
import { convertTextToSign } from "../../helpers/convert";

export function SliderPhoto(payload: {
	photolink: Array<string>;
	positionPhoto: number;
	onClick?: MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<div
			style={{
				backgroundImage:
					"URL(" + payload.photolink[payload.positionPhoto] + ")",
			}}
			className="flex bg-center bg-cover bg-no-repeat shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-2xl justify-center h-80 w-80 m-1"
			onClick={payload.onClick}
		></div>
	);
}

export function SliderPhotoBtnLeftRight(payload: {
	photolink: Array<string>;
	value: string;
	onClick?: MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<>
			{payload.photolink.length > 1 ? (
				<div
					onClick={payload.onClick}
					className="flex select-none bg-gray-300 text-black text-xl border-lime-300 border-2 font-bold justify-center cursor-pointer m-1 w-24 rounded-xl"
					title="Фото вправо"
				>
					{convertTextToSign(payload.value)}
				</div>
			) : (
				<></>
			)}
		</>
	);
}

export function SliderPhotoBtnLeft(payload: {
	photolink: Array<string>;
	onClick?: MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<SliderPhotoBtnLeftRight
			photolink={payload.photolink}
			value={"&lt;"}
			onClick={payload.onClick}
		/>
	);
}

export function SliderPhotoBtnRight(payload: {
	photolink: Array<string>;
	onClick: MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<SliderPhotoBtnLeftRight
			photolink={payload.photolink}
			value={"&gt;"}
			onClick={payload.onClick}
		/>
	);
}

export function SliderPhotoBtnAdd(payload: {
	photolink: Array<string>;
	onClick: MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<div
			onClick={payload.onClick}
			className="flex select-none bg-gray-300 text-black text-xl border-yellow-300 border-2 font-bold justify-center cursor-pointer m-1 w-24 rounded-xl"
			title="Добавить фото"
		>
			+
		</div>
	);
}

export function SliderPhotoBtnLike(payload: {
	likes: Array<string>;
	onClick: MouseEventHandler<HTMLDivElement>;
}) {
	const colorHeart = payload.likes.length ? "bg-red-500" : "bg-gray-300";

	return (
		<div
			onClick={payload.onClick}
			className={
				"flex select-none " +
				colorHeart +
				" justify-center items-center text-xl border-yellow-300 border-2 cursor-pointer m-1 w-12 rounded-xl"
			}
			title={payload.likes.length > 0 ? "Убрать лайк" : "Поставить лайк"}
		>
			{payload.likes.length ? (
				<span className="text-white">&#9825;</span>
			) : (
				<span className="text-red-500">&#10084;</span>
			)}
		</div>
	);
}

export function SliderPhotoBtnFavoriteUser(payload: {
	favoriteuser: boolean;
	onClick: MouseEventHandler<HTMLDivElement>;
}) {
	const colorStar = payload.favoriteuser ? "bg-yellow-500" : "bg-gray-300";

	return (
		<div
			onClick={payload.onClick}
			className={
				"flex select-none " +
				colorStar +
				" justify-center items-center text-2xl border-yellow-300 border-2 cursor-pointer m-1 w-12 rounded-xl"
			}
			title={
				payload.favoriteuser === true
					? "Удалить из избранного"
					: "Добавить в избранное"
			}
		>
			{payload.favoriteuser ? (
				<span className="text-white">&#9734;</span>
			) : (
				<span className="text-black">&#9734;</span>
			)}
		</div>
	);
}
