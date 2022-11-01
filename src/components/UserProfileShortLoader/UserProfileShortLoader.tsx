import * as React from "react";

function UserProfileLoaderChild() {
	return (
		<div className="flex justify-center shadow-[0px_0px_1px_1px] shadow-lime-300 flex-row bg-gray-900 text-neutral-50 rounded-xl m-2 px-2 pt-2 pb-2 max-h-30 h-30 w-80">
			<div className="flex flex-col justify-center">
				<div
					style={{
						backgroundImage: "URL()",
					}}
					className="flex bg-center bg-cover bg-no-repeat justify-center shadow-[0px_0px_2px_2px] shadow-lime-300 text-neutral-50 rounded-3xl m-1 h-32 w-32"
				></div>
				<div className="flex bg-lime-700 justify-center cursor-pointer m-1 rounded-md">
					Посмотреть
				</div>
			</div>

			<div className="flex flex-col text-neutral-50 rounded-3xl w-44">
				<div className="flex justify-center text-neutral-50 rounded-3xl">
					{"Имя"}
				</div>
				<div className="flex justify-center text-neutral-50 rounded-3xl">
					{"Возраст"} , Интересы:
				</div>
				<div className="flex items-center justify-center overflow-hidden flex-wrap text-sm text-neutral-50 h-28">
					'Отсутствуют'
				</div>
			</div>
		</div>
	);
}

export function UserProfileShortLoader() {
	return (
		<>
			<UserProfileLoaderChild />
			<UserProfileLoaderChild />
			<UserProfileLoaderChild />
		</>
	);
}
