import {AuthState, AuthActionTypes, AuthAction} from "../../types/auth";

const initialState: AuthState = {
    token: '',
    login: '',
    role: '',
    permits: []
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type){
        case AuthActionTypes.LOGIN:
            return {token: '', login: '', role: '', permits: []}
        case AuthActionTypes.LOGIN_SUCCESS:
            return {login: action.payload.login, role: action.payload.role, token: action.payload.key}
        case AuthActionTypes.LOGIN_ERROR:
            return {token: '', login: '', role: '', permits: []}
        default:
            return state;
    }
}
