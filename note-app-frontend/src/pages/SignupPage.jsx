// src/pages/SignupPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SignupPage.css';

const SignupPage = () => {
    const [user, setUser] = useState({
        name: "",
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
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();
        // Handle user creation logic here

        console.log(user);

        try {
            const response = fetch(`http://localhost:4000/user/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            console.log(response);
        } catch (error) {
            console.log(error);
        }

        navigate('/login'); // Redirect to the login page after successful signup
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    name='name'
                    value={user.name}
                    onChange={handleInput}
                    placeholder="Name"
                    required
                />
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
                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account?{' '}
                <button onClick={() => navigate('/login')} className="link-button">
                    Login
                </button>
            </p>
        </div>
    );
};

export default SignupPage;
