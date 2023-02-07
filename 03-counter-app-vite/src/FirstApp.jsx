import Proptypes from 'prop-types'

const newMessage = { name: 'Pepe', age: 10 }

export const FirstApp = ({ title, subTitle }) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
        </>
    )
}



FirstApp.propTypes = {
    title: Proptypes.string.isRequired,
    subTitle: Proptypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'Default title',
    subTitle: 0
}