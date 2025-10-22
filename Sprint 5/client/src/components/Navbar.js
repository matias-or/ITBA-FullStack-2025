import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">HomePage</Link>
            <Link to="/about">AboutPage</Link>
        </nav>
    );
}

export default Navbar;