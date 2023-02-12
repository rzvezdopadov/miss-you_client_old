import * as React from "react";
import { UserProfileInterest } from "./UserProfileInterest";
import { IProfile } from "../../../interfaces/iprofiles";

export function UserProfileInterests(payload: { profile: IProfile }) {
	return (
		<div className="flex flex-col justify-center">
			<div className="flex justify-center items-center flex-col select-none text-white max-w-xl p-1 m-1 rounded-lg">
				<span className="flex">Интересы:</span>

				<div className="flex flex-wrap justify-center">
					{payload.profile.interests.length ? (
						payload.profile.interests.map((interest, i) => {
							return (
								<UserProfileInterest
									key={interest + i}
									value={interest}
									title={interest}
								/>
							);
						})
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
	);
}
