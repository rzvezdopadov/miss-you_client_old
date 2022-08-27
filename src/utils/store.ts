// @ts-ignore
import { configureStore } from "@reduxjs/toolkit"
import { filtersUserReducer, jwtReducer, modalLoadingReducer, modalMessageReducer, myVaporsReducer, profileReducer, usersProfilesReducer, userProfileReducer } from "./reducers"

export const store = configureStore({
    reducer: {
        modalLoading: modalLoadingReducer,
        modalMessage: modalMessageReducer,
        jwt: jwtReducer,
        profile: profileReducer,
        myVapors: myVaporsReducer,
        filtersUser: filtersUserReducer,
        usersProfiles: usersProfilesReducer, 
        userProfile: userProfileReducer,     
    }
})
