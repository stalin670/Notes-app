// src/pages/SignupPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SignupPage.css';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();
        // Handle user creation logic here
        navigate('/login'); // Redirect to the login page after successful signup
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
