import React, {useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
    const {todos, loading, error, page, limit} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions();
    const pages = [1, 2, 3, 4, 5]

    useEffect(()=> {
        fetchTodos(page, limit)
    },[page])

    if(loading){
        return <div>Loading...</div>
    }

    if (error){
        return <div>{error}</div>
    }

    return (
        <div>
            {todos.map(item => (
                <div key={item.id}>
                    Задачка: {item.title}
                </div>
            ))}
            //TODO: переместить стили в css :)
            <div style={{display: 'flex'}}>
                {pages.map(item => (
                    <div style={{border: item === page ? '2px solid green' : '1px solid gray', padding: 10}}
                         key={item}
                         onClick={() => {
                             setTodoPage(item)
                         }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoList;
