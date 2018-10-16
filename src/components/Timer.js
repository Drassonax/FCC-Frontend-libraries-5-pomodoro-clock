import React from 'react'

const Timer = (props) => {
    return (
        <div id="timer-container">
            <div id="timer">
                <div id="display">
                    <div id="timer-label">{props.timerLabel}</div>
                    <div id="time-left">{props.timer}</div>
                </div>
                <div id="buttons">
                    <span id="start_stop" onClick={props.startOrStop}>
                        {props.isRunning ? 
                            <i className="fas fa-pause"></i>
                            :
                            <i className="fas fa-play"></i>}
                    </span>
                    <span id="reset" onClick={props.resetTimer}>
                        <i className="fas fa-sync-alt"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Timer