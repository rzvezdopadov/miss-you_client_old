import { useEffect } from "react";
import { IProfileShort } from "../../../../role_all/interfaces/iprofiles";
import { UserProfileShortDiscriptionWidget } from "../../../../role_all/components/widgets/userprofileshort/UserProfileShortDiscriptionWidget";
import { DateTimeVisitShort } from "../../../../role_all/components/utils/DateTime";
import { Button } from "../../../../role_all/components/utils/Buttons";
import { PhotoProfileShort } from "../../../../role_all/components/widgets/utils/Photo";
import { modalUserProfileOpen } from "../../modal/ModalUserProfile";
import { modalMessageOpen } from "../../../../role_all/components/modal/ModalMessage";
import { IQueryGetProfile } from "../../../api/profile/iprofile.api";
import { useQueryGetProfile } from "../../../api/profile/profile.api.hook";

export function UserProfileShort(payload: { profile: IProfileShort }) {
	const { dataGetProfile, errorGetProfile, querySendGetProfile } =
		useQueryGetProfile();

	const openProfileHandler = () => {
		const data: IQueryGetProfile = {
			userid: String(payload.profile.userid),
		};

		querySendGetProfile(data);
	};

	useEffect(() => {
		if (dataGetProfile) {
			modalUserProfileOpen(dataGetProfile);
		} else if (errorGetProfile) {
			modalMessageOpen(errorGetProfile.response.data.message);
		}
	}, [dataGetProfile, errorGetProfile]);

	return (
		<div className="flex justify-center shadow-[0px_0px_1px_1px] shadow-lime-300 flex-row bg-gray-900 text-neutral-50 rounded-xl m-2 px-2 pt-2 pb-2 max-h-52 w-80">
			<div className="flex flex-col justify-center">
				<PhotoProfileShort src={payload.profile.photolink} />
				<Button value={"Посмотреть"} onClick={openProfileHandler} />

				<DateTimeVisitShort profile={payload.profile} />
			</div>

			<UserProfileShortDiscriptionWidget profile={payload.profile} />
		</div>
	);
}
