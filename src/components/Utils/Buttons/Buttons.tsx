import { Ref, forwardRef } from "react";

export const Button = forwardRef(
	(payload: { value: string; onClick: any }, ref: Ref<HTMLButtonElement>) => {
		return (
			<div className="flex items-center justify-center m-1">
				<button
					className="flex items-center bg-lime-600 hover:bg-lime-800 select-none cursor-pointer text-white shadow-[0px_0px_2px_2px] shadow-lime-300 m-1 py-2 px-4 h-6 rounded-xl"
					type="button"
					ref={ref}
					onClick={payload.onClick}
				>
					{payload.value}
				</button>
			</div>
		);
	}
);
