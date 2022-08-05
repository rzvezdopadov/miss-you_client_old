import { configureStore } from "@reduxjs/toolkit"
import { jwtReducer, myVaporsReducer, profileReducer } from "./reducers"

export const store = configureStore({
    reducer: {
        jwt: jwtReducer,
        profile: profileReducer,
        myVapors: myVaporsReducer,       
    }
})
