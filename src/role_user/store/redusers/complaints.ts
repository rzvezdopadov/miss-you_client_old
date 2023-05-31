import { createAction, createReducer } from "@reduxjs/toolkit";
import {
	COMPLAINTSTATUS,
	COMPLAINTTYPE,
	IComplaint,
	MESSAGETYPE,
} from "../../../role_all/interfaces/iprofiles";

////////////////////////////////////////////////////////////////////////
export const COMPLAINTS = "COMPLAINTS";

export const complaintsAction = createAction<IComplaint[]>(COMPLAINTS);

export const initialStateComplaints: IComplaint[] = [];

export const complaintsReducer = createReducer(
	initialStateComplaints,
	(builder) => {
		builder.addCase(
			complaintsAction,
			(state: IComplaint[], action: any) => {
				const { complaints } = action.payload;

				return complaints;
			}
		);
	}
);

////////////////////////////////////////////////////////////////////////
export const COMPLAINT = "COMPLAINT";

export const dialogAction = createAction<IComplaint>(COMPLAINT);

export const initialStateComplaint: IComplaint = {
	userfrom: "",
	userto: "",
	timecode: 0,
	type: COMPLAINTTYPE.message,
	subject: "",
	discription: "",
	dck: "",
	cash: 0,
	status: COMPLAINTSTATUS.open,
	complmessage: {
		timecode: 0,
		type: MESSAGETYPE.message,
		userid: "",
		message: "",
		stpid: "",
		spos: 0,
	},
};

export const complaintReducer = createReducer(
	initialStateComplaint,
	(builder) => {
		builder.addCase(dialogAction, (state: IComplaint, action: any) => {
			const { complaint } = action.payload;

			return complaint;
		});
	}
);
