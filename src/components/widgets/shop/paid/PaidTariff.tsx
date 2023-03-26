import { ITariff } from "../../../../interfaces/ishop";
import { Button } from "../../../utils/Buttons";

export function PaidTariff(payload: {
	tariff: ITariff;
	openModalClbk: React.MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<div className="flex flex-col justify-center  shadow-[0px_0px_2px_2px] shadow-lime-300 bg-gray-900 text-neutral-50 rounded-3xl h-22 w-56 m-2 p-3">
			<div className="flex justify-center">{`Сколько дней действует: ${payload.tariff.amountDay}`}</div>
			<div className="flex justify-center">{`Спишем MY-баллов: ${payload.tariff.price}`}</div>
			<div className="flex justify-center">{`Экономия: ${payload.tariff.discount}%`}</div>
			<Button value="Приобрести" onClick={payload.openModalClbk} />
		</div>
	);
}
