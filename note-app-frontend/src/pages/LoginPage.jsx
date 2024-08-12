import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoginPage.css';

const LoginPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    }
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        // Handle authentication logic here

        try {
            const response = await fetch('http://localhost:4000/user/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            const data = await response.json();

            console.log("amity", data, " ", response);

            if (response.ok && data.status) {
                localStorage.setItem('token', data.token);
                navigate('/home');
            }
            else {
                alert(data.message)
                setError(data.message || 'Failed to log in');
            }
        } catch (error) {
            alert("Something went wrong !")
            setError('An error occurred. Please try again.');
        }

        // navigate('/home');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    name='email'
                    value={user.email}
                    onChange={handleInput}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    name='password'
                    value={user.password}
                    onChange={handleInput}
                    placeholder="Password"
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account?{' '}
                <button onClick={() => navigate('/signup')} className="link-button">
                    Sign Up
                </button>
            </p>
        </div>
    );
};

export default LoginPage;
