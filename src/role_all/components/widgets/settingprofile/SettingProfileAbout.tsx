import * as React from "react";
import { Label, LabelCash, LabelRating } from "../../utils/Labels";
import { onChangeValueProfile } from "../../../helpers/profile";
import { Input, TextArea } from "../../utils/Inputs";
import { storeAll } from "../../../store/storeAll";
import { BG_COLOR } from "../../../../assets/styles/enum";
import { convertTextToSign } from "../../../helpers/convert";
import { WidgetWrapper } from "../../wrappers/WidgetWrapper";

export function SettingProfileAbout() {
	const { userMyProfile } = storeAll.getState();
	const refererlink = `${window.location.protocol}//${window.location.host}/registration?userid=${userMyProfile.userid}`;
	const refererDiscription = `За каждого приведенного участника сайта, начислим 5% MY-баллов от каждого его пополнения счета!`;

	const nameOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeValueProfile(e, "name", "string");
	};
	const discriptionOnChangeHandler = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		onChangeValueProfile(e, "discription", "string");
	};

	return (
		<WidgetWrapper wrap={true} col={true} itemsCenterDisable={true}>
			<LabelCash value={userMyProfile.cash} />
			<LabelRating value={userMyProfile.rating} />

			<Label
				value={`Ваш Id в системе: '${userMyProfile.userid}'`}
				shadow={true}
				selectauto={true}
				bgcolor={BG_COLOR.Lime700}
			/>

			<WidgetWrapper wrap={true} col={true} itemsCenterDisable={true}>
				<Label title={refererDiscription}>
					{`Ваша реферальская ссылка:`} {convertTextToSign("&nbsp")}
				</Label>
				<a
					href={refererlink}
					target="_blank"
					style={{ color: `lightgreen` }}
				>
					{refererlink}
				</a>
			</WidgetWrapper>

			<Input
				value={userMyProfile.name}
				onChange={nameOnChangeHandler}
				type={"name"}
				placeholder={"Ваше имя"}
			/>

			<TextArea
				value={userMyProfile.discription}
				onChange={discriptionOnChangeHandler}
				placeholder={"О себе"}
			/>
		</WidgetWrapper>
	);
}
