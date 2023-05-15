import { useEffect, useState } from "react";
import { MainScrollWrapper } from "../wrappers/MainScrollWrapper";
import { LabelPageName } from "../utils/Labels";

export function AboutUs() {
	const [strAbout, setStrAbout] = useState("");

	useEffect(() => {
		let strAboutLocal = "";

		strAboutLocal += `Мы - это команда энтузиастов, которая решила помочь людям найти друг друга в этом большом мире. `;
		strAboutLocal += `На нашем сайте вы можете найти себе пару или друзей, для совместного время препровождения. `;
		strAboutLocal += `Вы можете написать сообщение любому пользователю совершенно бесплатно, но если `;
		strAboutLocal += `вы хотите поддержать развитие проекта, добро пожаловать в магазин, там можно `;
		strAboutLocal += `приобрести рейтинг, который используется при сортировке профилей, а также приобрести `;
		strAboutLocal += `наборы стикеров или другие продвинутые функции =) `;

		setStrAbout(strAboutLocal);
	}, []);

	return (
		<MainScrollWrapper shadow={true} color={true}>
			<LabelPageName value={"О нас"} />
			{strAbout}
		</MainScrollWrapper>
	);
}
