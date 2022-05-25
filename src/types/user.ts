

export interface UserState {
    users?: IUser[];
    loading: boolean;
    error: null | string;
    user?: IUser | null
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS  = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS  = 'FETCH_USER_SUCCESS',
    FETCH_USER_ERROR = 'FETCH_USER_ERROR',
    CREATE_USER = 'CREATE_USER',
    CREATE_USER_SUCCESS  = 'CREATE_USER_SUCCESS',
    CREATE_USER_ERROR = 'CREATE_USER_ERROR',
    UPDATE_USER = 'UPDATE_USER',
    UPDATE_USER_SUCCESS  = 'UPDATE_USER_SUCCESS',
    UPDATE_USER_ERROR = 'UPDATE_USER_ERROR',
    DELETE_USER = 'DELETE_USER',
    DELETE_USER_SUCCESS  = 'DELETE_USER_SUCCESS',
    DELETE_USER_ERROR = 'DELETE_USER_ERROR',
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS
    payload: IUser []
}

interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR
    payload: string
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USER
}

interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_SUCCESS
    payload: IUser
}

interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_ERROR
    payload: string
}

interface CreateUserAction {
    type: UserActionTypes.CREATE_USER
}

interface CreateUserSuccessAction {
    type: UserActionTypes.CREATE_USER_SUCCESS
}

interface CreateUserErrorAction {
    type: UserActionTypes.CREATE_USER_ERROR
    payload: string
}

interface UpdateUserAction {
    type: UserActionTypes.UPDATE_USER
}

interface UpdateUserSuccessAction {
    type: UserActionTypes.UPDATE_USER_SUCCESS
    payload: IUser
}

interface UpdateUserErrorAction {
    type: UserActionTypes.UPDATE_USER_ERROR
    payload: string
}

interface DeleteUserAction {
    type: UserActionTypes.DELETE_USER
}

interface DeleteUserSuccessAction {
    type: UserActionTypes.DELETE_USER_SUCCESS
}

interface DeleteUserErrorAction {
    type: UserActionTypes.DELETE_USER_ERROR
    payload: string
}

export type UserAction =
    FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction    |
    FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction       |
    CreateUserAction | CreateUserSuccessAction | CreateUserErrorAction    |
    UpdateUserAction | UpdateUserSuccessAction | UpdateUserErrorAction    |
    DeleteUserAction | DeleteUserSuccessAction | DeleteUserErrorAction;

export interface IUser {
    user_id: string;
    user_fio: string;
    user_login: string;
    role: string;
    count: number;
}
