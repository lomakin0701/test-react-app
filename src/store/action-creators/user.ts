import axios from "axios";
import {IUser, UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>, getState: () => any) => {
        const state = await getState();
        try  {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get<IUser[]>('api/users', {
                headers: {
                    'X-auth-key': state.auth.token,
                    'X-auth-login': state.auth.login,
                }
            });
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Ошибка при загрузке пользователей'
            })
        }
    }
}
