import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter()
    return (
        <>
            <div>Counter With Custom Hook: {counter}</div>
            <button onClick={() => increment(2)} className="btn btn-primary">+1</button >
            <button onClick={() => decrement(2)} className="btn btn-primary" > -1</button >
            <button onClick={reset} className="btn btn-primary" >reset</button>
        </>
    )
}
