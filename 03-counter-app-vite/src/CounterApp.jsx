import Proptypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1);
    const handleSub = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);


    return (
        <div>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>
                +1
            </button>
            <button onClick={handleSub}>
                -1
            </button>
            <button aria-label='btn-reset' onClick={handleReset}>
                Reset
            </button>
        </div>
    )
}


CounterApp.propTypes = {
    value: Proptypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}