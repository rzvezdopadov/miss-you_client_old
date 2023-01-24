import { IStickerpack } from "../../../../../interfaces/istickers";
import { getLinkSticker } from "../../../../../utils/stickers";
import { Button } from "../../../../Utils/Buttons/Buttons";

export function ShopSticker(payload: IStickerpack) {
	return (
		<div className="flex justify-between rounded-2xl bg-slate-800 shadow-[0px_0px_2px_2px] shadow-lime-300 m-2 p-1 w-96">
			<div className="flex flex-col items-center p-0">
				<div
					style={{
						backgroundImage: `URL(${getLinkSticker(
							payload.stickers[0].link
						)})`,
					}}
					className="flex bg-center bg-cover bg-no-repeat rounded-full shadow-[0px_0px_2px_2px] shadow-lime-300 m-1 p-10 h-20 w-20"
				></div>
				<Button value={"Обзор"} onClick={() => {}} />
			</div>

			<div className="flex flex-grow flex-col justify-center mr-1">
				<div className="flex text-lg font-bold top-0 justify-center text-lime-500 select-none">
					{payload.name}
				</div>
				<div className="flex justify-center select-none">
					{payload.discription}
				</div>
				{payload.price ? (
					<div className="flex justify-center text-lime-500 select-none">{`${payload.price} MY-баллов`}</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
