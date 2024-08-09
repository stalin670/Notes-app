// src/components/Header.jsx

import React, { useState } from 'react';
import '../css/Header.css';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="header">
            <div className="header-title">
                <h1>Note App</h1>
            </div>
            <div className="header-profile">
                <div className="profile-icon" onClick={toggleDropdown}>
                    <img
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="Profile"
                        className="profile-image"
                    />
                </div>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <button>Login</button>
                        <button>Sign Up</button>
                        <button>Log Out</button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
