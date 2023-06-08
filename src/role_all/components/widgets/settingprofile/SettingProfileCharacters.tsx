import {
	data_iDontLikeСharacter,
	data_iLikeСharacter,
} from "../../../data/profiles";
import { Button } from "../../utils/Buttons";
import { WidgetWrapper } from "../../wrappers/WidgetWrapper";
import { storeAll } from "../../../store/storeAll";
import { modalSettingProfileCharactersOpen } from "../../modal/ModalSettingProfileCharacters";

export function SettingProfileCharacters() {
	const { userMyProfile } = storeAll.getState();

	return (
		<WidgetWrapper col={true}>
			<div className="flex flex-col">
				<div className="flex flex-wrap">
					<div className="flex m-2">
						<span className="select-none"> Ценю качества: </span>
					</div>

					{userMyProfile.ilikecharacter.length ? (
						userMyProfile.ilikecharacter.map((value, index) => {
							return (
								<div
									key={"ilikecharacter" + index}
									className="flex items-center bg-gray-900 border-2 border-lime-300 rounded-md p-1 m-2 select-none"
									title={data_iLikeСharacter[value][1]}
								>
									{data_iLikeСharacter[value][0]}
								</div>
							);
						})
					) : (
						<div
							key="ilikecharacter"
							className="flex items-center bg-gray-900 border-2 border-lime-300 rounded-md p-1 m-2 select-none"
							title={"Отсутствуют"}
						>
							Отсутствуют
						</div>
					)}
				</div>

				<div className="flex flex-wrap">
					<div className="flex m-2">
						<span className="select-none">
							Не нравятся качества:
						</span>
					</div>

					{userMyProfile.idontlikecharacter.length ? (
						userMyProfile.idontlikecharacter.map((value, index) => {
							return (
								<div
									key={"idontlikecharacter" + index}
									className="flex items-center bg-gray-900 border-2 border-red-400 rounded-md p-1 m-2 select-none"
									title={data_iDontLikeСharacter[value][1]}
								>
									{data_iDontLikeСharacter[value][0]}
								</div>
							);
						})
					) : (
						<div
							key="idontlikecharacter"
							className="flex items-center bg-gray-900 border-2 border-red-400 rounded-md p-1 m-2 select-none"
							title={"Отсутствуют"}
						>
							Отсутствуют
						</div>
					)}
				</div>
			</div>

			<div className="flex m-1">
				<Button
					onClick={modalSettingProfileCharactersOpen}
					value={`Изменить параметры`}
				/>
			</div>
		</WidgetWrapper>
	);
}
