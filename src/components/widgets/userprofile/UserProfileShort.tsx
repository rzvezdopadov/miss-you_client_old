import * as React from "react";
import { useEffect } from "react";
import { ACCTYPE, IProfileShort } from "../../../interfaces/iprofiles";
import { useQueryGetProfile } from "../../../hooks/api.hook";
import { IQueryGetProfile } from "../../../interfaces/iquery";
import { userProfileOpen } from "../../modal/ModalUserProfile";
import { modalMessageOpen } from "../../modal/ModalMessage";
import { Button } from "../../utils/Buttons";
import { DateTimeVisitShort } from "../../utils/DateTime";
import { getAgeFromYear, getStrYearFromAge } from "../../../helpers/age";
import { UserProfileInterest } from "./UserProfileInterest";
import { store } from "../../../store/store";

export function UserProfileShort(params: {
	key: string;
	profile: IProfileShort;
}) {
	const { data, error, querySendGetProfile } = useQueryGetProfile();
	const { userMyProfile } = store.getState();
	const { profile } = params;

	const openProfileHandler = () => {
		const data: IQueryGetProfile = {
			userid: String(profile.userid),
		};

		querySendGetProfile(data);
	};

	useEffect(() => {
		if (data) {
			userProfileOpen(data);
		} else if (error) {
			modalMessageOpen(error.response.data.message);
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
				<Button value={"Посмотреть"} onClick={openProfileHandler} />
				{userMyProfile.userid === ACCTYPE.admin ? (
					<UserProfileInterest
						value={`"${profile.userid}"`}
						title={`"${profile.userid}"`}
					/>
				) : (
					<></>
				)}
				<DateTimeVisitShort profile={profile} />
			</div>

			<div className="flex flex-col text-neutral-50 rounded-3xl w-44">
				<div className="flex justify-center text-neutral-50 rounded-3xl select-none">
					{profile.name}
				</div>

				<div className="flex justify-center text-neutral-50 rounded-3xl select-none">
					{`${getAgeFromYear(
						profile.yearofbirth
					)} ${getStrYearFromAge(
						getAgeFromYear(profile.yearofbirth)
					)}`}
					, Интересы:
				</div>
				<div className="flex items-center justify-center overflow-y-scroll flex-wrap text-sm text-neutral-50">
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
							key={"interest" + profile.userid}
							value={"Отсутствуют"}
							title={""}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
