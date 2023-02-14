import React from "react";

export function ButtonsYesCancelWrapper(payload: {
	children: React.ReactElement;
}) {
	return <div className="flex justify-center w-full">{payload.children}</div>;
}
