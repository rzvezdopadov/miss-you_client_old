import { IRate } from "../../../../interfaces/ishop";
import { Button } from "../../../utils/Buttons";

export function RatingRate(payload: {
	rate: IRate;
	openModalClbk: React.MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<div className="flex flex-col justify-center  shadow-[0px_0px_2px_2px] shadow-lime-300 bg-gray-900 text-neutral-50 rounded-3xl h-22 w-56 m-2 p-3">
			<div className="flex justify-center">{`Начислим рейтинга: ${payload.rate.amountRate}`}</div>
			<div className="flex justify-center">{`Спишем MY-баллов: ${payload.rate.price}`}</div>
			<div className="flex justify-center">{`Экономия: ${payload.rate.discount}%`}</div>
			<Button value="Приобрести" onClick={payload.openModalClbk} />
		</div>
	);
}
