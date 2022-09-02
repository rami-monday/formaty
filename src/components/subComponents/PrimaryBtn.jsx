import React from 'react'
import "../style/Buttons/PrimaryBtn.css"

export const PrimaryBtn = ({btnText , btnHandle}) => {
    
  return (
    <div>
         <button className='PrimaryBtn' onClick={btnHandle}>{btnText}</button>
      </div>
  )
}

export default PrimaryBtn
