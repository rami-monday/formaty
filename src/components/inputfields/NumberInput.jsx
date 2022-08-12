import React from 'react'
import "../style/inputFields/TextInput.css"

const NumberInput = (props) => {
  return (
<input className='textInput' type="number" {...props} />
  )
}

export default NumberInput