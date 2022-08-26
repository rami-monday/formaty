import React from 'react'
import '../style/Buttons/Copier.css'
import { FaCopy } from 'react-icons/fa';

const Copier = ({formId}) => {
    
    const copyToClipboard = function() {
        const url = window.location.origin
        navigator.clipboard.writeText(url+`/form/${formId}`).then(() => {
            alert("Copied to clipboard");
        });
    
    }

  return (
    <button className='CopierBtn' onClick={copyToClipboard}><FaCopy></FaCopy></button>
  )
}

export default Copier