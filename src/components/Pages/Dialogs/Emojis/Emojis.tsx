import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { emojis } from "../../../../arrdata/emojis";

function decode(str: string) {
	let txt = new DOMParser().parseFromString(str, "text/html");

	return txt.documentElement.textContent;
}

export function Emojis(payload: {
	onSetEmojiClbk: React.MouseEventHandler<HTMLDivElement>;
	emojisOpen: boolean;
}) {
	const [emodjiBookMark, setEmodjiBookMark] = useState(0);
	const refEmojis = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!refEmojis.current) return;

		if (payload.emojisOpen) {
			refEmojis.current.classList.remove("invisible");
		} else {
			refEmojis.current.classList.add("invisible");
		}
	}, [payload.emojisOpen]);

	return (
		<div
			className="flex invisible flex-col justify-center items-start text-sm absolute cursor-auto bottom-12 right-0 z-40 rounded-md shadow-[0px_0px_3px_3px] shadow-lime-300 bg-slate-700 h-72 w-72"
			ref={refEmojis}
		>
			<div className="flex flex-wrap overflow-y-scroll h-60 w-72">
				{emojis[emodjiBookMark].map((value) => {
					return (
						<div
							key={value}
							className="flex justify-center items-center text-3xl h-10 w-10 cursor-pointer"
							onClick={payload.onSetEmojiClbk}
						>
							{decode(value)}
						</div>
					);
				})}
			</div>

			<div className="flex bg-slate-800 h-12 w-72">
				{emojis.map((value, index) => {
					return (
						<div
							className="flex hover:bg-slate-500 justify-center items-center text-3xl h-10 w-10 cursor-pointer"
							key={`emojis${index}`}
							onClick={() => {
								setEmodjiBookMark(index);
							}}
						>
							{decode(value[0])}
						</div>
					);
				})}
			</div>
		</div>
	);
}
