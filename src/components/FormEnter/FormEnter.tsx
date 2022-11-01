import * as React from "react";
import { useEffect } from "react";
import { useFormFieldInputString } from "../../hooks/form.hook";
import { ILogin } from "../../interfaces/iquery";
import { jwtAction } from "../../utils/reducers";
import { setStorageJWT } from "../../utils/storage";
import { store } from "../../utils/store";
import { useQueryLogin } from "../../hooks/api.hook";
import { openModalMessage } from "../ModalMessage/ModalMessage";

export function FormEnter() {
	const { data, error, querySendLogin } = useQueryLogin();

	const email = useFormFieldInputString();
	const password = useFormFieldInputString();

	const handlerBtnClick = () => {
		const dataQuery: ILogin = {
			email: email.value,
			password: password.value,
		};

		querySendLogin(dataQuery);
	};

	useEffect(() => {
		if (data) {
			const { jwt } = data;

			openModalMessage(data.message);

			document.cookie = `jwt=${jwt}; max-age=${7 * 24 * 60 * 60}`;

			setTimeout(() => {
				store.dispatch(jwtAction(jwt));
				setStorageJWT(jwt);
				document.location.href = "/vapors";
			}, 1500);
		} else if (error) {
			openModalMessage(error.response.data.message);
		}
	}, [data, error]);

	return (
		<div className="flex trasition-opacity duration-1000 delay-1000 opacity-100 w-full justify-center ">
			<form className="bg-gray-700 shadow-md rounded-3xl px-8 pt-2 pb-2 w-80">
				<label className="block text-white text-2xl font-bold mb-4">
					Вход
				</label>
				<div className="mb-4">
					<div className="mb-4">
						<input
							{...email}
							className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							placeholder="E-mail"
						/>
					</div>
					<div className="mb-4">
						<input
							{...password}
							className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="Пароль"
						/>
					</div>
					<div className="flex items-center justify-center">
						<button
							className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="button"
							onClick={handlerBtnClick}
						>
							Войти
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
