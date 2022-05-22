import axios from "./../../utils/axios";
import {IAuth, AuthAction, AuthActionTypes} from "../../types/auth";
import {Dispatch} from "redux";

// @ts-ignore
export const fetchLogin = ({login, password}) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try  {
            dispatch({type: AuthActionTypes.LOGIN})
            const response = await axios.post<IAuth[]>('/api/auth', {login, password})
            // @ts-ignore
            dispatch({type: AuthActionTypes.LOGIN_SUCCESS, payload: {login, ...response.data}})
        } catch (error) {
            dispatch({
                type: AuthActionTypes.LOGIN_ERROR,
                payload: 'Ошибка авторизации'
            })
        }
    }
}
export const fetchPermits = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try  {
            dispatch({type: AuthActionTypes.PERMITS})
            const response = await axios.get<IAuth[]>('/api/auth')
            dispatch({type: AuthActionTypes.PERMITS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({
                type: AuthActionTypes.PERMITS_ERROR,
                payload: 'Ошибка получения прав доступа'
            })
        }
    }
}
