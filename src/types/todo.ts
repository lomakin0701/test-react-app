export interface TodoState {
    todos: ITodo[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}
export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS  = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE',
    SET_TODO_LIMIT = 'SET_TODO_LIMIT',
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS
    payload: any []
}
interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR
    payload: string
}
interface SetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE
    payload: number
}
interface SetTodoLimit {
    type: TodoActionTypes.SET_TODO_LIMIT
    payload: number
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoLimit | SetTodoPage

export interface ITodo {
    id: number,
    title: string
}
