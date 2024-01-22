import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './store'

function App() {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <h1>Vite + React</h1>
        <div className="card">
          count is {counter}


          <div className="">
            <button onClick={() => dispatch(decrement())}>
              Decrement
            </button>
            <button onClick={() => dispatch(increment())}>
              Increment by 2
            </button>
            <button onClick={() => dispatch(incrementBy(2))}>
              Increment by 2
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
