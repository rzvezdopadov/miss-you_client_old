// @ts-ignore
import { configureStore } from "@reduxjs/toolkit"
import { 
    jwtReducer, 
    modalLoadingReducer, modalMessageReducer, 
    myVaporsReducer, 
    filtersUserReducer, 
    usersProfilesReducer, userProfileReducer, userMyProfileReducer, 
    settingProfileCharactersReducer, 
    dialogsReducer, dialogReducer, dialogModalReducer, dialogIdReducer, mobileMenuReducer 
} from "./reducers"

export const store = configureStore({
    reducer: {
        jwt: jwtReducer,
        mobileMenu: mobileMenuReducer,
        modalLoading: modalLoadingReducer,
        modalMessage: modalMessageReducer,
        myVapors: myVaporsReducer,
        filtersUser: filtersUserReducer,
        usersProfiles: usersProfilesReducer, 
        userProfile: userProfileReducer,
        userMyProfile: userMyProfileReducer,
        settingProfileCharacters: settingProfileCharactersReducer,
        dialogs: dialogsReducer,
        dialog: dialogReducer,
        dialogModal: dialogModalReducer,
        dialogId: dialogIdReducer,
    }
})
