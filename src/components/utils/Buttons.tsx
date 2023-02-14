import { MouseEventHandler, Ref, forwardRef } from "react";
import { scrollToTop } from "../../helpers/pagescroll";

export const Button = forwardRef(
	(
		payload: {
			value: string;
			onClick: MouseEventHandler<HTMLButtonElement>;
		},
		ref: Ref<HTMLButtonElement>
	) => {
		return (
			<div className="flex items-center justify-center m-1">
				<button
					className="flex items-center bg-lime-600 hover:bg-lime-800 select-none cursor-pointer text-white shadow-[0px_0px_2px_2px] shadow-lime-300 m-1 py-2 px-4 h-6 rounded-xl"
					type="button"
					ref={ref}
					onClick={payload.onClick}
				>
					{payload.value}
				</button>
			</div>
		);
	}
);

export function ButtonScrollToTop(payload: {
	scrollTopDiv: React.MutableRefObject<null>;
	scrollToTopBtn: React.RefObject<HTMLDivElement>;
}) {
	return (
		<div
			ref={payload.scrollToTopBtn}
			onClick={() => {
				scrollToTop(payload.scrollTopDiv);
			}}
			className="flex fixed invisible right-0 m-4 bg-slate-900 rotate-[270deg] shadow-[0px_0px_3px_3px] shadow-lime-300 justify-center items-center flex-shrink-0 h-12 w-12 text-3xl rounded-full cursor-pointer"
		>
			&#10148;
		</div>
	);
}

export function ButtonModalClose(payload: {
	onClick: MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<div className="flex justify-center h-6 w-full">
			<div
				onClick={payload.onClick}
				className="flex justify-center absolute right-2 cursor-pointer rounded-full select-none bg-red-400 h-6 w-6"
			>
				X
			</div>
		</div>
	);
}

function ButtonYesCancel(payload: {
	value: string;
	color: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<button
			className={`bg-${payload.color}-500 hover:bg-${payload.color}-700 text-white font-bold m-2 w-20 h-7 rounded`}
			type="button"
			onClick={payload.onClick}
		>
			{payload.value}
		</button>
	);
}

export function ButtonYes(payload: {
	onClick: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<ButtonYesCancel
			value={"Да"}
			color={"green"}
			onClick={payload.onClick}
		/>
	);
}

export function ButtonCancel(payload: {
	onClick: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<ButtonYesCancel
			value={"Отмена"}
			color={"yellow"}
			onClick={payload.onClick}
		/>
	);
}
