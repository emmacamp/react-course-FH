import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo) => (
                    <TodoItem todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>
                ))
            }
        </ul>
    )
}
