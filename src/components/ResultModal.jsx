import {useImperativeHandle, useRef} from "react";

export default function ResultModal({result, targetTime, ref}) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            }
        }
    })
    return (
        <dialog ref={ref} className="result-modal">
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}.</strong></p>
            <p>You stopped the timer with <strong>seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
}