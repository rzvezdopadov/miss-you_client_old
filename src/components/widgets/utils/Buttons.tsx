import { MouseEventHandler } from "react";
import { ButtonsYesCancelWrapper } from "../../wrappers/ButtonsWrapper";
import { ButtonYes, ButtonCancel } from "../../utils/Buttons";

export function ButtonsYesCancelWidget(payload: {
	onClickYes: MouseEventHandler<HTMLButtonElement>;
	onClickCancel: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<ButtonsYesCancelWrapper>
			<>
				<ButtonYes onClick={payload.onClickYes} />
				<ButtonCancel onClick={payload.onClickCancel} />
			</>
		</ButtonsYesCancelWrapper>
	);
}
