import { useState } from 'react';
import { useRef, useLayoutEffect } from 'react'



export const Quote = ({ author, quote }) => {
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ height: 0, width: 0 })

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width })

    }, [quote])


    return (
        <>
            <blockquote className="blockquote text-center mt-5">
                <p ref={pRef} className="mb-2">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}



