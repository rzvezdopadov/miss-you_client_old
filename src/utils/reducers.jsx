import { getStorageJWT, getStorageMyVapors, getStorageProfile } from "./storage";

export const JWT_TOKEN = 'JWT_TOKEN';

export const jwtAction = (value) => ({
    type: JWT_TOKEN,
    payload: value,
})

export const jwtReducer = (jwt = getStorageJWT(), action) => {
    const value = action.payload;
    
    switch (action.type) {
        case JWT_TOKEN: {
            jwt = value;
            
            return value;
        }        
        default: return jwt;    
    }
} 

export const PROFILE = 'PROFILE';

export const profileAction = (value) => ({
    type: PROFILE,
    payload: value,
})

export const profileReducer = (profile = getStorageProfile(), action) => {
    const value = action.payload;

    switch (action.type) {
        case PROFILE: {
            profile = value;

            return profile;
        }        
        default: return profile;    
    }
} 


export const MY_VAPORS = 'MY_VAPORS';

export const myVaporsAction = (value) => ({
    type: MY_VAPORS,
    payload: value,
})

export const myVaporsReducer = (myVapors = getStorageMyVapors(), action) => {
    const value = action.payload;

    switch (action.type) {
        case MY_VAPORS: {
            myVapors = value;

            return myVapors;
        }        
        default: return myVapors;    
    }
} 
