export function WidgetWrapper(payload: {
	children: React.ReactNode;
	wrap?: boolean;
	col?: boolean;
}) {
	let style =
		"flex bg-gray-900 shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl relative items-center justify-center p-1 my-2 select-none w-full";
	if (payload.wrap) style += " flex-wrap";
	if (payload.col) style += " flex-col";

	return <div className={style}>{payload.children}</div>;
}
