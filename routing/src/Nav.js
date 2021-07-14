import React from 'react';
import './App.css';
import { Link, withRouter } from 'react-router-dom';

function Nav() {
    const navstyle = {
        color: 'white'
    }

    return (
        <nav>
            <Link style={navstyle} to="/">
                <h3>Logo</h3>
            </Link>
            <ul className="nav-links">
                <Link style={navstyle} to="/about">
                    <li>About</li>
                </Link>
                <Link style={navstyle} to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
