import { Ref, forwardRef } from "react";

export const Button = forwardRef(
	(payload: { value: string; onClick: any }, ref: Ref<HTMLButtonElement>) => {
		return (
			<div className="flex items-center justify-center m-1">
				<button
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-2xl"
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
