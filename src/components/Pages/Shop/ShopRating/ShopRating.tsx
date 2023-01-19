import { useEffect, useState } from "react";
import { IRate } from "../../../../interfaces/ishop";
import { LabelHeaderLG, Rating } from "../../../Utils/Labels/Labels";
import { ShopRatingRate } from "./ShopRatingRate/ShopRatingRate";
import stars from "../../../../img/stars.png";
import { store } from "../../../../utils/store";

export function ShopRating() {
	const { userMyProfile } = store.getState();
	const [ratingTariffs, setfirst] = useState<Array<IRate>>([]);

	const mockRate = [
		{
			idRate: "ssdvs",
			amountRate: 1,
			price: 10,
		},
		{
			idRate: "wefw",
			amountRate: 3,
			price: 28,
		},
		{
			idRate: "23r2",
			amountRate: 5,
			price: 45,
		},
		{
			idRate: "wegfwe",
			amountRate: 10,
			price: 90,
		},
		{
			idRate: "wdegvws",
			amountRate: 50,
			price: 450,
		},
	];

	useEffect(() => {
		setfirst(mockRate);
	}, []);

	return (
		<div
			className={`flex flex-col justify-start items-center w-full h-full`}
		>
			<LabelHeaderLG value={"Приобрести рейтинг"} />
			<div className="w-48">
				<Rating value={userMyProfile?.raiting} />
			</div>
			<div className="flex justify-center flex-wrap m-4 w-full">
				{ratingTariffs.length ? (
					ratingTariffs.map((value) => {
						return (
							<ShopRatingRate
								key={value.idRate}
								idRate={value.idRate}
								amountRate={value.amountRate}
								price={value.price}
							/>
						);
					})
				) : (
					<div className="flex">Тарифы пока отсутствуют ^..^</div>
				)}
			</div>
			<div className="flex w-full max-w-4xl h-full">
				<div
					style={{
						backgroundImage: `URL(${stars})`,
					}}
					className="flex bg-contain bg-bottom bg-no-repeat w-full h-full"
				></div>
			</div>
		</div>
	);
}
