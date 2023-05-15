import { useEffect, useState } from "react";
import { modalPhotoEditorAction } from "../../store/redusers/modal";
import { userMyProfileAction } from "../../store/redusers/profile";
import { modalMessageOpen } from "./ModalMessage";
import { useQueryUploadPhoto } from "../../api/photo/photo.api.hook";
import { storeAll } from "../../store/storeAll";
import { useRefDivVisible } from "../../hooks/form.hook";
import { Button, ButtonClose } from "../utils/Buttons";

const baseBiasConst = { x: 160, y: 160 };

export function modalPhotoEditorOpen() {
	storeAll.dispatch(modalPhotoEditorAction(true));
}

export function modalPhotoEditorClose() {
	storeAll.dispatch(modalPhotoEditorAction(false));
}

export function ModalPhotoEditor() {
	const { modalPhotoEditor, userMyProfile } = storeAll.getState();
	const refModalPhotoEditor = useRefDivVisible(modalPhotoEditor);
	const mulImgMax = 10;
	const [imgData, setImgData] = useState<ArrayBuffer>();
	const [img, setImg] = useState<any>(undefined);
	const [mulImg, setMulImg] = useState(0);
	const [biasImg, setBiasImg] = useState(baseBiasConst);
	const [biasCoord, setBiasCoord] = useState(baseBiasConst);
	const [baseBiasCoord, setBaseBiasCoord] = useState(baseBiasConst);
	const [sizeAdd, setSizeAdd] = useState({ w: 0, h: 0 });
	const [mouseIsDown, setMouseIsDown] = useState(false);
	const { dataUploadPhoto, errorUploadPhoto, queryUploadPhoto } =
		useQueryUploadPhoto();

	useEffect(() => {
		return () => {
			modalPhotoEditorClose();
		};
	}, []);

	useEffect(() => {
		if (modalPhotoEditor === false) {
			setNewBuffParam(null as unknown as ArrayBuffer);
		}
	}, [modalPhotoEditor]);

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

	useEffect(() => {
		if (!dataUploadPhoto) return;

		const { photolink, photomain } = dataUploadPhoto;

		if (!photolink) return;

		const newUserMyProfile = { ...userMyProfile };
		newUserMyProfile.photolink = photolink;
		newUserMyProfile.photomain = photomain;
		storeAll.dispatch(userMyProfileAction(newUserMyProfile));
		storeAll.dispatch(modalPhotoEditorAction(false));
		modalMessageOpen("Успешно загруженно!");
	}, [dataUploadPhoto]);

	useEffect(() => {
		if (!errorUploadPhoto) return;

		modalMessageOpen(errorUploadPhoto.response.data.message);
	}, [errorUploadPhoto]);

	const downloadHandler = async () => {
		const canvas = document.getElementById(
			"photoeditor"
		) as HTMLCanvasElement;

		let data = await new Promise((resolve) =>
			canvas.toBlob(resolve, "image/jpeg", 0.8)
		);

		let formData = new FormData();
		formData.append("image", data as Blob, "image.jpg");

		queryUploadPhoto(formData);
	};

	const incMulImgHandler = () => {
		let mulImgNew = mulImg;
		if (++mulImgNew < mulImgMax + 1) setMulImg(mulImgNew);
	};

	const decMulImgHandler = () => {
		let mulImgNew = mulImg;
		if (--mulImgNew > 0) setMulImg(mulImgNew);
	};

	const imageEditorGetMouseXY = (e: any) => {
		const canvas = document.getElementById(
			"photoeditor"
		) as HTMLCanvasElement;

		const coord = canvas.getBoundingClientRect();
		const x =
			e.type === "touchstart" ||
			e.type === "touchmove" ||
			e.type === "touchend"
				? e.changedTouches[0].pageX - Math.round(coord.x)
				: e.pageX - Math.round(coord.x);
		const y =
			e.type === "touchstart" ||
			e.type === "touchmove" ||
			e.type === "touchend"
				? e.changedTouches[0].pageY - Math.round(coord.y)
				: e.pageY - Math.round(coord.y);

		return { x, y };
	};

	const imageEditorMouseDownHandler = (e: any) => {
		const { x, y } = imageEditorGetMouseXY(e);

		setBaseBiasCoord({ x, y });
		setMouseIsDown(true);
		loadCanvas();
	};

	const imageEditorMouseUpHandler = (e: any) => {
		const { x, y } = imageEditorGetMouseXY(e);

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
		const { x, y } = imageEditorGetMouseXY(e);
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

	const setNewBuffParam = (buff: ArrayBuffer) => {
		setImgData(buff);
		setBaseBiasCoord(baseBiasConst);
		setBiasCoord(baseBiasConst);
		setBiasImg(baseBiasConst);
		setMulImg(1);
	};

	const importDataHandler = (e: any) => {
		const photoLinkElem = document.getElementById(
			"file-upload"
		) as HTMLInputElement;

		const photoLinkObj = photoLinkElem.files;

		const reader = new FileReader();
		reader.onloadend = () => {
			setNewBuffParam(reader.result as ArrayBuffer);
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
		<div
			ref={refModalPhotoEditor}
			className="flex flex-col fixed justify-start items-center bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-30 pb-2 w-96 h-fit"
		>
			<ButtonClose onClick={modalPhotoEditorClose} />
			<>
				<canvas
					id="photoeditor"
					width="320"
					height="320"
					className="flex bg-center bg-cover bg-no-repeat shadow-[0px_0px_3px_3px] shadow-lime-300 justify-center rounded-2xl h-80 w-80 mt-8 mb-2"
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
						className="flex justify-center bg-green-500 hover:bg-green-700  cursor-pointer text-white font-bold m-2 w-10 h-7 rounded"
					>
						&#128269;
						<input
							id="file-upload"
							type="file"
							accept="image/jpeg"
							className="hidden"
							onChange={importDataHandler}
						/>
					</label>

					<div
						className="flex justify-center items-center bg-green-500 hover:bg-green-700 text-xl select-none cursor-pointer h-7 w-7 rounded"
						onClick={decMulImgHandler}
					>
						-
					</div>
				</div>

				<Button value={"Загрузить"} onClick={downloadHandler} />
			</>
		</div>
	);
}
