import { createReducer } from "@reduxjs/toolkit";

////////////////////////////////////////////////////////////////////////
export const SOCKET = "SOCKET";

export const socketAction = (enabled: boolean) => ({
	type: SOCKET,
	payload: {
		enabled,
	},
});

interface IEnableParamState {
	enabled: boolean;
}

const initialStateSocket: IEnableParamState = {
	enabled: false,
};

export const socketReducer = createReducer(initialStateSocket, {
	[SOCKET]: (state: IEnableParamState, action: any) => {
		const { enabled } = action.payload;

		return { enabled };
	},
});
