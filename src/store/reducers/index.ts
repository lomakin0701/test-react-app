import {combineReducers} from "redux";
import {authReducer} from "./authReducer";
import {userReducer} from "./userReducer";
import {deviceReducer} from "./deviceReducer";
import {sessionReducer} from "./sessionReducer";
import {portReducer} from "./portReducer";
import {analyzeReducer} from "./analyzeReducer";

export const rootReducer =  combineReducers({
    auth: authReducer,
    user: userReducer,
    device: deviceReducer,
    session: sessionReducer,
    port: portReducer,
    analyze: analyzeReducer
})

export type RootState = ReturnType<typeof rootReducer>
