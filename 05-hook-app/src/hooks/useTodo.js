import { useReducer, useEffect } from "react";
import { todoActions, todoReducer } from "../08-useReducer/todoReducer";

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleNewTodo = (newTodo) => {
        // console.log('newTodo: ', newTodo);
        dispatch({
            type: todoActions.add,
            payload: newTodo
        })
    }

    const handleDelete = (id) => {
        // console.log('id: ', id);
        dispatch({
            type: todoActions.delete,
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: todoActions.toggle,
            payload: id
        })
    }
  
    return {
        todos,
        handleNewTodo,
        handleDelete,
        handleToggleTodo,
  }
}
