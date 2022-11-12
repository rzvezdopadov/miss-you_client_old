import * as React from "react";
import { UserProfileInterest } from "../UserProfileInterest/UserProfileInterest";

export function UserProfileInterests(payload: {
	arrayInterests: Array<string>;
	idUser: number;
}) {
	return (
		<>
			{payload.arrayInterests.length ? (
				payload.arrayInterests.map((interest, i) => {
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
					key={"interest" + payload.idUser}
					value={"Отсутствуют"}
					title={""}
				/>
			)}
		</>
	);
}
