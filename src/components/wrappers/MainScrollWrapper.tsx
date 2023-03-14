import { useRef } from "react";
import { invisibleOnScrollToTop } from "../../helpers/pagescroll";
import { ButtonScrollToTop } from "../utils/Buttons";

export function MainScrollWrapper(payload: {
	children: React.ReactElement;
	clbkScrollBottom?: any;
	loader?: boolean;
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

	return (
		<div
			className="flex flex-col fixed justify-start items-center bg-gray-700 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl overflow-y-scroll top-20 bottom-4 left-0 right-0 m-auto px-2 pt-2 pb-2"
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
