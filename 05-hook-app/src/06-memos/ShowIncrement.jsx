import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
    console.log('Me volví a generar');

    return (
        <>
            <div>ShowIncrement</div>
            <button
                className="btn btn-primary"
                onClick={() => increment(2)}>
                Incrementar
            </button>
        </>

    )
})
