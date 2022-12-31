import * as React from "react";
import { useEffect } from "react";
import { useFormFieldInputString } from "../../../hooks/form.hook";
import { ILogin } from "../../../interfaces/iquery";
import { jwtAction } from "../../../utils/reducers";
import { store } from "../../../utils/store";
import { useQueryLogin } from "../../../hooks/api.hook";
import { openModalMessage } from "../../Modal/ModalMessage/ModalMessage";

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
				document.location.href = "/vapors";
			}, 1500);
		} else if (error) {
			openModalMessage(error.response.data.message);
		}
	}, [data, error]);

	return (
		<div className="flex w-full justify-center min-w-xs">
			<div className="block bg-gray-700 shadow-md rounded-3xl px-2 pt-2 pb-2 w-80">
				<label className="block text-white text-2xl font-bold mb-4">
					Вход
				</label>
				<div className="flex flex-col my-1">
					<input
						{...email}
						className="flex text-center rounded-xl shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-300 leading-tight text-black m-1 mx-3 py-2 px-3"
						id="email"
						type="email"
						placeholder="E-mail"
					/>
				</div>
				<div className="flex flex-col my-1">
					<input
						{...password}
						className="flex text-center rounded-xl shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-300 leading-tight text-black m-1 mx-3 py-2 px-3"
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
		</div>
	);
}
