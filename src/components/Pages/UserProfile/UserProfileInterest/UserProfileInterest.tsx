import * as React from "react";

export function UserProfileInterest(payload: { value: string; title: string }) {
	return (
		<>
			<div
				className="flex items-start bg-gray-300 select-none shadow-[0px_0px_2px_2px] shadow-lime-300 text-sm text-black px-1 m-1 my-1.5 h-5 rounded-lg"
				title={payload.title}
			>
				{payload.value}
			</div>
		</>
	);
}
