import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { store } from "../../../utils/store";
import { AboutUs } from "../../Pages/AboutUs/AboutUs";
import { Agreement } from "../../Pages/Agreement/Agreement";
import { FormEnter } from "../../Auth/FormEnter/FormEnter";
import { FormRegistration } from "../../Auth/FormRegistrarion/FormRegistration";
import { SettingProfile } from "../../Pages/SettingProfile/SettingProfile";
import { Partners } from "../../Pages/Partners/Partners";
import { Vapors } from "../../Pages/Vapors/Vapors";
import { SearchVapors } from "../../Pages/SearchVapors/SearchVapors";
import { Dialogs } from "../../Pages/Dialogs/Dialogs";
import { useQueryGetProfile } from "../../../hooks/api.hook";
import { IQueryGetProfile } from "../../../interfaces/iquery";
import { useEffect } from "react";
import {
	filtersUserAction,
	userMyProfileAction,
} from "../../../utils/reducers";
import { openModalMessage } from "../../Modal/ModalMessage/ModalMessage";
import { Socket } from "../../Utils/Socket/Socket";

export function AppMain() {
	const { jwt } = store.getState();
	const { data, error, querySendGetProfile } = useQueryGetProfile();

	useEffect(() => {
		const data: IQueryGetProfile = {
			id: 0,
		};

		if (jwt) {
			querySendGetProfile(data);
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
							<Route path="/*" element={<Vapors />} />
						</>
					) : (
						<>
							<Route path="/enter" element={<FormEnter />} />
							<Route path="/*" element={<FormRegistration />} />
						</>
					)}
				</Routes>
			}
			{jwt ? <Socket /> : <></>}
		</div>
	);
}
