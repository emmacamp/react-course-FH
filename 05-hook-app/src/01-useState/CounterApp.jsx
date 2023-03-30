import React, { useState, useEffect } from 'react';


export const CounterApp = () => {
    let [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    let { counter1, counter2, counter3 } = state;

    return (
        <div>
            <h2>CounterApp</h2>
            <p> Counter 1: {counter1}</p>
            <p> Counter 2: {counter2}</p>
            <p> Counter 3: {counter3}</p>
            <hr />
            <button className="btn btn-light" onClick={() => setCounter({ ...state, counter1: counter1 + 1 })}>+1</button>
        </div >
    )
}
