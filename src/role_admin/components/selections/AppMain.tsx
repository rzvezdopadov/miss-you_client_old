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
import { store } from "../../store/store";
import { Dialogs } from "../pages/Dialogs";
import { SettingProfile } from "../../../role_all/components/pages/SettingProfile";
import { Logout } from "../../../role_all/components/pages/Logout";
import { useQueryGetTowns } from "../../../role_all/api/towns/towns.api.hook";
import { townsAction } from "../../../role_all/store/redusers/towns";
import { Statistics } from "../pages/Statistics";
import { Profiles } from "../pages/Profiles";
import { Login } from "../../../role_all/components/pages/Login";
import { RecoveryPass } from "../../../role_all/components/pages/RecoveryPass";
import { Registration } from "../../../role_all/components/pages/Registration";

export function AppMain() {
	const { jwt, userMyProfile, stickerpacks } = storeAll.getState();
	const { userFilters } = store.getState();
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
		}

		querySendGetTowns();
	}, [jwt]);

	useEffect(() => {
		if (
			userMyProfile &&
			userMyProfile.userid &&
			userMyProfile.stickerpacks.length !== stickerpacks.length
		) {
			const newStickerpacks = stickerpacks.map(
				(stickerpack) => stickerpack.idstickerpack
			);
			const newUserMyProfile = { ...userMyProfile };

			newUserMyProfile.stickerpacks = newStickerpacks;
			storeAll.dispatch(userMyProfileAction(newUserMyProfile));
		}
	}, [userMyProfile, stickerpacks]);

	useEffect(() => {
		if (!dataGetProfile) return;

		storeAll.dispatch(userMyProfileAction(dataGetProfile));
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

		const newUserFilters = { ...userFilters };
		newUserFilters.location = dataGetTowns[0];
		store.dispatch(filtersUserAction(newUserFilters));
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
							<Route path="/dialogs" element={<Dialogs />} />
							<Route
								path="/settings"
								element={<SettingProfile />}
							/>
							<Route path="/logout" element={<Logout />} />
							<Route
								path="/userprofiles"
								element={<Profiles />}
							/>
							<Route
								path="/statistics"
								element={<Statistics />}
							/>
							<Route path="/*" element={<Statistics />} />
						</>
					) : (
						<></>
					)
				) : (
					<>
						<Route path="/login" element={<Login />} />
						<Route
							path="/recoverypass"
							element={<RecoveryPass />}
						/>
						<Route
							path="/registration"
							element={<Registration />}
						/>
						<Route path="/*" element={<Registration />} />
					</>
				)}
			</Routes>
		</MainWrapper>
	);
}
