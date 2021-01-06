import React from 'react'
import "./navigacija.css"
function FormatedDate(props) {
    return (
        <div>
            <h2 className="nav-time">{props.date.toLocaleTimeString()}</h2>
        </div>
    )
}

export default FormatedDate
