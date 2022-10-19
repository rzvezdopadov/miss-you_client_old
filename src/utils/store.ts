// @ts-ignore
import { configureStore } from "@reduxjs/toolkit"
import { filtersUserReducer, jwtReducer, modalLoadingReducer, modalMessageReducer, myVaporsReducer, usersProfilesReducer, userProfileReducer, userMyProfileReducer, settingProfileCharactersReducer, dialogsReducer } from "./reducers"

export const store = configureStore({
    reducer: {
        modalLoading: modalLoadingReducer,
        modalMessage: modalMessageReducer,
        jwt: jwtReducer,
        myVapors: myVaporsReducer,
        filtersUser: filtersUserReducer,
        usersProfiles: usersProfilesReducer, 
        userProfile: userProfileReducer,
        userMyProfile: userMyProfileReducer,
        settingProfileCharacters: settingProfileCharactersReducer,
        dialogs: dialogsReducer,
    }
})
