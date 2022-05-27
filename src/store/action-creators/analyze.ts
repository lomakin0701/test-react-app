import axios from "./../../utils/axios";
import {Dispatch} from "redux";
import {FetchAnalyzesResponse, AnalyzeAction, AnalyzeActionTypes} from "../../types/analyze";

export const fetchAnalyze =  () => {
    return async (dispatch: Dispatch<AnalyzeAction>, getState: () => any) => {
        const state = await getState();
        try  {
            dispatch({type: AnalyzeActionTypes.FETCH_ANALYZES})
            const response = await axios.post<FetchAnalyzesResponse>('api/statistic/analyze', {},
                {
                    headers: {
                        'X-auth-key': state.auth.token,
                        'X-auth-login': state.auth.login,
                    }
                })
            dispatch({type: AnalyzeActionTypes.FETCH_ANALYZES_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({
                type: AnalyzeActionTypes.FETCH_ANALYZES_ERROR,
                payload: 'Ошибка при загрузке списка'
            })
        }
    }
}

