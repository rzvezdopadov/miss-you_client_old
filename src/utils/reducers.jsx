import { getStorage } from "./storage";


export const JWT_TOKEN = 'JWT_TOKEN';

export const jwtAction = (value) => ({
    type: JWT_TOKEN,
    payload: value,
})

export const jwtReducer = (state = getStorage(), action) => {
    switch (action.type) {
        default: return state;
    }
} 
