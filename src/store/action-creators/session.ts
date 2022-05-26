import axios from "./../../utils/axios";
import {Dispatch} from "redux";
import {FetchSessionsResponse, SessionAction, SessionActionTypes} from "../../types/session";



export const fetchSessions =  ({login = '', mac_address = ''}) => {
    return async (dispatch: Dispatch<SessionAction>, getState: () => any) => {
        const state = await getState();
        try  {
            dispatch({type: SessionActionTypes.FETCH_SESSIONS})
            const response = await axios.post<FetchSessionsResponse>('api/statistic/session_logs', {
                    login,
                    mac_address
                },
                {
                    headers: {
                        'X-auth-key': state.auth.token,
                        'X-auth-login': state.auth.login,
                    }
            })
            dispatch({type: SessionActionTypes.FETCH_SESSIONS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({
                type: SessionActionTypes.FETCH_SESSIONS_ERROR,
                payload: 'Ошибка при загрузке списка'
            })
        }
    }
}

