import React from "react";
import { COMPLAINTTYPE, IComplaint } from "../../interfaces/iprofiles";
import { Button } from "../utils/Buttons";
import { Label, LabelWidget } from "../utils/Labels";
import { ModalSendPayloadWrapper } from "../wrappers/ModalSendPayloadWrapper";
import { store } from "../../store/store";
import { modalComplaintAction } from "../../store/redusers/modal";
import { initialStateComplaint } from "../../store/redusers/complaints";
import { Input, TextArea } from "../utils/Inputs";
import { sendComplaint } from "../utils/Socket";

export function modalComplaintOpen(complaint: IComplaint) {
	store.dispatch(modalComplaintAction(true, complaint));
}

export function modalComplaintClose() {
	store.dispatch(modalComplaintAction(false, initialStateComplaint));
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

					store.dispatch(modalComplaintAction(true, newComplaint));
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
							modalComplaintAction(true, newComplaint)
						);
					}}
					placeholder={"Описание жалобы"}
				/>
			</div>

			<Button value={"Отправить"} onClick={sendComplaint}></Button>
		</ModalSendPayloadWrapper>
	);
}
