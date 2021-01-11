import React from 'react'
function FormatedDate(props) {
    return (
        <div>
            <h3>{props.day}, {props.date}. {props.month} {props.year} {props.time.toLocaleTimeString()}</h3>
        </div>
    )
}

export default FormatedDate
