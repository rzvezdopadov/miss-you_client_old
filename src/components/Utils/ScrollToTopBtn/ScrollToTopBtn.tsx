import * as React from "react";
import { scrollToTop } from "../../../utils/pagescroll";

export function ScrollToTopBtn(payload: {
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
			{/* <div className="flex justify-center items-center absolute m-3 text-gray-900 text-2xl cursor-pointer">
				&#10148;
			</div> */}
		</div>
	);
}
