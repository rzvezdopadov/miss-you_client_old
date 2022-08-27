import { arr_age, arr_genderVapor, arr_location, arr_signZodiac } from "../arrdata/profiles";
import { IFilterUsers } from "../interfaces/ifilters";
import { IProfile } from "../interfaces/iprofiles";
import { IActionReducer, IStateModalMessage } from "../interfaces/iredusers";
import { getStorageJWT } from "./storage";

export const MODAL_LOADING = 'MODAL_LOADING';

export const modalLoadingAction = (enabled: boolean, text: string = '') => ({
    type: MODAL_LOADING,
    payload: {
        enabled,
        text,
    },
})

export const modalLoadingReducer = (state: IStateModalMessage = {
    enabled: false,
    text: ""
}, action: IActionReducer) => {
    switch (action.type) {
        case MODAL_LOADING: {
            const { enabled, text } = action.payload;
           
            return { enabled, text };
        }        
        default: return state;    
    }
} 

export const MODAL_MESSAGE = 'MODAL_MESSAGE';

export const modalMessageAction = (enabled: boolean, text: string) => ({
    type: MODAL_MESSAGE,
    payload: {
        enabled,
        text,
    },
})

export const modalMessageReducer = (state: IStateModalMessage = {
    enabled: false,
    text: ""
}, action: IActionReducer) => {
    switch (action.type) {
        case MODAL_MESSAGE: {
            let { enabled, text } = action.payload;
           
            if (!enabled) text = state.text;

            return { enabled, text };
        }        
        default: return state;    
    }
} 

export const JWT_TOKEN = 'JWT_TOKEN';

export const jwtAction = (value: string) => ({
    type: JWT_TOKEN,
    payload: value,
})

export const jwtReducer = (jwt = getStorageJWT(), action: IActionReducer) => {
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

export const profileReducer = (profile: '' = '', action: IActionReducer) => {
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

export const myVaporsReducer = (myVapors: '' = '', action: IActionReducer) => {
    const value = action.payload;

    switch (action.type) {
        case MY_VAPORS: {
            myVapors = value;

            return myVapors;
        }        
        default: return myVapors;    
    }
} 

export const FILTERS_USER = 'FILTERS_USER';

export const filtersUserAction = (filters: IFilterUsers) => ({
    type: FILTERS_USER,
    payload: filters,
})

export const filtersUserReducer = (filters: IFilterUsers = {
    location: arr_location[0][0],
    ageStart: arr_age[0],
    ageEnd: arr_age[0],
    signZodiac: arr_signZodiac.length - 1,
    genderVapor: arr_genderVapor.length - 1,
    religion: 0,
    smoke: 0,
    alcohol: 0
}, action: IActionReducer) => {
    switch (action.type) {
        case FILTERS_USER: {
            const value = action.payload;

            return value;
        }        
        default: return filters;    
    }
} 

export const USERS_PROFILES = 'USERS_PROFILES';

export const usersProfilesAction = (profiles: [IProfile]) => ({
    type: USERS_PROFILES,
    payload: profiles,
})

export const usersProfilesReducer = (profiles: [] = [], action: IActionReducer) => {
    switch (action.type) {
        case USERS_PROFILES: {
            const value = [...action.payload];

            return value;
        }

        default: return profiles;    
    }
} 

export const USER_PROFILE = 'USER_PROFILE';

export const userProfileAction = (enabled: boolean, profile: IProfile) => ({
    type: USER_PROFILE,
    payload: {
        enabled,
        profile
    },
})

export const userProfileReducer = (state: { enabled: boolean, profile: IProfile } 
= {
    enabled: false,
    profile: {
        email: '',
        password: '',
        jwt: '',
        id: 0,
        name: '',
        latitude: 0,
        longitude: 0,
        location: '',
        likes: [],
        age: 0,
        birthday: 0,
        monthOfBirth: 0,
        yearOfBirth: 0,
        gender: 0,
        genderVapor: 0,
        photoMain: 0,
        photoLink: [],
        signZodiac: 0,
        education: 0,
        fieldOfActivity: 0,
        maritalStatus: 0,
        children: 0,
        religion: 0,
        rise: 0,
        smoke: 0,
        alcohol: 0,
        discription: '',
        profit: 0,
        interests: [],
        iLikeСharacter: [],
        iDontLikeСharacter: [],
        vapors: [],
        likePeople: [],
        dislikePeople: [], 
    },
}
, action: IActionReducer) => {
    switch (action.type) {
        case USER_PROFILE: {
            const { enabled, profile } = action.payload;

            return { enabled, profile };
        }

        default: return state;    
    }
} 

