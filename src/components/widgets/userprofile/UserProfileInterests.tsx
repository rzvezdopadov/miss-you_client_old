import * as React from "react";
import { UserProfileInterest } from "./UserProfileInterest";

export function UserProfileInterests(payload: {
	arrayInterests: Array<string>;
	userId: string;
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
					key={"interest" + payload.userId}
					value={"Отсутствуют"}
					title={""}
				/>
			)}
		</>
	);
}
