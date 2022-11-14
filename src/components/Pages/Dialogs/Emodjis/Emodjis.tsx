import React from "react";
import { emojisSmile } from "../../../../arrdata/emojis";

function decode(str: string) {
	let txt = new DOMParser().parseFromString(str, "text/html");

	return txt.documentElement.textContent;
}

export function Emodjis() {
	return (
		<div className="flex flex-wrap justify-center overflow-y-scroll text-sm absolute bottom-12 right-0 z-40 rounded-md shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-700 h-72 w-72">
			{emojisSmile.map((value) => {
				return (
					<div
						key={value}
						className="flex justify-center items-center text-3xl h-10 w-10 cursor-pointer"
					>
						{decode(value)}
					</div>
				);
			})}
		</div>
	);
}
