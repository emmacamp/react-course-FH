import { useTodo } from '../hooks/useTodo'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'


export const TodoApp = () => {
    const { todos, todoCount, todoPendingCount, handleDelete, handleNewTodo, handleToggleTodo } = useTodo();

    return (
        <div>
            <h1>TodoApp</h1>
            <p>TODOS: {todoCount} Pending: {todoPendingCount}</p>
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
