import { ReactEventHandler, ReactNode } from "react";
import { getWayPhoto } from "../../../helpers/server";

export function PhotoProfile(payload: {
	src: string;
	onClick?: ReactEventHandler;
	children?: ReactNode;
}) {
	return (
		<div
			style={{
				backgroundImage: `URL(${getWayPhoto(payload.src)})`,
			}}
			className="flex relative bg-center bg-cover bg-no-repeat shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-2xl justify-center h-80 w-80 m-1"
			onClick={payload.onClick ? payload.onClick : () => {}}
		>
			{payload.children ? payload.children : <></>}
		</div>
	);
}

export function PhotoProfileLittle(payload: {
	src: string;
	onClick?: ReactEventHandler;
	children?: ReactNode;
}) {
	return (
		<div
			style={{
				backgroundImage: `URL(${getWayPhoto(payload.src)})`,
			}}
			onClick={payload.onClick ? payload.onClick : () => {}}
			className="flex bg-center bg-cover bg-no-repeat shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-2xl cursor-pointer justify-center ml-2 mr-2 h-16 w-16 m-1"
		>
			{payload.children ? payload.children : <></>}
		</div>
	);
}
