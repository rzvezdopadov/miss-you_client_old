import { useEffect } from "react";
import { IProfileShort } from "../../../../role_all/interfaces/iprofiles";
import { useQueryGetProfile } from "../../../api/profile/profile.api.hook";
import { IQueryGetProfile } from "../../../api/profile/iprofile.api";
import { modalUserProfileOpen } from "../../modal/ModalUserProfile";
import { modalMessageOpen } from "../../../../role_all/components/modal/ModalMessage";
import { PhotoProfileShort } from "../../../../role_all/components/widgets/utils/Photo";
import { UserProfileInterest } from "../../../../role_all/components/widgets/userprofile/UserProfileInterest";
import { Button } from "../../../../role_all/components/utils/Buttons";
import { DateTimeVisitShort } from "../../../../role_all/components/utils/DateTime";
import { UserProfileShortDiscriptionWidget } from "../../../../role_all/components/widgets/userprofileshort/UserProfileShortDiscriptionWidget";
import { storeAll } from "../../../../role_all/store/storeAll";

export function UserProfileShort(payload: { profile: IProfileShort }) {
	const { dataGetProfile, errorGetProfile, querySendGetProfile } =
		useQueryGetProfile();
	const { userMyProfile } = storeAll.getState();

	const openProfileHandler = () => {
		const data: IQueryGetProfile = {
			userid: String(payload.profile.userid),
		};

		querySendGetProfile(data);
	};

	useEffect(() => {
		if (!dataGetProfile) return;

		modalUserProfileOpen(dataGetProfile);
	}, [dataGetProfile]);

	useEffect(() => {
		if (!errorGetProfile) return;

		modalMessageOpen(errorGetProfile.response.data.message);
	}, [errorGetProfile]);

	return (
		<div className="flex justify-center shadow-[0px_0px_1px_1px] shadow-lime-300 flex-row bg-gray-900 text-neutral-50 rounded-xl m-2 px-2 pt-2 pb-2 max-h-52 w-80">
			<div className="flex flex-col justify-center">
				<PhotoProfileShort src={payload.profile.photolink} />
				<Button value={"Посмотреть"} onClick={openProfileHandler} />
				<UserProfileInterest
					value={`"${payload.profile.userid}"`}
					title={`"${payload.profile.userid}"`}
				/>
				<DateTimeVisitShort profile={payload.profile} />
			</div>

			<UserProfileShortDiscriptionWidget profile={payload.profile} />
		</div>
	);
}
