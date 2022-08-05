import React from 'react'
import DateInput from './DateInput'
import TextInput from './TextInput'
import LongTextInput from './LongTextInput'
import NumberInput from './NumberInput'


const inputTypeComponenet = {
    date: DateInput,
    text: TextInput,
    longText: LongTextInput,
    number: NumberInput
}

const InputField = ({ inputField }) => {
    const { type, label } = inputField
    return (
        <div>
            <h2>{label}</h2>
        {inputTypeComponenet[type]}
        </div>
    )
}

export default InputField