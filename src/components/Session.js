import React from 'react'

const Session = (props) => {
    return (
        <div>
            <div id="session-label">Session Length</div>
            <div id="session-decrement" onClick={props.decrementSession}>-</div>
            <div id="session-length">{props.sessionLength}</div>
            <div id="session-increment" onClick={props.incrementSession}>+</div>
        </div>
    )
}

export default Session