import { useRefDivVisible } from "../../../hooks/form.hook";
import { ButtonClose } from "../../utils/Buttons";

export function ModalSendPayloadWrapper(payload: {
	children: React.ReactNode;
	enabled: boolean;
	closeClbk: React.MouseEventHandler<HTMLButtonElement>;
}) {
	const refModal = useRefDivVisible(payload.enabled);

	return (
		<div
			ref={refModal}
			className="flex flex-col invisible fixed justify-center items-center bg-gray-900 shadow-[0px_0px_2px_2px] shadow-lime-300 text-neutral-50 rounded-xl top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-50 pb-2 min-h-36 max-h-fit w-80"
		>
			<ButtonClose onClick={payload.closeClbk}></ButtonClose>
			{payload.children}
		</div>
	);
}
