import * as React from "react";
import { store } from "../../../store/store";
import { openModalSettingProfileCharacters } from "../../modal/ModalSettingProfileCharacters";
import {
	data_iDontLikeСharacter,
	data_iLikeСharacter,
} from "../../../data/profiles";

export function SettingProfileCharacters() {
	const { userMyProfile } = store.getState();

	return (
		<div className="flex flex-wrap flex-col shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl relative w-full items-center p-1 my-2">
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
									className="flex items-center shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-1 m-2 select-none"
									title={data_iLikeСharacter[value][1]}
								>
									{data_iLikeСharacter[value][0]}
								</div>
							);
						})
					) : (
						<div
							key="ilikecharacter"
							className="flex items-center shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-1 m-2 select-none"
							title={"Отсутствуют"}
						>
							Отсутствуют
						</div>
					)}
				</div>

				<div className="flex flex-wrap">
					<div className="flex m-2">
						<span className="select-none">
							{" "}
							Не нравятся качества:{" "}
						</span>
					</div>

					{userMyProfile.idontlikecharacter.length ? (
						userMyProfile.idontlikecharacter.map((value, index) => {
							return (
								<div
									key={"idontlikecharacter" + index}
									className="flex items-center shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-1 m-2 select-none"
									title={data_iDontLikeСharacter[value][1]}
								>
									{data_iDontLikeСharacter[value][0]}
								</div>
							);
						})
					) : (
						<div
							key="idontlikecharacter"
							className="flex items-center shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-1 m-2 select-none"
							title={"Отсутствуют"}
						>
							Отсутствуют
						</div>
					)}
				</div>
			</div>

			<div className="flex m-1">
				<div
					className="flex items-center shadow-[0px_0px_3px_3px] shadow-yellow-300 rounded-xl p-1 m-1 cursor-pointer select-none"
					onClick={openModalSettingProfileCharacters}
				>
					Изменить параметры
				</div>
			</div>
		</div>
	);
}
