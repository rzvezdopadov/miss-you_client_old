import { IProfileShort } from "../../../interfaces/iprofiles";
import { UserProfileInterest } from "../userprofile/UserProfileInterest";
import { getAgeFromYear, getStrYearFromAge } from "../../../helpers/age";

export function UserProfileShortDiscriptionWidget(payload: {
	profile: IProfileShort;
}) {
	return (
		<div className="flex flex-col text-neutral-50 rounded-3xl w-44">
			<div className="flex justify-center text-neutral-50 rounded-3xl select-none">
				{payload.profile.name}
			</div>

			<div className="flex justify-center text-neutral-50 rounded-3xl select-none">
				{`${getAgeFromYear(
					payload.profile.yearofbirth
				)} ${getStrYearFromAge(
					getAgeFromYear(payload.profile.yearofbirth)
				)}`}
				, Интересы:
			</div>
			<div className="flex items-center justify-center overflow-y-scroll flex-wrap text-sm text-neutral-50">
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
	);
}
