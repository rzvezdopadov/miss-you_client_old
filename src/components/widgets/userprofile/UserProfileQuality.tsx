import {
	data_iDontLikeСharacter,
	data_iLikeСharacter,
} from "../../../data/profiles";
import { IProfile } from "../../../interfaces/iprofiles";
import { UserProfileInterest } from "./UserProfileInterest";

export function UserProfileQuality(payload: { profile: IProfile }) {
	return (
		<>
			<div className="flex flex-col justify-center">
				<div className="flex justify-center items-center flex-col select-none text-white max-w-xl p-1 m-1 rounded-lg">
					<span className="flex">Ценю качества:</span>

					<div className="flex flex-wrap justify-center">
						<div className="flex flex-wrap justify-center">
							{payload.profile.ilikecharacter.length ? (
								payload.profile.ilikecharacter.map(
									(quality: number, i: number) => {
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
									key={"interest" + payload.profile.userid}
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
					<span className="flex">Не нравятся качества:</span>

					<div className="flex flex-wrap justify-center">
						{payload.profile.idontlikecharacter.length ? (
							payload.profile.idontlikecharacter.map(
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
								key={"interest" + payload.profile.userid}
								value={"Отсутствуют"}
								title={""}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
