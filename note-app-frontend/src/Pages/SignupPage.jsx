import React, { useState } from 'react'
import "../style/Signup.css"
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSignup = () => {

        navigate('/login');
    }


  return (
    <div className="Form-Container">
        <h2>Sign Up</h2>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <button onClick={handleSignup}>Signup</button>
        <p>
            Already have an account ? <button onClick={() => navigate('/login')}>Login</button>
        </p>
    </div>
  )
}

export default SignupPage