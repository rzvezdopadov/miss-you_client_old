import { configureStore } from "@reduxjs/toolkit"
import { jwtReducer } from "./reducers"

export const store = configureStore({
    reducer: {
        jwt: jwtReducer,    
    }
})
