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

export const fetchUser = (uid: string) => {
    return async (dispatch: Dispatch<UserAction>, getState: () => any) => {
        const state = await getState();
        try  {
            dispatch({type: UserActionTypes.FETCH_USER})
            const response = await axios.get<IUser>(`api/users/${uid}`, {
                headers: {
                    'X-auth-key': state.auth.token,
                    'X-auth-login': state.auth.login,
                }
            });
            dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: 'Ошибка при загрузке пользователя'
            })
        }
    }
}

//
// export const createUser = (data: object) => {
//     return async (dispatch: Dispatch<UserAction>, getState: () => any) => {
//         const state = await getState();
//         try  {
//             dispatch({type: UserActionTypes.CREATE_USER})
//             const response = await axios.post(`api/users`, data, {
//                 headers: {
//                     'X-auth-key': state.auth.token,
//                     'X-auth-login': state.auth.login,
//                 }
//             });
//             dispatch({type: UserActionTypes.CREATE_USER_SUCCESS, payload: response.data})
//         } catch (error) {
//             dispatch({
//                 type: UserActionTypes.CREATE_USER_ERROR,
//                 payload: 'Ошибка при создании пользователя'
//             })
//         }
//     }
// }
//
//
// export const updateUser = (uid: string, data: object) => {
//     return async (dispatch: Dispatch<UserAction>, getState: () => any) => {
//         const state = await getState();
//         try  {
//             dispatch({type: UserActionTypes.UPDATE_USER})
//             const response = await axios.put(`api/users/${uid}`, data, {
//                 headers: {
//                     'X-auth-key': state.auth.token,
//                     'X-auth-login': state.auth.login,
//                 }
//             });
//             dispatch({type: UserActionTypes.UPDATE_USER_SUCCESS, payload: response.data})
//         } catch (error) {
//             dispatch({
//                 type: UserActionTypes.UPDATE_USER_ERROR,
//                 payload: 'Ошибка при обновлении пользователя'
//             })
//         }
//     }
// }
//
// export const deleteUser = (uid: string) => {
//     return async (dispatch: Dispatch<UserAction>, getState: () => any) => {
//         const state = await getState();
//         try  {
//             dispatch({type: UserActionTypes.DELETE_USER})
//             const response = await axios.delete(`api/users/${uid}`, {
//                 headers: {
//                     'X-auth-key': state.auth.token,
//                     'X-auth-login': state.auth.login,
//                 }
//             });
//             dispatch({type: UserActionTypes.DELETE_USER_SUCCESS})
//         } catch (error) {
//             dispatch({
//                 type: UserActionTypes.DELETE_USER_ERROR,
//                 payload: 'Ошибка при удалении пользователя'
//             })
//         }
//     }
// }
