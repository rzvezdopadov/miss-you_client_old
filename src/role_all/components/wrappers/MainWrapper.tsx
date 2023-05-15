import * as React from "react";

export function MainWrapper(payload: { children: React.ReactNode }) {
	return (
		<div className="flex flex-grow fixed top-20 bottom-4 shadow-[0px_0px_5px_5px] shadow-lime-300 rounded-xl overflow-hidden justify-center items-center">
			{payload.children}
		</div>
	);
}
