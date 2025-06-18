import {createPortal} from 'react-dom';

export default function ResultModal({targetTime, ref, timeRemaining}) {
    return createPortal(
        <dialog ref={ref} className="result-modal">
            {timeRemaining === 0 ? <h2>You lost</h2> : <h2>Your score: {Math.round((1- timeRemaining/(targetTime*1000))*100)}</h2> }
            <p>The target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}.</strong></p>
            <p>You stopped the timer with <strong>{(timeRemaining/1000).toFixed(2)} seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>, document.getElementById('modal')
    );
}