import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <li><NavLink exact to="/" activeClassName='active'>Home</NavLink></li>
                    <li><NavLink to="/People" activeClassName='active'>People</NavLink></li>
                    <li><NavLink to="/Contact" activeClassName='active'>Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
