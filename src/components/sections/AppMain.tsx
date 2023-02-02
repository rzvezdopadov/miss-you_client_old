import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { store } from "../../store/store";
import { FormEnter } from "../forms/FormLogin";
import { FormRegistration } from "../forms/FormRegistration";
import {
	useQueryGetProfile,
	useQueryGetStickerpacks,
} from "../../hooks/api.hook";
import { IQueryGetProfile } from "../../interfaces/iquery";
import { useEffect } from "react";
import { FormRecoveryPass } from "../forms/FormRecoveryPass";
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

export function AppMain() {
	const { jwt } = store.getState();
	const { data, error, querySendGetProfile } = useQueryGetProfile();
	const { dataStickerpacks, errorStickerpacks, querySendGetStickerpacks } =
		useQueryGetStickerpacks();

	useEffect(() => {
		const data: IQueryGetProfile = {
			userid: "0",
		};

		if (jwt) {
			querySendGetProfile(data);
			querySendGetStickerpacks();
		}
	}, []);

	useEffect(() => {
		if (data) {
			store.dispatch(filtersUserAction(data.filters));
			store.dispatch(userMyProfileAction(data));
		} else if (error) {
			openModalMessage(error.response.data.message);
		}
	}, [data, error]);

	useEffect(() => {
		if (dataStickerpacks) {
			store.dispatch(stickerpacksAction(dataStickerpacks));
		} else if (errorStickerpacks) {
			openModalMessage(errorStickerpacks.response.data.message);
		}
	}, [dataStickerpacks, errorStickerpacks]);

	return (
		<div className="flex flex-grow overflow-hidden my-2 justify-center items-center">
			{
				<Routes>
					<Route path="/agreement" element={<Agreement />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/partners" element={<Partners />} />

					{jwt ? (
						<>
							<Route path="/dialogs" element={<Dialogs />} />
							<Route
								path="/settings"
								element={<SettingProfile />}
							/>
							<Route
								path="/searchvapors"
								element={<SearchVapors />}
							/>
							<Route path="/shop" element={<Shop />} />
							<Route path="/*" element={<Vapors />} />
						</>
					) : (
						<>
							<Route path="/enter" element={<FormEnter />} />
							<Route
								path="/recoverypass"
								element={<FormRecoveryPass />}
							/>
							<Route path="/*" element={<FormRegistration />} />
						</>
					)}
				</Routes>
			}
		</div>
	);
}
function openModalMessage(message: string) {
	throw new Error("Function not implemented.");
}
