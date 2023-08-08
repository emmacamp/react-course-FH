export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    const { id, todo: todoText, done } = !!todo && todo;

    return (
        <li key={id} className='list-group-item d-flex justify-content-between border my-1'>
            <span
                className={`align-self-center ${done ? 'text-decoration-line-through' : ''}`}
                onClick={() => onToggleTodo(id)}
            >
                {todoText}
            </span>
            <div>
                <div className="badge">
                    {
                        done
                            ? <span className='badge bg-success rounded-5'>Done</span>
                            : <span className='badge bg-danger rounded-5'>Pending</span>
                    }
                </div>
                <button className='btn btn-danger' onClick={() => onDeleteTodo(id)}>Delete</button>
            </div>
        </li>
    )
}