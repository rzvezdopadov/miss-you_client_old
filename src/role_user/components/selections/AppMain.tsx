import { Route, Routes } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { storeAll } from "../../../role_all/store/storeAll";
import { useQueryGetProfile } from "../../api/profile/profile.api.hook";
import { useQueryGetStickerpacks } from "../../api/shop/sticker/sticker.api.hook";
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
import {
	useQueryGetDialog,
	useQueryGetDialogs,
} from "../../../role_all/api/dialog/dialog.api.hook";
import { dialogsAction } from "../../../role_all/store/redusers/dialog";
import { dialogsSort } from "../../../role_all/helpers/dialog";
import { lazyloadingusercount } from "../../../config";
import { IDialog } from "../../../role_all/interfaces/iprofiles";

let queryCount = 0;
let dialogs: IDialog[] = [];

export function AppMain() {
	const { jwt, userMyProfile } = storeAll.getState();
	const [dialogsList, setDialogsList] = useState<string[]>([]);
	const { dataGetProfile, errorGetProfile, querySendGetProfile } =
		useQueryGetProfile();
	const { dataStickerpacks, errorStickerpacks, querySendGetStickerpacks } =
		useQueryGetStickerpacks();
	const { dataGetTowns, errorGetTowns, querySendGetTowns } =
		useQueryGetTowns();
	const { dataGetDialogs, errorGetDialogs, querySendGetDialogs } =
		useQueryGetDialogs();
	const { dataGetDialog, errorGetDialog, querySendGetDialog } =
		useQueryGetDialog();

	useEffect(() => {
		return () => {
			storeAll.dispatch(dialogsAction([]));
		};
	}, []);

	useEffect(() => {
		if (jwt) {
			setTimeout(
				() =>
					querySendGetProfile({
						userid: "0",
					}),
				50
			);
			setTimeout(() => querySendGetStickerpacks(), 100);
			setTimeout(() => querySendGetDialogs(), 150);
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

	useEffect(() => {
		if (!dataGetDialogs) return;

		setDialogsList(dataGetDialogs);
	}, [dataGetDialogs]);

	useEffect(() => {
		if (!errorGetDialogs) return;

		modalMessageOpen(errorGetDialogs.response.data.message);
	}, [errorGetDialogs]);

	useEffect(() => {
		if (dialogsList.length === 0) return;

		dialogsList.forEach((userid) =>
			setTimeout(() => {
				queryCount++;
				querySendGetDialog({
					userid,
					startcount: 0,
					amount: lazyloadingusercount,
				});
			}, 50)
		);
	}, [dialogsList]);

	useEffect(() => {
		if (!dataGetDialog) return;

		dialogs.push(dataGetDialog);
		if (dialogs.length === dialogsList.length)
			storeAll.dispatch(dialogsAction(dialogs));
	}, [dataGetDialog]);

	useEffect(() => {
		if (!errorGetDialog) return;

		modalMessageOpen(errorGetDialogs.response.data.message);
	}, [errorGetDialog]);

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
