import React from "react";
import { invisibleOnScrollToTop } from "../../helpers/pagescroll";
import { ButtonScrollToTop } from "../utils/Buttons";

export function MainScrollWrapper(payload: {
	children: React.ReactNode;
	clbkScrollBottom?: any;
	loader?: boolean;
	shadow?: boolean;
	color?: boolean;
	center?: boolean;
}) {
	const scrollTopDiv = React.useRef(null);
	const scrollToTopBtn = React.useRef(null);

	const onScrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
		const scrollBottom =
			e.currentTarget.scrollTop + e.currentTarget.offsetHeight >
			e.currentTarget.scrollHeight - 1;

		if (payload.clbkScrollBottom && !payload.loader && scrollBottom) {
			payload.clbkScrollBottom();
		}
		invisibleOnScrollToTop(e, scrollToTopBtn);
	};

	return (
		<div
			className={`flex flex-col fixed items-center text-neutral-50 rounded-xl overflow-y-scroll top-20 bottom-4 left-0 right-0 m-auto px-2 pt-2 pb-2 z-0${
				payload.shadow
					? " shadow-[0px_0px_2px_2px] shadow-lime-300"
					: ""
			}${payload.color ? " bg-gray-700" : ""}${
				payload.center ? " justify-center" : " justify-start"
			}`}
			onScroll={onScrollHandler}
			ref={scrollTopDiv}
		>
			<ButtonScrollToTop
				scrollTopDiv={scrollTopDiv}
				scrollToTopBtn={scrollToTopBtn}
			/>
			{payload.children}
		</div>
	);
}
