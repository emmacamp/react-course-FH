const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}]

export const todoReducer = (state = initialState, action = {}) => {
    
    if(action.type === 'add') return [...state, action.payload];
    if(action.type === 'delete') return state.filter(todo => todo.id !== action.payload);

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Ir al gym',
    done: true
}

// const todoAction = {
//     type: 'add',
//     payload: newTodo
// }

const todoAction = {
    type: 'delete',
    payload: newTodo
}

todos = todoReducer(todos, todoAction);

console.log(todos);

// const todoConsumer = () => todoReducer(todos, todoAction);

// const [{id}] = todoConsumer();


// console.log(id);