import * as React from "react";
import { useEffect, useRef } from "react";
import { useQueryGetDialog } from "../../hooks/api.hook";
import { IProfile } from "../../interfaces/iprofiles";
import { IQueryDialog } from "../../interfaces/iquery";
import { store } from "../../store/store";
import { getAgeFromYear, getStrYearFromAge } from "../../helpers/age";
import { Rating } from "../utils/Labels";
import { Button, ButtonModalClose } from "../utils/Buttons";
import {
	initialStateUserProfile,
	userProfileAction,
} from "../../store/redusers/profile";
import { dialogAction, dialogUserIdAction } from "../../store/redusers/dialog";
import { ModalDialog, modalDialogClose, modalDialogOpen } from "./ModalDialog";
import { modalMessageOpen } from "./ModalMessage";
import {
	data_alcohol,
	data_children,
	data_genderVapor,
	data_iDontLikeСharacter,
	data_iLikeСharacter,
	data_profit,
	data_religion,
	data_signZodiac,
	data_smoke,
	data_weight,
} from "../../data/profiles";
import { DateTimeVisit } from "../utils/DateTime";
import { UserProfileSlider } from "../widgets/userprofile/UserProfileSlider";
import { UserProfileInterest } from "../widgets/userprofile/UserProfileInterest";
import { UserProfileInterests } from "../widgets/userprofile/UserProfileInterests";

export function userProfileOpen(profile: IProfile) {
	store.dispatch(userProfileAction(true, profile));
}

function userProfileClose() {
	store.dispatch(userProfileAction(false, initialStateUserProfile.profile));
}

export function ModalUserProfile() {
	const { data, error, querySendGetDialog } = useQueryGetDialog();
	const { userProfile } = store.getState();
	const refUserProfile = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (data) {
			modalDialogOpen();
			store.dispatch(dialogAction(data));
			store.dispatch(dialogUserIdAction(userProfile.profile.userid));
		} else if (error) {
			modalMessageOpen(error.response.data.message);
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
		modalDialogClose();
		userProfileClose();
	};

	return (
		<>
			<div
				ref={refUserProfile}
				className="flex flex-col invisible fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl overflow-y-scroll lg:overflow-auto top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-20 pb-2 h-full lg:h-2/3 lg:max-w-5xl"
			>
				<ButtonModalClose onClick={closeUserProfileHandler} />

				<div className="flex flex-wrap mt-4 flex-col lg:flex-row justify-center items-center h-fit w-full">
					<div className="flex flex-col">
						<UserProfileSlider />
						<Rating value={userProfile.profile.rating} />
						<Button
							value={"Написать сообщение"}
							onClick={openDialogModalHandler}
						/>
					</div>

					<div className="flex items-center flex-col">
						<div className="flex justify-center select-none text-white p-1 m-1 h-7 rounded-lg">
							{`${userProfile.profile.name}, ${getAgeFromYear(
								userProfile.profile.yearofbirth
							)} ${getStrYearFromAge(
								getAgeFromYear(userProfile.profile.yearofbirth)
							)}`}
						</div>

						<DateTimeVisit profile={userProfile.profile} />

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
											data_weight[
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
											data_signZodiac[
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
											data_genderVapor[
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
											data_children[
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
											data_religion[
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
											data_profit[
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
											data_smoke[
												userProfile.profile.smoke
											]
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
											data_alcohol[
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
																data_iLikeСharacter[
																	quality
																][0] + i
															}
															value={
																data_iLikeСharacter[
																	quality
																][0]
															}
															title={
																data_iLikeСharacter[
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
															data_iDontLikeСharacter[
																quality
															][0] + i
														}
														value={
															data_iDontLikeСharacter[
																quality
															][0]
														}
														title={
															data_iDontLikeСharacter[
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
