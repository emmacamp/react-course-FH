import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { useMemo } from "react"

const heavyStuff = (iterationValue = 100) => {
    for (let i = 0; i < iterationValue; i++) {
        console.log('iteration');
    }

    return `${iterationValue} iteraciones realizadas`
}

export const MemoHook = () => {
    const { counter, increment } = useCounter(4000)
    const [show, setShow] = useState(false)

    const memorize = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>
                Counter
                <hr />
                <small>{memorize}</small>
            </h1>

            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                onClick={() => setShow(!show)}
                className="btn btn-outline-primary"
            >
                Show/Hide: {JSON.stringify(show)}
            </button>
        </>
    )
}
