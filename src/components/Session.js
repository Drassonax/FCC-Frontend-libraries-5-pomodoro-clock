import React from 'react'

const Session = (props) => {
    return (
        <div id="session">
            <h2 id="session-label">Session Length</h2>
            <div id="session-increment" onClick={props.incrementSession}>
                <i className="fas fa-angle-up"></i>
            </div>
            <div id="session-length">{props.sessionLength}</div>
            <div id="session-decrement" onClick={props.decrementSession}>
                <i className="fas fa-angle-down"></i>
            </div>
        </div>
    )
}

export default Session