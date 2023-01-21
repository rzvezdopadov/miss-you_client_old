import { IRate } from "../../../../../interfaces/ishop";
import { Button } from "../../../../Utils/Sliders/Sliders";

export function ShopRatingRate(payload: IRate) {
	return (
		<div className="flex flex-col justify-center bg-gray-900 text-neutral-50 rounded-3xl h-22 w-44 m-2 p-3">
			<div className="flex justify-center">{`Количество: ${payload.amountRate}`}</div>
			<div className="flex justify-center">{`Сумма: ${payload.price}`}</div>
			<div className="flex justify-center">{`Экономия: ${payload.discount}%`}</div>
			<Button value="Приобрести" onClick={() => {}} />
		</div>
	);
}
