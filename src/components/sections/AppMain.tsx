import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { store } from "../../store/store";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";
import { useEffect } from "react";
import { RecoveryPass } from "../pages/RecoveryPass";
import { filtersUserAction } from "../../store/redusers/filterusers";
import { userMyProfileAction } from "../../store/redusers/profile";
import { stickerpacksAction } from "../../store/redusers/dialog";
import { Agreement } from "../pages/Agreement";
import { AboutUs } from "../pages/AboutUs";
import { Partners } from "../pages/Partners";
import { Dialogs } from "../pages/Dialogs";
import { SettingProfile } from "../pages/SettingProfile";
import { SearchVapors } from "../pages/SearchVapors";
import { Shop } from "../pages/Shop";
import { Vapors } from "../pages/Vapors";
import { Logout } from "../pages/Logout";
import { ACCTYPE } from "../../interfaces/iprofiles";
import { AdminStatistics } from "../pages/AdminStatistics";
import { AdminProfiles } from "../pages/AdminProfiles";
import { modalMessageOpen } from "../modal/ModalMessage";
import { IQueryGetProfile } from "../../api/profile/iprofile.api";
import { useQueryGetProfile } from "../../api/profile/profile.api.hook";
import { useQueryGetStickerpacks } from "../../api/shop/sticker/sticker.api.hook";

export function AppMain() {
	const { jwt, userMyProfile } = store.getState();
	const { dataGetProfile, errorGetProfile, querySendGetProfile } =
		useQueryGetProfile();
	const { dataStickerpacks, errorStickerpacks, querySendGetStickerpacks } =
		useQueryGetStickerpacks();

	useEffect(() => {
		if (jwt) {
			const data: IQueryGetProfile = {
				userid: "0",
			};

			querySendGetProfile(data);
			querySendGetStickerpacks();
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

		store.dispatch(stickerpacksAction(dataStickerpacks));
	}, [dataStickerpacks]);

	useEffect(() => {
		if (!errorStickerpacks) return;

		modalMessageOpen(errorStickerpacks.response.data.message);
	}, [errorStickerpacks]);

	return (
		<div className="flex flex-grow fixed top-20 bottom-4 shadow-[0px_0px_5px_5px] shadow-lime-300 rounded-xl overflow-hidden justify-center items-center">
			{
				<Routes>
					<Route path="/agreement" element={<Agreement />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/partners" element={<Partners />} />

					{jwt ? (
						userMyProfile.userid !== "" ? (
							<>
								<Route path="/dialogs" element={<Dialogs />} />
								<Route
									path="/settings"
									element={<SettingProfile />}
								/>
								<Route path="/shop" element={<Shop />} />
								<Route path="/logout" element={<Logout />} />

								{userMyProfile.acctype === ACCTYPE.admin ? (
									<>
										<Route
											path="/userprofiles"
											element={<AdminProfiles />}
										/>

										<Route
											path="/statistics"
											element={<AdminStatistics />}
										/>
										<Route
											path="/*"
											element={<AdminStatistics />}
										/>
									</>
								) : (
									<>
										<Route
											path="/searchvapors"
											element={<SearchVapors />}
										/>

										<Route
											path="/vapors"
											element={<Vapors />}
										/>
										<Route path="/*" element={<Vapors />} />
									</>
								)}
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
			}
		</div>
	);
}
