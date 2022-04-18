import axios from "axios";
import {ITodo, TodoAction, TodoActionTypes} from "../../types/todo";
import {Dispatch} from "redux";

export const fetchTodos = (page = 1, limit =  10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try  {
            dispatch({type: TodoActionTypes.FETCH_TODOS})
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _page: page,
                    _limit: limit
                }
            })
            dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Ошибка при загрузке todo'
            })
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {
        type: TodoActionTypes.SET_TODO_PAGE,
        payload: page
    }
}
