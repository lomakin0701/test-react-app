import axios, {AxiosError} from "axios";
import {IUser, UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try  {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Ошибка при загрузке пользователей'
            })
        }
    }
}
