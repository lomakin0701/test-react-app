import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {userReducer} from "./userReducer";
import {deviceReducer} from "./deviceReducer";

export const rootReducer =  combineReducers({
    auth: authReducer,
    user: userReducer,
    device: deviceReducer
})

export type RootState = ReturnType<typeof rootReducer>
