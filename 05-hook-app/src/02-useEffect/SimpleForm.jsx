import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'pepe',
        email: 'pepe@gmail.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // console.log({ name, value });
        setFormState({
            ...formState,
            [name]: value
        })
    }


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="example@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'pepe') && <Message />
            }
        </>
    )
}
