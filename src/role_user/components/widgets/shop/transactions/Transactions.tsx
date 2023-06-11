import { useEffect, useState } from "react";
import {
	Label,
	LabelWidget,
} from "../../../../../role_all/components/utils/Labels";
import { useQueryGetTransactions } from "../../../../api/shop/transactions/transactions.api.hook";
import { ITransaction } from "../../../../interfaces/itransaction";
import { Transaction } from "./Transaction";
import { WidgetWrapper } from "../../../../../role_all/components/wrappers/WidgetWrapper";

export function Transactions() {
	const { dataTransactions, errorTransactions, querySendGetTransactions } =
		useQueryGetTransactions();
	const [transactions, setTransactions] = useState<ITransaction[]>([]);

	useEffect(() => {
		querySendGetTransactions();
	}, []);

	useEffect(() => {
		if (!dataTransactions) return;

		setTransactions(dataTransactions);
	}, [dataTransactions]);

	useEffect(() => {
		if (!errorTransactions) return;
	}, [errorTransactions]);

	return (
		<div className="flex flex-col items-center w-full h-full">
			<LabelWidget value={"Транзакции"} />
			<div className="flex w-full overflow-auto">
				{transactions && transactions.length ? (
					<table className="bg-gray-900 p-2 mx-auto right-0 left-0">
						<thead>
							<tr>
								{[
									"Время",
									"От кого",
									"ID",
									"MY-баллы",
									"Описание",
								].map((value) => (
									<th
										key={value}
										className="border-2 border-lime-500 p-1"
									>
										{value}
									</th>
								))}
							</tr>
						</thead>

						<tbody>
							{transactions.map((transaction) => (
								<Transaction
									key={transaction.idtrans}
									transaction={transaction}
								/>
							))}
						</tbody>
					</table>
				) : (
					<WidgetWrapper shadowDisable={true}>
						<Label value="Пока транзакций нет =(" />
					</WidgetWrapper>
				)}
			</div>
		</div>
	);
}
