import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import NotePages from './NotePages'
import "../style/Login.css"

const LoginPage = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleLogin = () => {

        navigate('/notes');
    }


  return (
    <div className="Form-Container">
        <h2>Login</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button onClick={handleLogin} >Login</button>
        <p>
            Don't have an account ? <button onClick={() => navigate('/signup')} >Signup</button>
        </p>
    </div>
  )
}

export default LoginPage