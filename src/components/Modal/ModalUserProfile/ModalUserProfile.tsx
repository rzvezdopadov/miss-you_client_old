import * as React from "react";
import { useEffect, useRef } from "react";
import {
	arr_alcohol,
	arr_children,
	arr_genderVapor,
	arr_iDontLikeСharacter,
	arr_iLikeСharacter,
	arr_profit,
	arr_religion,
	arr_signZodiac,
	arr_smoke,
	arr_weight,
} from "../../../arrdata/profiles";
import { useQueryGetDialog } from "../../../hooks/api.hook";
import { IProfile } from "../../../interfaces/iprofiles";
import { IQueryDialog } from "../../../interfaces/iquery";
import {
	dialogAction,
	dialogUserIdAction,
	initialStateUserProfile,
	userProfileAction,
} from "../../../utils/reducers";
import { store } from "../../../utils/store";
import {
	closeDialogModal,
	ModalDialog,
	openDialogModal,
} from "../ModalDialog/ModalDialog";
import { openModalMessage } from "../ModalMessage/ModalMessage";
import { UserProfileInterest } from "../../Pages/UserProfile/UserProfileInterest/UserProfileInterest";
import { UserProfileInterests } from "../../Pages/UserProfile/UserProfileInterests/UserProfileInterests";
import { UserProfileSlider } from "../../Pages/UserProfile/UserProfileSlider/UserProfileSlider";
import { VisitDateTime } from "../../Utils/VisitDateTime/VisitDateTime";
import { getAgeFromYear, getStrYearFromAge } from "../../../utils/age";
import { Rating } from "../../Utils/Labels/Labels";

export function openUserProfile(profile: IProfile) {
	store.dispatch(userProfileAction(true, profile));
}

function closeUserProfile() {
	store.dispatch(userProfileAction(false, initialStateUserProfile.profile));
}

