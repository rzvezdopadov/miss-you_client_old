import { BG_COLOR } from "../../../assets/styles/enum";

export function WidgetWrapper(payload: {
	children?: React.ReactNode;
	wrap?: boolean;
	col?: boolean;
	itemsCenterDisable?: boolean;
	shadowDisable?: boolean;
	title?: string;
	bgcolor?: BG_COLOR;
}) {
	return (
		<div
			className={`flex rounded-md relative justify-center w-full select-none ${
				payload.wrap ? " flex-wrap" : ""
			}${payload.col ? " flex-col" : ""}${
				payload.itemsCenterDisable ? "" : " items-center"
			}${
				payload.shadowDisable
					? " p-0 my-0"
					: " shadow-[0px_0px_3px_3px] shadow-lime-300 p-2.5 my-1.5"
			}${payload.bgcolor ? ` ${payload.bgcolor}` : " bg-gray-900"}`}
			title={payload.title ? payload.title : ""}
		>
			{payload.children}
		</div>
	);
}
