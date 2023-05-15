import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { storeAll } from "../../../role_all/store/storeAll";
import { useQueryGetProfile } from "../../api/profile/profile.api.hook";
import { useQueryGetStickerpacks } from "../../../role_user/api/shop/sticker/sticker.api.hook";
import { IQueryGetProfile } from "../../api/profile/iprofile.api";
import { filtersUserAction } from "../../../role_user/store/redusers/filters";
import { userMyProfileAction } from "../../../role_all/store/redusers/profile";
import { modalMessageOpen } from "../../../role_all/components/modal/ModalMessage";
import { stickerpacksAction } from "../../../role_all/store/redusers/stickerpacks";
import { MainWrapper } from "../../../role_all/components/wrappers/MainWrapper";
import { RoutesAll } from "../../../role_all/routes/RoutesAll";
import { RoutesAllAuth } from "../../../role_all/routes/RoutesAllAuth";
import { RoutesNoAuth } from "../../../role_all/routes/RoutesNoAuth";
import { RoutesLocal } from "../../routes/RoutesLocal";
import { store } from "../../store/store";
import { Dialogs } from "../pages/Dialogs";
import { SettingProfile } from "../../../role_all/components/pages/SettingProfile";
import { Logout } from "../../../role_all/components/pages/Logout";
import { useQueryGetTowns } from "../../../role_all/api/towns/towns.api.hook";
import { townsAction } from "../../../role_all/store/redusers/towns";

export function AppMain() {
	const { jwt, userMyProfile } = storeAll.getState();
	const { dataGetProfile, errorGetProfile, querySendGetProfile } =
		useQueryGetProfile();
	const { dataStickerpacks, errorStickerpacks, querySendGetStickerpacks } =
		useQueryGetStickerpacks();
	const { dataGetTowns, errorGetTowns, querySendGetTowns } =
		useQueryGetTowns();

	useEffect(() => {
		if (jwt) {
			const data: IQueryGetProfile = {
				userid: "0",
			};

			querySendGetProfile(data);
			querySendGetStickerpacks();
			useQueryGetTowns();
		}
	}, [jwt]);

	useEffect(() => {
		if (!dataGetProfile) return;

		store.dispatch(filtersUserAction(dataGetProfile.filters));
		store.dispatch(userMyProfileAction(dataGetProfile));
	}, [dataGetProfile]);

	useEffect(() => {
		if (!errorGetProfile) return;

		modalMessageOpen(errorGetProfile.response.data.message);
	}, [errorGetProfile]);

	useEffect(() => {
		if (!dataStickerpacks) return;

		storeAll.dispatch(stickerpacksAction(dataStickerpacks));
	}, [dataStickerpacks]);

	useEffect(() => {
		if (!errorStickerpacks) return;

		modalMessageOpen(errorStickerpacks.response.data.message);
	}, [errorStickerpacks]);

	useEffect(() => {
		if (!dataGetTowns) return;

		storeAll.dispatch(townsAction(dataGetTowns));
	}, [dataGetTowns]);

	useEffect(() => {
		if (!errorGetTowns) return;

		modalMessageOpen(errorGetTowns.response.data.message);
	}, [errorGetTowns]);

	return (
		<MainWrapper>
			<Routes>
				<Route path="/dialogs" element={<Dialogs />} />
				<Route path="/settings" element={<SettingProfile />} />
				<Route path="/logout" element={<Logout />} />
				{jwt ? (
					userMyProfile.userid !== "" ? (
						<>
							<RoutesAllAuth />
							<RoutesLocal />
						</>
					) : (
						<></>
					)
				) : (
					<RoutesNoAuth />
				)}
			</Routes>
		</MainWrapper>
	);
}
