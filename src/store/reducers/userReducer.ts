import {UserState, UserAction, UserActionTypes} from "../../types/user";

const initialState: UserState = {
    users: {
        count: 0,
        data: []
    },
    user: null,
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type){
        case UserActionTypes.FETCH_USERS:
            return {loading: true, error: null, users: { count: 0, data: []}}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {...state, user: action.payload }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}
