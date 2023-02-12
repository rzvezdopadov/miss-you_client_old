import * as React from "react";
import { useEffect, useState } from "react";

export function AboutUs() {
	const [strAbout, setStrAbout] = useState("");

	useEffect(() => {
		let strAboutLocal = "";

		strAboutLocal += `Мы - это команда энтузиастов, которая решила помочь людям найти друг друга в этом большом мире. `;
		strAboutLocal += `На нашем сайте вы можете найти себе пару или друзей, для совместного время препровождения. `;
		strAboutLocal += `Вы можете написать сообщение любому пользователю совершенно бесплатно, но если `;
		strAboutLocal += `вы хотите поддержать развитие проекта, добро пожаловать в магазин, там можно `;
		strAboutLocal += `приобрести рейтинг, который используется при сортировке профилей, а также приобрести `;
		strAboutLocal += `наборы стикеров =) `;

		setStrAbout(strAboutLocal);
	}, []);

	return (
		<div className="flex w-full justify-center ">
			<div className="bg-gray-700 text-neutral-50 shadow-md rounded-3xl px-8 pt-2 pb-2 w-80">
				{strAbout}
			</div>
		</div>
	);
}
