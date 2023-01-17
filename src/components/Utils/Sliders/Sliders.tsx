import { Ref, forwardRef } from "react";
import { convertTextToSign } from "../../../utils/convert";

export const Button = forwardRef(
	(payload: { value: string; onClick: any }, ref: Ref<HTMLButtonElement>) => {
		return (
			<div className="flex items-center justify-center m-1">
				<button
					className="flex items-center bg-lime-600 hover:bg-lime-800 select-none cursor-pointer text-white shadow-[0px_0px_2px_2px] shadow-lime-300 m-1 py-2 px-4 h-6 rounded-xl"
					type="button"
					ref={ref}
					onClick={payload.onClick}
				>
					{payload.value}
				</button>
			</div>
		);
	}
);

export function SliderPhoto(payload: {
	photolink: Array<string>;
	positionPhoto: number;
	onClick?: any;
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
	onClick?: any;
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
	onClick?: any;
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
	onClick: any;
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
	onClick: any;
}) {
	return (
		<>
			{payload.photolink.length < 10 ? (
				<div
					onClick={payload.onClick}
					className="flex select-none bg-gray-300 text-black text-xl border-yellow-300 border-2 font-bold justify-center cursor-pointer m-1 w-24 rounded-xl"
					title="Добавить фото"
				>
					+
				</div>
			) : (
				<></>
			)}
		</>
	);
}

export function SliderPhotoBtnLike(payload: {
	likes: Array<string>;
	onClick: any;
}) {
	const colorHeart = payload.likes.length ? "bg-red-500" : "bg-gray-300";

	return (
		<div
			onClick={payload.onClick}
			className={
				"flex select-none " +
				colorHeart +
				" justify-center items-center text-xl border-yellow-300 border-2 cursor-pointer m-1 w-24 rounded-xl"
			}
		>
			{payload.likes.length ? (
				<span className="text-white">&#9825;</span>
			) : (
				<span className="text-red-500">&#10084;</span>
			)}
		</div>
	);
}
