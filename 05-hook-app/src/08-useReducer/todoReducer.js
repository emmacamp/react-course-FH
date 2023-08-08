
export const todoActions = {
    add: 'add',
    delete: 'delete',
    toggle: 'toggle'
}

export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case todoActions.add:
            return [...initialState, action.payload];
        case todoActions.delete:
            return initialState.filter(todo => todo.id !== action.payload);
        case todoActions.toggle:
            return initialState.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo);
        default:
            return initialState;
    }
}

// export const todoConsumer = () => useReducer(todoReducer, initialState);