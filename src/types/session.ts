export interface SessionState {
    sessions: FetchSessionsResponse;
    loading: boolean;
    error: null | string;
}

export interface FetchSessionsResponse {
    count: number,
    data: ISession[],
}

export enum SessionActionTypes {
    FETCH_SESSIONS = 'FETCH_SESSIONS',
    FETCH_SESSIONS_SUCCESS  = 'FETCH_SESSIONS_SUCCESS',
    FETCH_SESSIONS_ERROR = 'FETCH_SESSIONS_ERROR',
}

interface FetchSessionsAction {
    type: SessionActionTypes.FETCH_SESSIONS
}

interface FetchSessionsSuccessAction {
    type: SessionActionTypes.FETCH_SESSIONS_SUCCESS
    payload: FetchSessionsResponse
}

interface FetchSessionsErrorAction {
    type: SessionActionTypes.FETCH_SESSIONS_ERROR
    payload: string
}


export type SessionAction = FetchSessionsAction | FetchSessionsSuccessAction | FetchSessionsErrorAction;


export interface ISession {
    user: string,
    service: string,
    remote_ip: string,
    mac: string,
    local_ip: string,
    date_up: string,
    date_down: string,
}
