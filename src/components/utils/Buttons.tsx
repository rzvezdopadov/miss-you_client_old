import { Ref, forwardRef } from "react";
import { scrollToTop } from "../../helpers/pagescroll";

export const Button = forwardRef(
	(payload: { value: string; onClick: any }, ref: Ref<HTMLButtonElement>) => {
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
