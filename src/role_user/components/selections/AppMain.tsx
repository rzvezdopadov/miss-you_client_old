import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { storeAll } from "../../../role_all/store/storeAll";
import { useQueryGetProfile } from "../../api/profile/profile.api.hook";
import { useQueryGetStickerpacks } from "../../api/shop/sticker/sticker.api.hook";
import { IQueryGetProfile } from "../../api/profile/iprofile.api";
import { filtersUserAction } from "../../store/redusers/filters";
import { userMyProfileAction } from "../../../role_all/store/redusers/profile";
import { modalMessageOpen } from "../../../role_all/components/modal/ModalMessage";
import { stickerpacksAction } from "../../../role_all/store/redusers/stickerpacks";
import { MainWrapper } from "../../../role_all/components/wrappers/MainWrapper";
import { store } from "../../store/store";
import { Dialogs } from "../pages/Dialogs";
import { SettingProfile } from "../../../role_all/components/pages/SettingProfile";
import { Shop } from "../pages/Shop";
import { Logout } from "../../../role_all/components/pages/Logout";
import { Vapors } from "../pages/Vapors";
import { FavoriteUsers } from "../pages/FavoriteUsers";
import { Users } from "../pages/Users";
import { Login } from "../../../role_all/components/pages/Login";
import { RecoveryPass } from "../../../role_all/components/pages/RecoveryPass";
import { Registration } from "../../../role_all/components/pages/Registration";
import { Agreement } from "../../../role_all/components/pages/Agreement";
import { AboutUs } from "../../../role_all/components/pages/AboutUs";
import { Partners } from "../../../role_all/components/pages/Partners";
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
		}

		querySendGetTowns();
	}, [jwt]);

	useEffect(() => {
		if (!dataGetProfile) return;

		store.dispatch(filtersUserAction(dataGetProfile.filters));
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
	}, [dataGetTowns]);

	useEffect(() => {
		if (!errorGetTowns) return;

		modalMessageOpen(errorGetTowns.response.data.message);
	}, [errorGetTowns]);

	return (
		<MainWrapper>
			<Routes>
				<Route path="/agreement" element={<Agreement />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/partners" element={<Partners />} />
				{jwt ? (
					userMyProfile?.userid !== "" ? (
						<>
							<Route path="/dialogs" element={<Dialogs />} />
							<Route
								path="/settings"
								element={<SettingProfile />}
							/>
							<Route path="/shop" element={<Shop />} />
							<Route path="/logout" element={<Logout />} />
							<Route path="/vapors" element={<Vapors />} />
							<Route
								path="/favoriteusers"
								element={<FavoriteUsers />}
							/>
							<Route path="/users" element={<Users />} />
							<Route path="/*" element={<Vapors />} />
						</>
					) : (
						<Route path="/*" element={<></>} />
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
