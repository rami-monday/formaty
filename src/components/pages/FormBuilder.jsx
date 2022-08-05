import React, { useState } from 'react'
const inputFieldsTypes =[
    "text",
    "longText",
    "number",
    "date"
]
const FormBuilder = ({user}) => {
    const [title, setTitle] = useState("")
    const [inputFields, setInputFields] = useState([])
    
  return (
    <div>FormBuilder</div>
  )
}

export default FormBuilder