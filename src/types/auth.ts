export interface AuthState {
    token: string;
    login: string;
    role: string;
    permits?: [];
    error?: '';
}
export enum AuthActionTypes {
    LOGIN = 'LOGIN',
    LOGIN_SUCCESS  = 'LOGIN_SUCCESS',
    LOGIN_ERROR = 'LOGIN_ERROR',
    PERMITS = 'PERMITS',
    PERMITS_SUCCESS  = 'PERMITS_SUCCESS',
    PERMITS_ERROR = 'PERMITS_ERROR',
}

interface FetchAuthAction {
    type: AuthActionTypes.LOGIN
}

interface FetchAuthSuccessAction {
    type: AuthActionTypes.LOGIN_SUCCESS
    payload: {
        key: string,
        role: string,
        login: string
    }
}
interface FetchAuthErrorAction {
    type: AuthActionTypes.LOGIN_ERROR
    payload: string
}
interface FetchPermitsAction {
    type: AuthActionTypes.PERMITS
}

interface FetchPermitsSuccessAction {
    type: AuthActionTypes.PERMITS_SUCCESS
    payload: any []
}
interface FetchPermitErrorAction {
    type: AuthActionTypes.PERMITS_ERROR
    payload: string
}

export type AuthAction = FetchAuthAction | FetchAuthSuccessAction | FetchAuthErrorAction | FetchPermitsAction
| FetchPermitsSuccessAction | FetchPermitErrorAction;

export interface IAuth {
    key: string;
    login: string;
    role: string;
}
