import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import NotePages from './NotePages'
import "../style/Login.css"

const LoginPage = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleLogin = async (e) => {
      e.preventDefault();

      if(!email || !password) {
        alert("Please fill in the field");
        return;
      }

      try {
        console.log("Ye to bss suruat hai");
        const URL = "http://localhost:4000/user/login";
        const response = await fetch(URL, {
          method : "POST",
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({email, password})
        });
        console.log("Ye to bss suruat hai 2");
        const result = await response.json();
        const {status, message, error} = result;

        console.log(status);

        if(status) {
          navigate('/notes');
        }
        else {
          alert("ye to galat baat hai");
        }

        console.log(result);
      } catch (error) {
        console.log(error);
      }

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