import * as React from "react";
import { useEffect, useState } from "react";

const baseBiasConst = { x: 160, y: 160 };

export function ModalSettingProfilePhotoEditor() {
	const mulImgMax = 10;
	const [imgData, setImgData] = useState<ArrayBuffer>();
	const [img, setImg] = useState<any>(undefined);
	const [mulImg, setMulImg] = useState(0);
	const [biasImg, setBiasImg] = useState(baseBiasConst);
	const [biasCoord, setBiasCoord] = useState(baseBiasConst);
	const [baseBiasCoord, setBaseBiasCoord] = useState(baseBiasConst);
	const [sizeAdd, setSizeAdd] = useState({ w: 0, h: 0 });
	const [mouseIsDown, setMouseIsDown] = useState(false);

	useEffect(() => {
		if (!imgData) return;

		var image = new Image();
		image.onload = () => {
			setImg(image);
			if (image.width - image.height > 0) {
				setSizeAdd({ w: 0, h: image.width - image.height });
			} else {
				setSizeAdd({ w: image.height - image.width, h: 0 });
			}
		};

		image.src = imgData as unknown as string;
	}, [imgData]);

	useEffect(() => {
		if (!img) return;

		loadCanvas();
	}, [img, mulImg, biasImg]);

	const incMulImgHandler = () => {
		let mulImgNew = mulImg;
		if (++mulImgNew < mulImgMax + 1) setMulImg(mulImgNew);
	};

	const decMulImgHandler = () => {
		let mulImgNew = mulImg;
		if (--mulImgNew > 0) setMulImg(mulImgNew);
	};

	const imageEditorMouseDownHandler = (e: any) => {
		const canvas = document.getElementById(
			"photoeditor"
		) as HTMLCanvasElement;

		const coord = canvas.getBoundingClientRect();
		const x =
			e.type === "touchstart"
				? e.changedTouches[0].pageX - Math.round(coord.x)
				: e.pageX - Math.round(coord.x);
		const y =
			e.type === "touchstart"
				? e.changedTouches[0].pageY - Math.round(coord.y)
				: e.pageY - Math.round(coord.y);

		setBaseBiasCoord({ x, y });
		setMouseIsDown(true);
		loadCanvas();
	};

	const imageEditorMouseUpHandler = (e: any) => {
		const canvas = document.getElementById(
			"photoeditor"
		) as HTMLCanvasElement;

		const coord = canvas.getBoundingClientRect();

		const x =
			e.type === "touchend"
				? e.changedTouches[0].pageX - Math.round(coord.x)
				: e.pageX - Math.round(coord.x);
		const y =
			e.type === "touchend"
				? e.changedTouches[0].pageY - Math.round(coord.y)
				: e.pageY - Math.round(coord.y);

		const xBias = x - baseBiasCoord.x;
		const yBias = y - baseBiasCoord.y;
		setMouseIsDown(false);
		setBiasCoord({
			x: biasCoord.x + xBias,
			y: biasCoord.y + yBias,
		});
		setBiasImg({
			x: biasCoord.x + xBias,
			y: biasCoord.y + yBias,
		});
	};

	const biasImgHandler = (e: any) => {
		if (!mouseIsDown) return;
		const canvas = document.getElementById(
			"photoeditor"
		) as HTMLCanvasElement;
		const coord = canvas.getBoundingClientRect();
		const x =
			e.type === "touchmove"
				? e.changedTouches[0].pageX - Math.round(coord.x)
				: e.pageX - Math.round(coord.x);
		const y =
			e.type === "touchmove"
				? e.changedTouches[0].pageY - Math.round(coord.y)
				: e.pageY - Math.round(coord.y);
		const xBias = x - baseBiasCoord.x;
		const yBias = y - baseBiasCoord.y;
		const biasDiv = 10;
		const xRel = x - biasImg.x;
		const yRel = y - biasImg.y;
		if (Math.abs(xRel) > biasDiv || Math.abs(yRel) > biasDiv) {
			setBiasImg({
				x: biasCoord.x + xBias,
				y: biasCoord.y + yBias,
			});
		}
	};

	const importData = (e: any) => {
		const photoLinkElem = document.getElementById(
			"file-upload"
		) as HTMLInputElement;

		const photoLinkObj = photoLinkElem.files;

		const reader = new FileReader();
		reader.onloadend = () => {
			setImgData(reader.result as ArrayBuffer);
			setBaseBiasCoord(baseBiasConst);
			setBiasCoord(baseBiasConst);
			setBiasImg(baseBiasConst);
			setMulImg(1);
		};

		if (photoLinkObj) {
			reader.readAsDataURL(photoLinkObj[0]);
		}
	};

	const loadCanvas = () => {
		const canvas = document.getElementById(
			"photoeditor"
		) as HTMLCanvasElement;

		const context = canvas.getContext("2d");

		if (context) {
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.save();
			const mulImgMaxPl1 = mulImgMax + 1;
			const sizeCanvas = 320;

			const sxp = Math.floor(
				((img.width + sizeAdd.w) / mulImgMaxPl1) * mulImg
			);
			const syp = Math.floor(
				((img.height + sizeAdd.h) / mulImgMaxPl1) * mulImg
			);
			const sx = Math.floor(sxp / 2);
			const sy = Math.floor(syp / 2);
			const sw = Math.floor(img.width + sizeAdd.w - sxp);
			const sh = Math.floor(img.height + sizeAdd.h - syp);
			const biasImgX = biasImg.x - sizeCanvas / 2;
			const biasImgY = biasImg.y - sizeCanvas / 2;
			const biasx = Math.floor(
				(biasImgX * img.width * mulImg) / sizeCanvas / mulImgMaxPl1
			);
			const biasy = Math.floor(
				(biasImgY * img.height * mulImg) / sizeCanvas / mulImgMaxPl1
			);

			context.drawImage(
				img,
				sx - biasx,
				sy - biasy,
				sw,
				sh,
				0,
				0,
				sizeCanvas,
				sizeCanvas
			);
			context.restore();
		}
	};

	return (
		<div className="flex flex-col fixed justify-center items-center bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-30 pb-2 h-96 w-96">
			<canvas
				id="photoeditor"
				width="320"
				height="320"
				className="flex relative bg-center bg-cover bg-no-repeat shadow-[0px_0px_3px_3px] shadow-lime-300 justify-center  rounded-2xl h-80 w-80 m-1"
				onTouchStart={imageEditorMouseDownHandler}
				onTouchEnd={imageEditorMouseUpHandler}
				onTouchMove={biasImgHandler}
				onMouseDown={imageEditorMouseDownHandler}
				onMouseUp={imageEditorMouseUpHandler}
				onMouseMove={biasImgHandler}
			></canvas>
			<div className="flex justify-center items-center h-8 m-1 w-full">
				<div
					className="flex justify-center items-center bg-green-500 hover:bg-green-700 text-xl select-none cursor-pointer h-7 w-7 rounded"
					onClick={incMulImgHandler}
				>
					+
				</div>

				<label
					htmlFor="file-upload"
					className="flex justify-center bg-green-500 hover:bg-green-700 text-white font-bold m-2 w-10 h-7 rounded"
				>
					&#128269;
					<input
						id="file-upload"
						type="file"
						accept="image/jpeg"
						className="hidden"
						onChange={importData}
					/>
				</label>

				<div
					className="flex justify-center items-center bg-green-500 hover:bg-green-700 text-xl select-none cursor-pointer h-7 w-7 rounded"
					onClick={decMulImgHandler}
				>
					-
				</div>
			</div>
		</div>
	);
}
