import Proptypes from 'prop-types'

// const newMessage = { name: 'Pepe', age: 10 }

export const FirstApp = ({ title, subTitle, name }) => {
    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <h2>{subTitle}</h2>
            <h2>{subTitle}</h2>
            <p>{name}</p>
        </>
    )
}


FirstApp.propTypes = {
    title: Proptypes.string.isRequired,
    subTitle: Proptypes.number.isRequired
}

FirstApp.defaultProps = {
    // title: 'Default title',
    subTitle: 'Im subtitle',
    name: 'user'
}