import { getStorage } from "./storage";

export const itemsReducer = (state = getStorage(), action) => {
    switch (action.type) {
        default: return state;
    }
} 
