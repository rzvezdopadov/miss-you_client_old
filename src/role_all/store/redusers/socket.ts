import { createAction, createReducer } from "@reduxjs/toolkit";
import { IEnableParamState } from "../../../role_user/interfaces/iredusers";

////////////////////////////////////////////////////////////////////////
export const SOCKET = "SOCKET";

export const socketAction = createAction<boolean>(SOCKET);

const initialStateSocket: IEnableParamState = {
	enabled: false,
};

export const socketReducer = createReducer(initialStateSocket, (builder) => {
	builder.addCase(socketAction, (state: IEnableParamState, action: any) => {
		const { enabled } = action.payload;

		return { enabled };
	});
});
