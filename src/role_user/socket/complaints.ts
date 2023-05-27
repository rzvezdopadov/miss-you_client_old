import { initialStateComplaint } from "../store/redusers/complaints";
import { modalComplaintAction } from "../store/redusers/modal";
import { store } from "../store/store";
import { modalMessageAction } from "../../role_all/store/redusers/modal";
import { socketClient } from "../../role_all/socket/socket";
import { storeAll } from "../../role_all/store/storeAll";

export const sendComplaint = () => {
	const { modalComplaint } = store.getState();

	if (
		!modalComplaint.complaint.subject ||
		!modalComplaint.complaint.discription
	) {
		storeAll.dispatch(
			modalMessageAction({
				enabled: true,
				text: "Тема и описание должны быть обязательно написанны",
			})
		);

		return;
	}

	if (
		!modalComplaint.complaint.userto ||
		!modalComplaint.complaint.userfrom
	) {
		storeAll.dispatch(
			modalMessageAction({
				enabled: true,
				text: "Пользователь не выбран!",
			})
		);

		return;
	}

	socketClient.emit("set_complaint", modalComplaint.complaint);

	store.dispatch(
		modalComplaintAction({
			enabled: false,
			complaint: initialStateComplaint,
		})
	);
};
