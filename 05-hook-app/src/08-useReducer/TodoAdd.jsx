import { useRef } from 'react';
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

    let ref = useRef();
    const { formState, onInputChange, onResetForm} = useForm({ description: '' })


    const onClickRef = () => {
        ref.current.select()
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (formState.description.trim().length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            todo: formState.description,
            done: false
        }

        onNewTodo && onNewTodo(newTodo);
        onClickRef();
    }


    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="description"
                className="form-control"
                placeholder="¿Qué piensas hacer?"
                onChange={onInputChange}
                value={formState.description}
                ref={ref}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1 btn-block"
            >
                Add
            </button>
        </form>
    )
}
