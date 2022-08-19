// @ts-ignore
import { configureStore } from "@reduxjs/toolkit"
import { filtersUserReducer, jwtReducer, modalLoadingReducer, modalMessageReducer, myVaporsReducer, profileReducer, profilesUsersReducer } from "./reducers"

export const store = configureStore({
    reducer: {
        modalLoading: modalLoadingReducer,
        modalMessage: modalMessageReducer,
        jwt: jwtReducer,
        profile: profileReducer,
        myVapors: myVaporsReducer,
        filtersUser: filtersUserReducer,
        profilesUsers: profilesUsersReducer,      
    }
})
