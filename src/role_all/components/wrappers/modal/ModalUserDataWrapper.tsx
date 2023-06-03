import { MouseEventHandler, ReactNode } from "react";
import { useRefDivVisible } from "../../../hooks/form.hook";
import { ButtonClose } from "../../utils/Buttons";

export function ModalUserDataWrapper(payload: {
	enabled: boolean;
	clbkClose?: MouseEventHandler<HTMLButtonElement>;
	children?: ReactNode;
}) {
	const refUserProfile = useRefDivVisible(payload.enabled);

	return (
		<div
			ref={refUserProfile}
			className="flex flex-col invisible fixed justify-start bg-gray-900 shadow-[0px_0px_2px_2px] shadow-lime-300 text-neutral-50 rounded-xl overflow-y-scroll lg:overflow-auto top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-20 pb-2 h-full lg:h-2/3 lg:max-w-5xl"
		>
			<ButtonClose
				onClick={payload.clbkClose ? payload.clbkClose : () => {}}
			/>
			{payload.children ? payload.children : <></>}
		</div>
	);
}
