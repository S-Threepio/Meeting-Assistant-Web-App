import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Nav() {

const nvstyle = {
    color:'white'
};

    return (
        <nav className="rav">
            <h3>Logo</h3>

            <ul className="nav-links">
                <Link style={nvstyle} to='/about'>
                    <li >About</li>
                </Link>
                <Link style={nvstyle} to='/shop'>
                    <li >Shop</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
