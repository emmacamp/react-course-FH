import React from 'react'

export const Small = React.memo(({ counter }) => {
    console.log('Small render');
    return (
        <small> {counter}</small>
    )
})
