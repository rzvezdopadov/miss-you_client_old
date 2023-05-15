import React from "react";
import { store } from "../../store/store";
import { modalComplaintAction } from "../../store/redusers/modal";
import { initialStateComplaint } from "../../store/redusers/complaints";
import {
	COMPLAINTTYPE,
	IComplaint,
} from "../../../role_all/interfaces/iprofiles";
import { ModalSendPayloadWrapper } from "../../../role_all/components/wrappers/modal/ModalSendPayloadWrapper";
import { Label } from "../../../role_all/components/utils/Labels";
import { Input, TextArea } from "../../../role_all/components/utils/Inputs";
import { Button } from "../../../role_all/components/utils/Buttons";
import { sendComplaint } from "../../socket/complaints";

export function modalComplaintOpen(complaint: IComplaint) {
	store.dispatch(modalComplaintAction({ enabled: true, complaint }));
}

export function modalComplaintClose() {
	store.dispatch(
		modalComplaintAction({
			enabled: false,
			complaint: initialStateComplaint,
		})
	);
}

export function ModalComplaint() {
	const { modalComplaint } = store.getState();

	React.useEffect(() => {
		return () => {
			modalComplaintClose();
		};
	}, []);

	return (
		<ModalSendPayloadWrapper
			enabled={modalComplaint.enabled}
			closeClbk={modalComplaintClose}
		>
			<Label
				value={
					modalComplaint.complaint.type === COMPLAINTTYPE.message
						? `Жалоба на сообщение:`
						: `Жалоба на профиль`
				}
				bold={true}
			></Label>

			{modalComplaint.complaint.type === COMPLAINTTYPE.message ? (
				<div className="flex">
					<Label
						value={`"${modalComplaint.complaint.complmessage.message}"`}
					></Label>
				</div>
			) : (
				<></>
			)}
			<Input
				value={modalComplaint.complaint.subject}
				onChange={(e) => {
					const newComplaint = { ...modalComplaint.complaint };
					newComplaint.subject = e.target.value;

					store.dispatch(
						modalComplaintAction({
							enabled: true,
							complaint: newComplaint,
						})
					);
				}}
				type={"string"}
				placeholder={"Тема жалобы"}
			/>
			<div className="flex flex-col w-full">
				<TextArea
					value={modalComplaint.complaint.discription}
					onChange={(e) => {
						const newComplaint = { ...modalComplaint.complaint };
						newComplaint.discription = e.target.value;

						store.dispatch(
							modalComplaintAction({
								enabled: true,
								complaint: newComplaint,
							})
						);
					}}
					placeholder={"Описание жалобы"}
				/>
			</div>

			<Button value={"Отправить"} onClick={sendComplaint}></Button>
		</ModalSendPayloadWrapper>
	);
}
