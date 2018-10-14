import React from 'react'

const Break = (props) => {
    return (
        <div>
            <div id="break-label">Break Length</div>
            <div id="break-decrement" onClick={props.decrementBreak}>-</div>
            <div id="break-length">{props.breakLength}</div>
            <div id="break-increment" onClick={props.incrementBreak}>+</div>
        </div>
    )
}

export default Break