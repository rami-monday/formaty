import React from 'react'

const Copier = ({formId}) => {
    
    const copyToClipboard = function() {
        const url = window.location.origin
        navigator.clipboard.writeText(url+`/form/${formId}`).then(() => {
            alert("Copied to clipboard");
        });
    
    }

  return (
    <button onClick={copyToClipboard}>copier</button>
  )
}

export default Copier