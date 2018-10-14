import React from 'react'

const Timer = (props) => {
    return (
        <div>
            <div id="display">
                <div id="timer-label">{props.timerLabel}</div>
                <div id="time-left">{props.timer}</div>
            </div>
            <div id="buttons">
                <button id="start_stop" onClick={props.startOrStop}>start/stop</button>
                <button id="reset" onClick={props.resetTimer}>reset</button>
            </div>
        </div>
    )
}

export default Timer