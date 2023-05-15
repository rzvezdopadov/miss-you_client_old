import * as React from "react";

export function NavbarWrapper(payload: { children: React.ReactNode }) {
	return (
		<div className="flex fixed flex-shrink-0 items-center justify-around shadow-[0px_0px_5px_5px] shadow-lime-300 rounded-b-xl bg-gray-700 h-16 w-full z-0">
			{payload.children}
		</div>
	);
}
