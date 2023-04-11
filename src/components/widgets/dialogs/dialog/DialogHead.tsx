import { getAgeFromYear, getStrYearFromAge } from "../../../../helpers/age";
import { IDialog } from "../../../../interfaces/iprofiles";

export function DialogHead(payload: IDialog) {
	return (
		<div className="flex flex-shrink-0 justify-center items-center w-full my-1 text-lime-400 select-none">
			{payload &&
			payload.yearofbirth &&
			payload.userid &&
			Object.keys(payload).length ? (
				`${payload.name}, ${getAgeFromYear(
					payload.yearofbirth
				)} ${getStrYearFromAge(getAgeFromYear(payload.yearofbirth))}`
			) : (
				<div className="flex justify-center text-lime-400">
					Диалог с пользователем
				</div>
			)}
		</div>
	);
}
