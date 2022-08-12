import React from 'react'
import "../style/inputFields/TextInput.css"

const DateInput = (props) => {
    return (
        <input className='textInput' type="date" {...props}/>
    )
}

export default DateInput