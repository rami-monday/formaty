import React from 'react'
import "../style/inputFields/TextInput.css"

const TextInput = (props) => {
    return (
        <input className='textInput' type={"text"} {...props} />
    )
}

export default TextInput