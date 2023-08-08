import { useReducer } from 'react'
import { todoActions, todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useEffect } from 'react'
import { useTodo } from '../hooks/useTodo'


export const TodoApp = () => {
    const { todos, handleDelete, handleNewTodo, handleToggleTodo } = useTodo();

    return (
        <div>
            <h1>TodoApp</h1>
            <p>TODOS: {todos?.length} Pending: {todos.filter(todo => !todo.done).length}</p>
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDelete} onToggleTodo={handleToggleTodo} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </div>
    )
}
