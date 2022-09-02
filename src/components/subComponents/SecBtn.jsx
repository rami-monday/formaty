import React from 'react'
import '../style/Buttons/SecBtn.css'

export const SecBtn = ({btnText , btnHandle}) => {
  return (
    <div>
    <button className='SecBtn' onClick={btnHandle}>{btnText}</button>
 </div>
  )
}

export default SecBtn


