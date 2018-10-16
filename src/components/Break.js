import React from 'react'

const Break = (props) => {
    return (
        <div id="break">
            <h2 id="break-label">Break Length</h2>
            <div id="break-increment" onClick={props.incrementBreak}>
                <i className="fas fa-angle-up"></i>
            </div>
            <div id="break-length">{props.breakLength}</div>
            <div id="break-decrement" onClick={props.decrementBreak}>
                <i className="fas fa-angle-down"></i>
            </div>
        </div>
    )
}

export default Break