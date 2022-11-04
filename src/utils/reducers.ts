import { arr_age, arr_genderVapor, arr_growth, arr_location, arr_signZodiac, arr_weight } from "../arrdata/profiles";
import { IDialog, IFilterUsers, IProfile, IProfileShort } from "../interfaces/iprofiles";
import { IActionReducer, IStateModalMessage } from "../interfaces/iredusers";
import { getCookiesJWT } from "./cookie";


export const MOBILE_MENU = 'MOBILE_MENU';

export const mobileMenuAction = (enabled: boolean) => ({
    type: MOBILE_MENU,
    payload: {
        enabled,
    },
})

export const mobileMenuReducer = (state: { enabled: boolean } 
= {
    enabled: false,
}
, action: IActionReducer) => {
    switch (action.type) {
        case MOBILE_MENU: {
            const { enabled } = action.payload;

            return { enabled };
        }

        default: return state;    
    }
} 

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

export const jwtReducer = (jwt: string = getCookiesJWT(), action: IActionReducer) => {
    const value = action.payload;
    
    switch (action.type) {
        case JWT_TOKEN: {
            jwt = value;
            
            return value;
        }        
        default: return jwt;    
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
    agestart: arr_age[arr_age.length - 1],
    ageend: arr_age[0],
    growthstart: arr_growth[0],
    growthend: arr_growth[arr_growth.length - 1],
    weightstart: arr_weight[0],
    weightend: arr_weight[arr_weight.length - 1],
    signzodiac: arr_signZodiac.length - 1,
    gendervapor: arr_genderVapor.length - 1,
    religion: 0,
    smoke: 0,
    alcohol: 0,
    interests: [],
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

export const usersProfilesAction = (profiles: [IProfileShort]) => ({
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
        id: 0,
        timecode: 0,
        name: '',
        latitude: 0,
        longitude: 0,
        location: '',
        likes: [],
        age: 0,
        birthday: 0,
        monthofbirth: 0,
        yearofbirth: 0,
        growth: 80,
        weight: 180,
        gender: 0,
        gendervapor: 0,
        photomain: 0,
        photolink: [],
        signzodiac: 0,
        education: 0,
        fieldofactivity: 0,
        maritalstatus: 0,
        children: 0,
        religion: 0,
        smoke: 0,
        alcohol: 0,
        discription: '',
        profit: 0,
        interests: [],
        ilikecharacter: [],
        idontlikecharacter: [],
        filters: {
            location: arr_location[0][0],
            agestart: arr_age[arr_age.length - 1],
            ageend: arr_age[0],
            growthstart: arr_growth[0],
            growthend: arr_growth[arr_growth.length - 1],
            weightstart: arr_weight[0],
            weightend: arr_weight[arr_weight.length - 1],
            signzodiac: arr_signZodiac.length - 1,
            gendervapor: arr_genderVapor.length - 1,
            religion: 0,
            smoke: 0,
            alcohol: 0,
            interests: [],
        }
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


export const USER_MYPROFILE = 'USER_MYPROFILE';

export const userMyProfileAction = (profile: IProfile) => ({
    type: USER_MYPROFILE,
    payload: {
        profile
    },
})

export const userMyProfileReducer = (state: IProfile  
= {
    id: 0,
    timecode: 0,
    name: '',
    latitude: 0,
    longitude: 0,
    location: '',
    likes: [],
    age: 0,
    birthday: 1,
    monthofbirth: 1,
    yearofbirth: 1970,
    growth: 80,
    weight: 180,
    gender: 0,
    gendervapor: 0,
    photomain: 0,
    photolink: [],
    signzodiac: 0,
    education: 0,
    fieldofactivity: 0,
    maritalstatus: 0,
    children: 0,
    religion: 0,
    smoke: 0,
    alcohol: 0,
    discription: '',
    profit: 0,
    interests: [],
    ilikecharacter: [],
    idontlikecharacter: [],
    filters: {
        location: arr_location[0][0],
        agestart: arr_age[arr_age.length - 1],
        ageend: arr_age[0],
        growthstart: arr_growth[0],
        growthend: arr_growth[arr_growth.length - 1],
        weightstart: arr_weight[0],
        weightend: arr_weight[arr_weight.length - 1],
        signzodiac: arr_signZodiac.length - 1,
        gendervapor: arr_genderVapor.length - 1,
        religion: 0,
        smoke: 0,
        alcohol: 0,
        interests: [],
    }
}
, action: IActionReducer) => {
    switch (action.type) {
        case USER_MYPROFILE: {
            const { profile } = action.payload;

            return profile as IProfile;
        }

        default: return state;    
    }
} 

export const SETTING_PROFILE_CHARACTER = 'SETTING_PROFILE_CHARACTER';

export const settingProfileCharactersAction = (enabled: boolean) => ({
    type: SETTING_PROFILE_CHARACTER,
    payload: {
        enabled,
    },
})

export const settingProfileCharactersReducer = (state: { enabled: boolean } 
= {
    enabled: false,
}
, action: IActionReducer) => {
    switch (action.type) {
        case SETTING_PROFILE_CHARACTER: {
            const { enabled } = action.payload;

            return { enabled };
        }

        default: return state;    
    }
} 

export const DIALOGS = 'DIALOGS';

export const dialogsAction = (dialogs: Array<IDialog>) => ({
    type: DIALOGS,
    payload: {
        dialogs,
    },
})

export const dialogsReducer = (state: Array<IDialog> = [] , action: IActionReducer): Array<IDialog> => {
    switch (action.type) {
        case DIALOGS: {
            const { dialogs } = action.payload;

            return dialogs;
        }

        default: return state;    
    }
} 

export const DIALOG = 'DIALOG';

export const dialogAction = (dialog: IDialog) => ({
    type: DIALOG,
    payload: {
        dialog,
    },
})

export const dialogReducer = (state: IDialog = null, action: IActionReducer): IDialog => {
    switch (action.type) {
        case DIALOG: {
            const { dialog } = action.payload;

            return dialog;
        }

        default: return state;    
    }
} 

export const DIALOG_MODAL = 'DIALOG_MODAL';

export const dialogModalAction = (enabled: boolean) => ({
    type: DIALOG_MODAL,
    payload: {
        enabled,
    },
})

export const dialogModalReducer = (state: { enabled: boolean } 
= {
    enabled: false,
}
, action: IActionReducer) => {
    switch (action.type) {
        case DIALOG_MODAL: {
            const { enabled, dialog } = action.payload;

            return { enabled, dialog };
        }

        default: return state;    
    }
} 

export const DIALOG_ID = 'DIALOG_ID';

export const dialogIdAction = (idDialog: number) => ({
    type: DIALOG_ID,
    payload: idDialog,
})

export const dialogIdReducer = (state: number = 0, action: IActionReducer) => {
    switch (action.type) {
        case DIALOG_ID: {
            const idDialog = action.payload;

            return idDialog;
        }

        default: return state;    
    }
} 
