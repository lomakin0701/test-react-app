import {SessionState, SessionAction, SessionActionTypes} from "../../types/session";

const initialState: SessionState = {
    sessions: {
        count: 0,
        data: []
    },
    loading: false,
    error: null
}

export const sessionReducer = (state = initialState, action: SessionAction): SessionState => {
    switch (action.type){
        case SessionActionTypes.FETCH_SESSIONS:
            return { ...state, loading: true}
        case SessionActionTypes.FETCH_SESSIONS_SUCCESS:
            return { ...state, loading: false, sessions: action.payload}
        case SessionActionTypes.FETCH_SESSIONS_ERROR:
            return { ...state, loading: false, error: action.payload}
        default:
            return state;
    }
}
