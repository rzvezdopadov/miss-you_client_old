import { getDateTimeFromTimeCode } from "../../../../../role_all/helpers/datetime";
import { ITransaction } from "../../../../interfaces/itransaction";

export function TransactionGrid(payload: { value: string }) {
	return (
		<td className="border-2 border-lime-500 p-1 h-4">{payload.value}</td>
	);
}

export function Transaction(payload: { transaction: ITransaction }) {
	return (
		<tr className="h-4">
			<TransactionGrid
				value={getDateTimeFromTimeCode(payload.transaction.timecode)}
			/>
			<TransactionGrid value={payload.transaction.userfrom} />
			<TransactionGrid value={payload.transaction.idtrans} />
			<TransactionGrid value={String(payload.transaction.cash)} />
			<TransactionGrid value={payload.transaction.discription} />
		</tr>
	);
}
