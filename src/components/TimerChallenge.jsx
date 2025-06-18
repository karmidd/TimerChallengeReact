import {useState, useRef} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();
    timer.current
    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000);
    const [timeRemainingProp, setTimeRemainingProp] = useState(timeRemaining);
    const timerIsActive = (timeRemaining > 0) && (timeRemaining < targetTime*1000);

    if(timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemainingProp(timeRemaining);
        setTimeRemaining(targetTime*1000);
        dialog.current.showModal();
    }
    function handleStart(){
        timer.current = setInterval(() => {
            setTimeRemaining(prevTime => prevTime-10);
            }, 10)
        setIn
    }

    function handleStop(){
        clearInterval(timer.current);
        setTimeRemainingProp(timeRemaining);
        setTimeRemaining(targetTime*1000);
        dialog.current.showModal();
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} timeRemaining={timeRemainingProp} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    {timerIsActive ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    );
}