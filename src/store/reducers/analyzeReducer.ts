import {AnalyzeState, AnalyzeAction, AnalyzeActionTypes} from "../../types/analyze";

const initialState: AnalyzeState = {
    analyzes: {
        count: 0,
        data: []
    },
    loading: false,
    error: null
}

export const analyzeReducer = (state = initialState, action: AnalyzeAction): AnalyzeState => {
    switch (action.type){
        case AnalyzeActionTypes.FETCH_ANALYZES:
            return { ...state, loading: true}
        case AnalyzeActionTypes.FETCH_ANALYZES_SUCCESS:
            return { ...state, loading: false, analyzes: action.payload}
        case AnalyzeActionTypes.FETCH_ANALYZES_ERROR:
            return { ...state, loading: false, error: action.payload}
        default:
            return state;
    }
}
