export function DialogsRightSideBarAd() {
	const objAd = {
		href: "https://alitems.co/g/568bdkww5g1a0445aa4216525dc3e8/?i=4",
		src: "https://inlnk.ru/DB5RKM",
		title: "",
		discription: "",
	};

	const ad: (typeof objAd)[] = [];

	// for (let i = 0; i < 5; i++) {
	// 	ad.push(obj);
	// }

	return (
		<>
			<div className="flex justify-center items-center w-full mt-2 select-none">
				Наши партнеры:
			</div>
			<div className="flex overflow-y-scroll justify-start flex-col items-center w-full mt-2 select-none">
				{ad.length ? (
					ad.map((obj, index) => {
						return (
							<div key={obj.href + index} className="flex m-2">
								<a
									target="_blank"
									rel="noreferrer"
									href={obj.href}
								>
									<img
										width="125"
										height="125"
										src={obj.src}
										alt=""
									/>
								</a>
							</div>
						);
					})
				) : (
					<div className="flex "> Ничего нет =( </div>
				)}
			</div>
		</>
	);
}
