import { getAgeFromYear, getStrYearFromAge } from "../../../helpers/age";
import { IProfile } from "../../../interfaces/iprofiles";

export function UserProfileNameAge(payload: { profile: IProfile }) {
	return (
		<div className="flex justify-center select-none text-white p-1 m-1 h-7 rounded-lg">
			{`${payload.profile.name}, ${getAgeFromYear(
				payload.profile.yearofbirth
			)} ${getStrYearFromAge(
				getAgeFromYear(payload.profile.yearofbirth)
			)}`}
		</div>
	);
}
