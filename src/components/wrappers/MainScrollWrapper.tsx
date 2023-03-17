import { useRef } from "react";
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
	const scrollTopDiv = useRef(null);
	const scrollToTopBtn = useRef(null);

	const onScrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
		const scrollBottom =
			e.currentTarget.scrollTop + e.currentTarget.offsetHeight >
			e.currentTarget.scrollHeight - 1;

		if (payload.clbkScrollBottom && !payload.loader && scrollBottom) {
			payload.clbkScrollBottom();
		}
		invisibleOnScrollToTop(e, scrollToTopBtn);
	};

	let classWrapper =
		"flex flex-col fixed items-center text-neutral-50 rounded-xl overflow-y-scroll top-20 bottom-4 left-0 right-0 m-auto px-2 pt-2 pb-2 z-0";
	if (payload.shadow === true)
		classWrapper += " shadow-[0px_0px_5px_5px] shadow-lime-300";
	if (payload.color === true) classWrapper += "  bg-gray-700";
	if (payload.center === true) {
		classWrapper += "  justify-center";
	} else {
		classWrapper += "  justify-start";
	}

	return (
		<div
			className={classWrapper}
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
