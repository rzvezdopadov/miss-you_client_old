import {
	data_alcohol,
	data_children,
	data_education,
	data_fieldOfActivity,
	data_genderVapor,
	data_maritalStatus,
	data_profit,
	data_religion,
	data_signZodiac,
	data_smoke,
	data_weight,
} from "../../../data/profiles";
import { IProfile } from "../../../interfaces/iprofiles";
import { UserProfileInterest } from "./UserProfileInterest";

export function UserProfilePersonal(payload: { profile: IProfile }) {
	return (
		<div className="flex justify-center items-center flex-col select-none text-white max-w-xl p-1 m-1 rounded-lg">
			<span className="flex">Личное:</span>
			<div className="flex flex-wrap justify-center">
				{
					<UserProfileInterest
						key={"location" + payload.profile.location}
						value={payload.profile.location}
						title={"Локация"}
					/>
				}
				{
					<UserProfileInterest
						key={"growth" + payload.profile.growth}
						value={payload.profile.growth + " см"}
						title={"Рост"}
					/>
				}
				{!(payload.profile.weight === 0) ? (
					<UserProfileInterest
						key={"weight" + payload.profile.weight}
						value={data_weight[payload.profile.weight]}
						title={"Телосложение"}
					/>
				) : (
					<></>
				)}

				{
					<UserProfileInterest
						key={"signZodiac" + payload.profile.signzodiac}
						value={data_signZodiac[payload.profile.signzodiac]}
						title={"Знак зодиака"}
					/>
				}

				{!(payload.profile.education === 0) ? (
					<UserProfileInterest
						key={"education" + payload.profile.education}
						value={data_education[payload.profile.education]}
						title={"Образование"}
					/>
				) : (
					<></>
				)}

				{!(payload.profile.fieldofactivity === 0) ? (
					<UserProfileInterest
						key={
							"fieldofactivity" + payload.profile.fieldofactivity
						}
						value={
							data_fieldOfActivity[
								payload.profile.fieldofactivity
							]
						}
						title={"Сфера деятельности"}
					/>
				) : (
					<></>
				)}

				{!(payload.profile.maritalstatus === 0) ? (
					<UserProfileInterest
						key={"maritalstatus" + payload.profile.maritalstatus}
						value={
							data_maritalStatus[payload.profile.maritalstatus]
						}
						title={"Семейное положение"}
					/>
				) : (
					<></>
				)}

				{
					<UserProfileInterest
						key={"genderVapors" + payload.profile.gendervapor}
						value={data_genderVapor[payload.profile.gendervapor]}
						title={"Ищу"}
					/>
				}
				{!(payload.profile.children === 0) ? (
					<UserProfileInterest
						key={"children" + payload.profile.children}
						value={data_children[payload.profile.children]}
						title={"Дети"}
					/>
				) : (
					<></>
				)}
				{!(payload.profile.religion === 0) ? (
					<UserProfileInterest
						key={"religion" + payload.profile.religion}
						value={data_religion[payload.profile.religion]}
						title={"Религия"}
					/>
				) : (
					<></>
				)}
				{!(payload.profile.profit === 0) ? (
					<UserProfileInterest
						key={"profit" + payload.profile.profit}
						value={data_profit[payload.profile.profit]}
						title={"Заработок в месяц"}
					/>
				) : (
					<></>
				)}
				{!(payload.profile.smoke === 0) ? (
					<UserProfileInterest
						key={"smoke" + payload.profile.smoke}
						value={data_smoke[payload.profile.smoke]}
						title={"Курение"}
					/>
				) : (
					<></>
				)}
				{!(payload.profile.alcohol === 0) ? (
					<UserProfileInterest
						key={"alcohol" + payload.profile.alcohol}
						value={data_alcohol[payload.profile.alcohol]}
						title={"Алкоголь"}
					/>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
