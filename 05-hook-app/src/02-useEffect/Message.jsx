import { useState } from "react";
import { useEffect } from "react";


export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 })

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            // console.log({ x, y });
            setCoords({ x, y })
        }
        window.addEventListener('mousemove', onMouseMove)

        return () => {
            // when component is unmount
            window.removeEventListener('mousemove', onMouseMove)

        }
    }, [])
    return (
        <div>{JSON.stringify(coords)}</div>
    )
}
