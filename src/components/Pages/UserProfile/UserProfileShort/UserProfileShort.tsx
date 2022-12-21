import * as React from "react";
import { useEffect } from "react";
import { useQueryGetProfile } from "../../../../hooks/api.hook";
import { IProfileShort } from "../../../../interfaces/iprofiles";
import { IQueryGetProfile } from "../../../../interfaces/iquery";
import { openModalMessage } from "../../../Modal/ModalMessage/ModalMessage";
import { openUserProfile } from "../../../Modal/ModalUserProfile/ModalUserProfile";
import { UserProfileInterest } from "../UserProfileInterest/UserProfileInterest";
import { VisitDateTimeShort } from "../../../Utils/VisitDateTime/VisitDateTime";
import { getStrYearFromAge } from "../../../../utils/age";

export function UserProfileShort(params: {
	key: string;
	profile: IProfileShort;
}) {
	const { data, error, querySendGetProfile } = useQueryGetProfile();

	const { profile } = params;

	const openProfileHandler = () => {
		const data: IQueryGetProfile = {
			id: profile.id,
		};

		querySendGetProfile(data);
	};

	useEffect(() => {
		if (data) {
			openUserProfile(data);
		} else if (error) {
			openModalMessage(error.response.data.message);
		}
	}, [data, error]);

	return (
		<div className="flex justify-center shadow-[0px_0px_1px_1px] shadow-lime-300 flex-row bg-gray-900 text-neutral-50 rounded-xl m-2 px-2 pt-2 pb-2 max-h-52 w-80">
			<div className="flex flex-col justify-center">
				<div
					style={{
						backgroundImage:
							"URL(" + profile.photolink[profile.photomain] + ")",
					}}
					className="flex bg-center bg-cover bg-no-repeat justify-center shadow-[0px_0px_2px_2px] shadow-lime-300 text-neutral-50 rounded-3xl m-1 h-32 w-32"
				></div>
				<div
					onClick={openProfileHandler}
					className="flex select-none bg-lime-700 justify-center cursor-pointer m-1 rounded-md"
				>
					Посмотреть
				</div>

				<VisitDateTimeShort profile={profile} />
			</div>

			<div className="flex flex-col text-neutral-50 rounded-3xl w-44">
				<div className="flex justify-center text-neutral-50 rounded-3xl">
					{profile.name}
				</div>

				<div className="flex justify-center text-neutral-50 rounded-3xl">
					{`${profile.age} ${getStrYearFromAge(profile.age)}`},
					Интересы:
				</div>
				<div className="flex items-center justify-center overflow-hidden flex-wrap text-sm text-neutral-50 h-28">
					{profile.interests.length ? (
						profile.interests.map((interest, i) => {
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
							key={"interest" + profile.id}
							value={"Отсутствуют"}
							title={""}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
