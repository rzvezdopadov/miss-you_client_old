import { getStorage } from "./storage";


export const JWT_TOKEN = 'JWT_TOKEN';

export const jwtAction = (value) => ({
    type: JWT_TOKEN,
    payload: value,
})

export const jwtReducer = (state = getStorage(), action) => {
    const { jwt } = state;

    switch (action.type) {
        default: return jwt;
    }
} 
