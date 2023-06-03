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
			className="flex relative bg-center bg-cover bg-no-repeat shadow-[0px_0px_2px_2px] shadow-lime-300 rounded-2xl justify-center h-80 w-80 m-1"
			onClick={payload.onClick ? payload.onClick : () => {}}
		>
			{payload.children ? payload.children : <></>}
		</div>
	);
}

export function PhotoProfileShort(payload: {
	src: string;
	children?: ReactNode;
}) {
	return (
		<div
			style={{
				backgroundImage: `URL(${getWayPhoto(payload.src)})`,
			}}
			className="flex bg-center bg-cover bg-no-repeat justify-center shadow-[0px_0px_2px_2px] shadow-lime-300 text-neutral-50 rounded-3xl m-1 h-32 w-32"
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
			className="flex bg-center bg-cover bg-no-repeat shadow-[0px_0px_2px_2px] shadow-lime-300 rounded-2xl cursor-pointer justify-center ml-2 mr-2 h-16 w-16 m-1"
		>
			{payload.children ? payload.children : <></>}
		</div>
	);
}

export function PhotoDialogShort(payload: {
	src: string;
	onClick?: ReactEventHandler;
	children?: ReactNode;
}) {
	return (
		<div
			style={{
				backgroundImage: `URL(${getWayPhoto(payload.src)})`,
			}}
			className="flex flex-shrink-0 bg-center bg-cover bg-no-repeat justify-center shadow-[0px_0px_2px_2px] shadow-lime-300 text-neutral-50 rounded-full m-1 h-14 w-14"
			onClick={payload.onClick ? payload.onClick : () => {}}
		>
			{payload.children ? payload.children : <></>}
		</div>
	);
}

export function PhotoMessage(payload: {
	src: string;
	onClick?: ReactEventHandler;
	children?: ReactNode;
}) {
	return (
		<div
			style={{
				backgroundImage: `URL(${getWayPhoto(payload.src)})`,
			}}
			className="flex bg-center bg-cover bg-no-repeat justify-center shadow-[0px_0px_2px_2px] shadow-lime-300 text-neutral-50 rounded-full m-1 h-10 w-10"
			onClick={payload.onClick ? payload.onClick : () => {}}
		>
			{payload.children ? payload.children : <></>}
		</div>
	);
}
