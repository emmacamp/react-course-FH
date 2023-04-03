import { useRef } from "react";

export const FocusScreen = () => {
    let ref = useRef();

    function onClickRef() {
        // document.querySelector('input').focus()
        // document.querySelector('input').select()
        ref.current.select()
        console.log('ref');
    }

    return (
        <>
            <input
                ref={ref}
                type="text"
                className="form-control"
            />
            <hr />


            <button
                className="btn btn-outline-primary mt-5"
                onClick={onClickRef}
            >
                Send
            </button>
        </>
    )
}
