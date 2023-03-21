import { useEffect, useRef } from "react";
import { getRandomString } from "../../helpers/random";
import { apilinkcaptcha } from "../../config";
import { getWayCaptcha } from "../../helpers/server";

export function Captcha() {
	const canvasCaptcha = useRef<HTMLCanvasElement>(null);

	const handlerBtnCaptchaClick = () => {
		const img = new Image();
		img.src = `${getWayCaptcha(getRandomString(20))}`;
		img.onload = function () {
			if (!canvasCaptcha.current) return;

			const context = canvasCaptcha.current.getContext("2d");
			if (!context) return;

			context.clearRect(
				0,
				0,
				canvasCaptcha.current.width,
				canvasCaptcha.current.height
			);
			//context.save();

			context.drawImage(
				img,
				0,
				0,
				180,
				40,
				0,
				0,
				canvasCaptcha.current.width,
				canvasCaptcha.current.height
			);
		};
	};

	useEffect(() => {
		handlerBtnCaptchaClick();
	}, []);

	return (
		<div className="flex items-center justify-around m-0.5">
			<canvas
				width="180"
				height="32"
				className="flex bg-center bg-cover bg-no-repeat shadow-[0px_0px_3px_3px] shadow-lime-300 justify-center rounded-2xl w-44 h-10 m-1"
				ref={canvasCaptcha}
			></canvas>

			<button
				className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
				type="button"
				onClick={handlerBtnCaptchaClick}
			>
				&#8635;
			</button>
		</div>
	);
}
