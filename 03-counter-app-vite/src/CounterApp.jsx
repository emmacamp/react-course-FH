import Proptypes from 'prop-types'

export const CounterApp = ({ value }) => {
    const handleAdd = () => {

    }
    return (
        <div>
            <h1>CounterApp</h1>
            <h2>{value}</h2>

            <button onClick={handleAdd}>
                +1
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