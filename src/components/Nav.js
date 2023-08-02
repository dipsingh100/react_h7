import React from 'react'
import '../css/nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/students">Students</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
    </div>
  )
}

export default Nav
