export interface AnalyzeState {
    analyzes: FetchAnalyzesResponse;
    loading: boolean;
    error: null | string;
}

export interface FetchAnalyzesResponse {
    count: number,
    data: IAnalyze[],
}

export enum AnalyzeActionTypes {
    FETCH_ANALYZES = 'FETCH_ANALYZES',
    FETCH_ANALYZES_SUCCESS  = 'FETCH_ANALYZES_SUCCESS',
    FETCH_ANALYZES_ERROR = 'FETCH_ANALYZES_ERROR',
}

interface FetchAnalyzesAction {
    type: AnalyzeActionTypes.FETCH_ANALYZES
}

interface FetchAnalyzesSuccessAction {
    type: AnalyzeActionTypes.FETCH_ANALYZES_SUCCESS
    payload: FetchAnalyzesResponse
}

interface FetchAnalyzesErrorAction {
    type: AnalyzeActionTypes.FETCH_ANALYZES_ERROR
    payload: string
}


export type AnalyzeAction = FetchAnalyzesAction | FetchAnalyzesSuccessAction | FetchAnalyzesErrorAction;

export interface IAnalyze {
    type: string,
    message: string,
}
