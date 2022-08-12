import React from 'react'
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
    const navigate = useNavigate();

    const signOut= function () {
        localStorage.clear()
        navigate("/")
        
    }
  return (
    <div>
        <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default SignOut