export function ModalUserProfile() {
	const { data, error, querySendGetDialog } = useQueryGetDialog();
	const { userProfile } = store.getState();
	const refUserProfile = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (data) {
			openDialogModal();
			store.dispatch(dialogAction(data));
			store.dispatch(dialogUserIdAction(userProfile.profile.userid));
		} else if (error) {
			openModalMessage(error.response.data.message);
		}
	}, [data, error]);

	useEffect(() => {
		if (!refUserProfile.current) return;

		if (userProfile.enabled) {
			refUserProfile.current.classList.remove("invisible");
		} else {
			refUserProfile.current.classList.add("invisible");
		}
	}, [userProfile.enabled]);

	const openDialogModalHandler = () => {
		const data: IQueryDialog = {
			userid: userProfile.profile.userid,
		};

		querySendGetDialog(data);
	};

	const closeUserProfileHandler = () => {
		closeDialogModal();
		closeUserProfile();
	};

	return (
		<>
			<div
				ref={refUserProfile}
				className="flex flex-col fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl overflow-y-scroll lg:overflow-auto top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-20 pb-2 h-full lg:h-2/3 lg:max-w-5xl"
			>
				<div className="flex justify-center h-6 w-full">
					<div
						onClick={closeUserProfileHandler}
						className="flex justify-center absolute right-2 cursor-pointer rounded-full bg-red-400 h-6 w-6"
					>
						X
					</div>
				</div>

				<div className="flex flex-wrap mt-4 flex-col lg:flex-row justify-center items-center h-fit w-full">
					<div className="flex flex-col">
						<UserProfileSlider />
						<Rating value={userProfile.profile.raiting} />

						<div
							className="flex select-none bg-lime-700 justify-center cursor-pointer m-1 rounded-md"
							onClick={openDialogModalHandler}
						>
							Написать сообщение
						</div>
					</div>

					<div className="flex items-center flex-col">
						<div className="flex justify-center select-none text-white p-1 m-1 h-7 rounded-lg">
							{`${userProfile.profile.name}, ${getAgeFromYear(
								userProfile.profile.yearofbirth
							)} ${getStrYearFromAge(
								getAgeFromYear(userProfile.profile.yearofbirth)
							)}`}
						</div>

						<VisitDateTime profile={userProfile.profile} />

						<div className="flex justify-center items-center flex-col select-none text-white max-w-xl p-1 m-1 rounded-lg">
							<span className="flex">О себе:</span>

							<div className="flex flex-wrap justify-center">
								{userProfile.profile.discription}
							</div>
						</div>

						<div className="flex justify-center items-center flex-col select-none text-white max-w-xl p-1 m-1 rounded-lg">
							<span className="flex">Личное:</span>
							<div className="flex flex-wrap justify-center">
								{
									<UserProfileInterest
										key={
											"location" +
											userProfile.profile.location
										}
										value={userProfile.profile.location}
										title={"Локация"}
									/>
								}
								{
									<UserProfileInterest
										key={
											"growth" +
											userProfile.profile.growth
										}
										value={
											userProfile.profile.growth + " см"
										}
										title={"Рост"}
									/>
								}
								{!(userProfile.profile.weight === 0) ? (
									<UserProfileInterest
										key={
											"weight" +
											userProfile.profile.weight
										}
										value={
											arr_weight[
												userProfile.profile.weight
											]
										}
										title={"Телосложение"}
									/>
								) : (
									<></>
								)}

								{
									<UserProfileInterest
										key={
											"signZodiac" +
											userProfile.profile.signzodiac
										}
										value={
											arr_signZodiac[
												userProfile.profile.signzodiac
											]
										}
										title={"Знак зодиака"}
									/>
								}
								{
									<UserProfileInterest
										key={
											"genderVapors" +
											userProfile.profile.gendervapor
										}
										value={
											arr_genderVapor[
												userProfile.profile.gendervapor
											]
										}
										title={"Ищу"}
									/>
								}
								{!(userProfile.profile.children === 0) ? (
									<UserProfileInterest
										key={
											"children" +
											userProfile.profile.children
										}
										value={
											arr_children[
												userProfile.profile.children
											]
										}
										title={"Дети"}
									/>
								) : (
									<></>
								)}
								{!(userProfile.profile.religion === 0) ? (
									<UserProfileInterest
										key={
											"religion" +
											userProfile.profile.religion
										}
										value={
											arr_religion[
												userProfile.profile.religion
											]
										}
										title={"Религия"}
									/>
								) : (
									<></>
								)}
								{!(userProfile.profile.profit === 0) ? (
									<UserProfileInterest
										key={
											"profit" +
											userProfile.profile.profit
										}
										value={
											arr_profit[
												userProfile.profile.profit
											]
										}
										title={"Заработок в месяц"}
									/>
								) : (
									<></>
								)}
								{!(userProfile.profile.smoke === 0) ? (
									<UserProfileInterest
										key={
											"smoke" + userProfile.profile.smoke
										}
										value={
											arr_smoke[userProfile.profile.smoke]
										}
										title={"Курение"}
									/>
								) : (
									<></>
								)}
								{!(userProfile.profile.alcohol === 0) ? (
									<UserProfileInterest
										key={
											"alcohol" +
											userProfile.profile.alcohol
										}
										value={
											arr_alcohol[
												userProfile.profile.alcohol
											]
										}
										title={"Алкоголь"}
									/>
								) : (
									<></>
								)}
							</div>
						</div>

						<div className="flex flex-col justify-center">
							<div className="flex justify-center items-center flex-col select-none text-white max-w-xl p-1 m-1 rounded-lg">
								<span className="flex">Интересы:</span>

								<div className="flex flex-wrap justify-center">
									<UserProfileInterests
										arrayInterests={
											userProfile.profile.interests
										}
										userId={userProfile.profile.userid}
									/>
								</div>
							</div>
						</div>

						<div className="flex flex-col justify-center">
							<div className="flex justify-center items-center flex-col select-none text-white max-w-xl p-1 m-1 rounded-lg">
								<span className="flex">Ценю качества:</span>

								<div className="flex flex-wrap justify-center">
									<div className="flex flex-wrap justify-center">
										{userProfile.profile.ilikecharacter
											.length ? (
											userProfile.profile.ilikecharacter.map(
												(
													quality: number,
													i: number
												) => {
													return (
														<UserProfileInterest
															key={
																arr_iLikeСharacter[
																	quality
																][0] + i
															}
															value={
																arr_iLikeСharacter[
																	quality
																][0]
															}
															title={
																arr_iLikeСharacter[
																	quality
																][1]
															}
														/>
													);
												}
											)
										) : (
											<UserProfileInterest
												key={
													"interest" +
													userProfile.profile.userid
												}
												value={"Отсутствуют"}
												title={""}
											/>
										)}
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col justify-center">
							<div className="flex justify-center items-center flex-col select-none text-white max-w-xl p-1 m-1 rounded-lg">
								<span className="flex">
									Не нравятся качества:
								</span>

								<div className="flex flex-wrap justify-center">
									{userProfile.profile.idontlikecharacter
										.length ? (
										userProfile.profile.idontlikecharacter.map(
											(quality: number, i: number) => {
												return (
													<UserProfileInterest
														key={
															arr_iDontLikeСharacter[
																quality
															][0] + i
														}
														value={
															arr_iDontLikeСharacter[
																quality
															][0]
														}
														title={
															arr_iDontLikeСharacter[
																quality
															][1]
														}
													/>
												);
											}
										)
									) : (
										<UserProfileInterest
											key={
												"interest" +
												userProfile.profile.userid
											}
											value={"Отсутствуют"}
											title={""}
										/>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalDialog />
		</>
	);
}
