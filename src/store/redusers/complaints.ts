import { createReducer } from "@reduxjs/toolkit";
import {
	COMPLAINTSTATUS,
	COMPLAINTTYPE,
	IComplaint,
	MESSAGETYPE,
} from "../../interfaces/iprofiles";

////////////////////////////////////////////////////////////////////////
export const COMPLAINTS = "COMPLAINTS";

export const complaintsAction = (complaints: IComplaint[]) => ({
	type: COMPLAINTS,
	payload: {
		complaints,
	},
});

export const initialStateComplaints: IComplaint[] = [];

export const complaintsReducer = createReducer(initialStateComplaints, {
	[COMPLAINTS]: (state: IComplaint[], action: any) => {
		const { complaints } = action.payload;

		return complaints;
	},
});
////////////////////////////////////////////////////////////////////////
export const COMPLAINT = "COMPLAINT";

export const dialogAction = (complaint: IComplaint) => ({
	type: COMPLAINT,
	payload: {
		complaint,
	},
});

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
		stickerpackid: "",
		stickerpos: 0,
	},
};

export const complaintReducer = createReducer(initialStateComplaint, {
	[COMPLAINT]: (state: IComplaint, action: any) => {
		const { complaint } = action.payload;

		return complaint;
	},
});
